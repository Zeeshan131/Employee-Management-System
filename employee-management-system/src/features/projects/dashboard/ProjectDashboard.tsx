import { Button, Grid, Icon, Table } from 'semantic-ui-react';
import { Project } from '../../../app/models/project';
import ProjectList from './ProjectList';
import ProjectForm from '../form/ProjectForm';

interface Props {
    projects: Project[];
    selectedProject: Project | undefined;
    selectProject: (id: string) => void;
    cancelSelectProject: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (project: Project) => void;
    deleteProject: (id: string) => void;
    submitting: boolean;
}

function ProjectDashboard({ projects, selectedProject, selectProject, cancelSelectProject, 
    editMode, openForm, closeForm, createOrEdit, deleteProject, submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='16'>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Tower</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Tech Pod</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Solution</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Status</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Domain Architect</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Product Owner</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Scrum Master</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>UX Designer</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Technical Lead</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Developer 1</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Developer 2</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Developer 3</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Developer 4</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Developer 5</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Developer 6</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }}>Developer 7</Table.HeaderCell>
                            <Table.HeaderCell style={{ color: 'DarkOrange' }} colSpan='2'>Edit or Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell positive>
                                <Icon name='checkmark' />
                                Unknown
                            </Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>Unknown</Table.Cell>
                            <Table.Cell>
                                <Button positive content='Edit Project' />
                            </Table.Cell>
                            <Table.Cell>
                                <Button negative content='Delete Project' />
                            </Table.Cell>
                        </Table.Row>
                        <ProjectList 
                            projects={projects} 
                            selectProject = {selectProject}
                            openForm = {openForm}
                            deleteProject = {deleteProject}
                            submitting = {submitting}
                        />
                    </Table.Body>
                </Table>
                {editMode &&
                <ProjectForm
                    closeForm = {closeForm} 
                    project = {selectedProject}
                    createOrEdit = {createOrEdit}
                    submitting = {submitting}
                />}
            </Grid.Column>
        </Grid>
    )
}

export default ProjectDashboard;