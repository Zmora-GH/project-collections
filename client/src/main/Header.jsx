import React, {useContext} from 'react';
import {Navbar, NavDropdown, Nav, FormControl, Button, Form, InputGroup} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';

import {AuthContext} from '../core/context';

export default function Header() {
    const {isAuth, isAdmin, username} = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" className="decor-brand-text">Collections</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/collection/3">TEST:COLLECTION</Nav.Link>
                    <Nav.Link href="/items/BlaBalKab">TEST:ITEMS</Nav.Link>
                </Nav>
                <Nav>
                    <Form inline>
                        <InputGroup className="mx-3">
                            <FormControl
                                placeholder="Search"
                                type="text"
                                name="search"
                                className="bg-dark border-secondary text-light"/>
                            <InputGroup.Append>
                                <Button variant="outline-secondary"><Search className="text-light mx-1" /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form>
                </Nav>
                    {isAuth ?
                        <Nav>
                            <NavDropdown title={username.toUpperCase()} id="collasible-nav-dropdown">
                                <NavDropdown.Item href={"/profile/" + username}>My Profile</NavDropdown.Item>
                                {isAdmin ? <NavDropdown.Item href="/admin">Admin Panel</NavDropdown.Item> : ''}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/" onClick={()=>{localStorage.clear()}}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    :
                        <Nav>
                            <Nav.Link href="/login">Sign In</Nav.Link>
                            <Nav.Link href="/signup"> Sign Up </Nav.Link>
                        </Nav>
                    }
            </Navbar.Collapse>
        </Navbar>
    )
}
