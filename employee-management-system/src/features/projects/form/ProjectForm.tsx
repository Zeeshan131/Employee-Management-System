import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Project } from '../../../app/models/project';

interface Props {
    project: Project | undefined;
    closeForm: () => void;
    createOrEdit: (project: Project) => void;
}

function ProjectForm({ project: selectedProject, closeForm, createOrEdit }: Props) {

    const initialState = selectedProject ?? {
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
    }

    const [project, setProject] = useState(initialState);

    const handleSubmit = () => {
        createOrEdit(project);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setProject({...project, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
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
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default ProjectForm;