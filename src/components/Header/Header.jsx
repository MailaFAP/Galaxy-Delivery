import React from "react"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand >Galaxy Delivery</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                    <Nav.Link href="/editar">Editar</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;