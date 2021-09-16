import { Fragment, useEffect, useState } from 'react';
import NavBar from './NavBar';
import {v4 as uuid} from 'uuid';
import { Container } from 'semantic-ui-react';
import { Project } from '../models/project';
import ProjectDashboard from '../../features/projects/dashboard/ProjectDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Projects.list().then(response => {
      let projects: Project[] = [];
      response.forEach(project => {
        project.date = project.date.split('T')[0];
        projects.push(project);
      });
      setProjects(projects);
      setLoading(false);
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
    setSubmitting(true);
    if (project.id) {
      agent.Projects.update(project).then(() => {
        setProjects([...projects.filter(x => x.id !== project.id), project])
        setSelectedProject(project);
        setEditMode(false);
        setSubmitting(false);
      });
    } else {
      project.id = uuid();
      agent.Projects.create(project).then(() => {
        setProjects([...projects, project]);
        setSelectedProject(project);
        setEditMode(false);
        setSubmitting(false);
      });
    }
  }

  const handleDeleteProject = (id: string) => {
    setSubmitting(true);
    agent.Projects.delete(id).then(() => {
      setProjects([...projects.filter(x => x.id !== id)]);
      setSubmitting(false);
    });
  }

  if (loading) return <LoadingComponent content='Loading App' />

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
          submitting = {submitting}
        />
      </Container>
    </Fragment>
  );
}

export default App;
