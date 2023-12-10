import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_color_trimmed from '../assets/logo_color_trimmed.png';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top" className="bg-body-tertiary">
            <Container>
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
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active}
                            exact to="/">Home
                        </NavLink>
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/places">Places
                        </NavLink>
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/posts">Posts
                        </NavLink>
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/profile">Profile
                        </NavLink>
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/logout">Logout
                        </NavLink>
                        <NavLink className={styles.NavLink}
                            activeClassName={styles.Active}
                            to="/about">About
                        </NavLink>
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