import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Employee Management System
                </Menu.Item>
                <Menu.Item as={NavLink} to='/projects' name='Projects' />
                <Menu.Item>
                    <Button
                        as={NavLink}
                        to='createProject'
                        positive
                        content='Create Project' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;