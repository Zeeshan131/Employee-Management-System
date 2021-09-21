import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from 'semantic-ui-react';

function HomePage() {
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Home</h1>
            <h3>Go to <Link to='/projects'>Projects</Link></h3>
        </Container>
    )
}

export default HomePage;