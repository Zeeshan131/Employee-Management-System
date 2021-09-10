import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/API/Projects').then(response => {
      console.log(response);
      setProjects(response.data);
    });
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='Employee Management System' />
      <List>
          {projects.map((project: any) => (
            <List.Item key={project.id}>{project.solution}</List.Item>
          ))}
      </List>
    </div>
  );
}

export default App;
