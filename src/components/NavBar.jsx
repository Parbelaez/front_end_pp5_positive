import React from 'react'
import { Button, Container, Form, Nav, Navbar }  from 'react-bootstrap';
import logo_color_trimmed from '../assets/logo_color_trimmed.png';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
    const currentUser = useCurrentUser();
    console.log('currentUser', currentUser);

    const loggedInIcons = <>{currentUser?.username}</>;
    const loggedOutIcons = <></>;

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
                    {currentUser ? loggedInIcons : loggedOutIcons}
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