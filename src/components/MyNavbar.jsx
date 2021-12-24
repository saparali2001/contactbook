import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                <Link className='navbar-brand' to="/">HOME</Link>
                <Nav className="me-auto">
                   <Link exact to="/create">Добавить</Link>
                </Nav>
                </Container>
            </Navbar>

    );
};

export default MyNavbar;