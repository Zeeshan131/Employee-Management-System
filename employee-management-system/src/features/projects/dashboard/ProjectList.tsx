import { observer } from 'mobx-react-lite';
import { Fragment, SyntheticEvent, useState } from 'react';
import { Button, Icon, Table } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import classes from './styles.module.css';

function ProjectList() {

    const { projectStore } = useStore();
    const { projectByDate, deleteProject, loading } = projectStore;

    const [target, setTarget] = useState('');

    const handleProjectDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(e.currentTarget.name);
        deleteProject(id);
    }

    return (
        <Fragment>
            {projectByDate.map(project => (
                <Table.Row key={project.id} className={classes.tableRow}>
                    <Table.Cell className={classes.tower}>{project.tower}</Table.Cell>
                    <Table.Cell className={classes.techPod}>{project.techPod}</Table.Cell>
                    <Table.Cell className={classes.solution}>{project.solution}</Table.Cell>
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
                        <Button
                            onClick={() => projectStore.openForm(project.id)}
                            inverted
                            color='blue'
                            content='Edit Project' />
                    </Table.Cell>
                    <Table.Cell>
                        <Button
                            name={project.id}
                            loading={loading && target === project.id}
                            onClick={(e) => handleProjectDelete(e, project.id)}
                            inverted
                            color='red'
                            content='Delete Project' />
                    </Table.Cell>
                </Table.Row>
            ))}
        </Fragment>
    )
}

export default observer(ProjectList);