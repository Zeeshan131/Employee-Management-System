import { Fragment } from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ProjectDashboard from '../../features/projects/dashboard/ProjectDashboard';
import ProjectForm from '../../features/projects/form/ProjectForm';

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar />
            <Container fluid style={{ margin: '3em', padding: '5em' }}>
              <Route exact path='/projects' component={ProjectDashboard} />
              <Route key={location.key} path={['/createProject', '/manage/:id']} component={ProjectForm} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default observer(App);
