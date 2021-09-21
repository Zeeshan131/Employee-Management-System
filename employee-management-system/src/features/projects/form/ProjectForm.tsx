import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';

function ProjectForm() {
    const history = useHistory();
    const { projectStore } = useStore();
    const { createProject, updateProject, loading, loadProject, loadingInitial } = projectStore;
    const { id } = useParams<{ id: string }>();

    const [project, setProject] = useState({
        id: '',
        date: '',
        tower: '',
        techPod: '',
        solution: '',
        status: '',
        domainArchitecture: '',
        productOwner: '',
        scrumMaster: '',
        uxDesigner: '',
        technicalLead: '',
        developer1: '',
        developer2: '',
        developer3: '',
        developer4: '',
        developer5: '',
        developer6: '',
        developer7: '',
    });

    useEffect(() => {
        if (id) loadProject(id).then(project => setProject(project!));
    }, [id, loadProject]);

    const handleSubmit = () => {
        if (project.id.length === 0) {
            let newProject = {
                ...project,
                id: uuid()
            };
            createProject(newProject).then(() => history.push(`/projects`));
        } else {
            updateProject(project).then(() => history.push(`/projects`));
        }
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProject({ ...project, [name]: value });
    }

    if (loadingInitial || !project) return <LoadingComponent content='Loading project...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input type='date' placeholder='Date' value={project.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='Tower' value={project.tower} name='tower' onChange={handleInputChange} />
                <Form.Input placeholder='Tech Pod' value={project.techPod} name='techPod' onChange={handleInputChange} />
                <Form.Input placeholder='Solution' value={project.solution} name='solution' onChange={handleInputChange} />
                <Form.Input placeholder='Status' value={project.status} name='status' onChange={handleInputChange} />
                <Form.Input placeholder='Domain Architect' value={project.domainArchitecture} name='domainArchitecture' onChange={handleInputChange} />
                <Form.Input placeholder='Product Owner' value={project.productOwner} name='productOwner' onChange={handleInputChange} />
                <Form.Input placeholder='Scrum Master' value={project.scrumMaster} name='scrumMaster' onChange={handleInputChange} />
                <Form.Input placeholder='UX Designer' value={project.uxDesigner} name='uxDesigner' onChange={handleInputChange} />
                <Form.Input placeholder='Technical Lead' value={project.technicalLead} name='technicalLead' onChange={handleInputChange} />
                <Form.Input placeholder='Developer 1' value={project.developer1} name='developer1' onChange={handleInputChange} />
                <Form.Input placeholder='Developer 2' value={project.developer2} name='developer2' onChange={handleInputChange} />
                <Form.Input placeholder='Developer 3' value={project.developer3} name='developer3' onChange={handleInputChange} />
                <Form.Input placeholder='Developer 4' value={project.developer4} name='developer4' onChange={handleInputChange} />
                <Form.Input placeholder='Developer 5' value={project.developer5} name='developer5' onChange={handleInputChange} />
                <Form.Input placeholder='Developer 6' value={project.developer6} name='developer6' onChange={handleInputChange} />
                <Form.Input placeholder='Developer 7' value={project.developer7} name='developer7' onChange={handleInputChange} />
                <Button.Group floated='right'>
                    <Button as={Link} to='/projects' type='button' content='Cancel' />
                    <Button.Or />
                    <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                </Button.Group>
            </Form>
        </Segment>
    )
}

export default observer(ProjectForm);