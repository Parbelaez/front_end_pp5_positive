import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_color_trimmed from '../assets/logo_color_trimmed.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand>
                    <img src={logo_color_trimmed} alt="logo" height="45"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/places">Places</NavLink>
                        <NavLink to="/posts">Posts</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/logout">Logout</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar