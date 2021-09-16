import { Fragment, useEffect, useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import { Container } from 'semantic-ui-react';
import { Project } from '../models/project';
import ProjectDashboard from '../../features/projects/dashboard/ProjectDashboard';

function App() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Project[]>('http://localhost:5000/API/Projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  const handleSelectProject = (id: string) => {
    setSelectedProject(projects.find(x => x.id === id));
  }

  const handleCancelSelectProject = () => {
    setSelectedProject(undefined);
  }

  const handleFormOpen = (id?: string) => {
    id ? handleSelectProject(id) : handleCancelSelectProject();
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  const handleCreateOrEditProject = (project: Project) => {
    project.id ?
    setProjects([...projects.filter(x => x.id !== project.id), project]) :
    setProjects([...projects, {...project, id: uuid()}]);
    setEditMode(false);
    setSelectedProject(project);
  }

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter(x => x.id !== id));
  }

  return (
    <Fragment>
      <NavBar openForm={handleFormOpen} />
      <Container fluid style={{ margin: '3em', padding: '5em' }}>
        <ProjectDashboard 
          projects={projects} 
          selectedProject = {selectedProject}
          selectProject = {handleSelectProject}
          cancelSelectProject = {handleCancelSelectProject}
          editMode = {editMode}
          openForm = {handleFormOpen}
          closeForm = {handleFormClose}
          createOrEdit = {handleCreateOrEditProject}
          deleteProject = {handleDeleteProject}
        />
      </Container>
    </Fragment>
  );
}

export default App;
