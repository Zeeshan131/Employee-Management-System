import { Fragment, useEffect } from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import ProjectDashboard from '../../features/projects/dashboard/ProjectDashboard';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

function App() {

  const { projectStore } = useStore();

  useEffect(() => {
    projectStore.loadProjects();
  }, [projectStore]);

  if (projectStore.loadingInitial) return <LoadingComponent content='Loading App' />

  return (
    <Fragment>
      <NavBar />
      <Container fluid style={{ margin: '3em', padding: '5em' }}>
        <ProjectDashboard />
      </Container>
    </Fragment>
  );
}

export default observer(App);
