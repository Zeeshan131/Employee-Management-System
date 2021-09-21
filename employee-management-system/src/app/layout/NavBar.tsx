import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';

function NavBar() {

    const { projectStore } = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Employee Management System
                </Menu.Item>
                <Menu.Item name='Projects' />
                <Menu.Item>
                    <Button
                        onClick={() => projectStore.openForm()}
                        positive
                        content='Create Project' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;