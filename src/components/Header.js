import React, { Component } from 'react'
import { NavDropdown, Nav, Navbar, Container, } from 'react-bootstrap';

function Header() {


    return (
        <Container>

            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="#/">Home</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                    <Nav.Link href="#/contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#/projects">Projects</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )

}

export default Header;