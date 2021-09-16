import { Fragment } from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import { Project } from '../../../app/models/project';

interface Props {
    projects: Project[];
    selectProject: (id: string) => void;
    openForm: (id: string) => void;
    deleteProject: (id: string) => void;
}

function ProjectList({ projects, selectProject, openForm, deleteProject }: Props) {
    return (
        <Fragment>
            {projects.map(project => (
                <Table.Row key={project.id}>
                    <Table.Cell>{project.tower}</Table.Cell>
                    <Table.Cell>{project.techPod}</Table.Cell>
                    <Table.Cell>{project.solution}</Table.Cell>
                    <Table.Cell positive>
                        <Icon name='checkmark' />
                        {project.status}
                    </Table.Cell>
                    <Table.Cell>{project.domainArchitecture}</Table.Cell>
                    <Table.Cell>{project.productOwner}</Table.Cell>
                    <Table.Cell>{project.scrumMaster}</Table.Cell>
                    <Table.Cell>{project.uxDesigner}</Table.Cell>
                    <Table.Cell>{project.technicalLead}</Table.Cell>
                    <Table.Cell>{project.developer1}</Table.Cell>
                    <Table.Cell>{project.developer2}</Table.Cell>
                    <Table.Cell>{project.developer3}</Table.Cell>
                    <Table.Cell>{project.developer4}</Table.Cell>
                    <Table.Cell>{project.developer5}</Table.Cell>
                    <Table.Cell>{project.developer6}</Table.Cell>
                    <Table.Cell>{project.developer7}</Table.Cell>
                    <Table.Cell>
                        <Button onClick={() => openForm(project.id)} basic color='blue' content='Edit Project' />
                    </Table.Cell>
                    <Table.Cell>
                        <Button onClick={() => deleteProject(project.id)} basic color='red' content='Delete Project' />
                    </Table.Cell>
                </Table.Row>
            ))}
        </Fragment>
    )
}

export default ProjectList;