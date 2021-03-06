import { useEffect } from 'react';
import { Grid, Table } from 'semantic-ui-react';
import ProjectList from './ProjectList';
import classes from './styles.module.css';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import LoadingComponent from '../../../app/layout/LoadingComponent';

function ProjectDashboard() {

    const { projectStore } = useStore();
    const {loadProjects, projects} = projectStore;

    useEffect(() => {
        if (projects.size <= 1) loadProjects();
    }, [projects.size, loadProjects]);

    if (projectStore.loadingInitial) return <LoadingComponent content='Loading App' />

    return (
        <Grid>
            <Grid.Column width='16'>
                <Table celled>
                    <Table.Header>
                        <Table.Row className={classes.tableRow}>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Tower</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Tech Pod</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Solution</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Status</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Domain Architect</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Product Owner</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Scrum Master</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>UX Designer</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Technical Lead</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Developer 1</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Developer 2</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Developer 3</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Developer 4</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Developer 5</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Developer 6</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }}>Developer 7</Table.HeaderCell>
                            <Table.HeaderCell style={{ backgroundColor: 'tomato', color: 'white' }} colSpan='2'>Edit or Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <ProjectList />
                    </Table.Body>
                </Table>
            </Grid.Column>
        </Grid>
    )
}

export default observer(ProjectDashboard);