import React, {useContext, useState} from 'react';
import {Navbar, NavDropdown, Nav, FormControl, Button, Form, InputGroup} from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons';
import { withTranslation } from 'react-i18next';
import { ColorContext, AuthContext } from '../core/context';

export default withTranslation()(function Header({t}) {
    const {isAuth, isAdmin, username} = useContext(AuthContext);
    const [searchData, setSearchData] = useState()

    const searchHandle = (event)=>{
        setSearchData(event.target.value)
    }

    const submitHandle = (event)=>{
        event.preventDefault();
         window.location.replace(`/search/${searchData}`);
    }

    return (
        <ColorContext.Consumer>
            {({colormode}) => (
                <Navbar collapseOnSelect expand="lg" bg={colormode.back} variant={colormode.back}>
                    <Navbar.Brand href="/" className="decor-brand-text">Collections</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">{t('main_home')}</Nav.Link>
                        </Nav>
                        <Nav>
                            <Form inline onSubmit={submitHandle}>
                                <InputGroup className="mx-3">
                                    <FormControl
                                        onChange={searchHandle}
                                        placeholder={t('main_search')}
                                        type="text"
                                        name="search"
                                        className={"border-secondary " + colormode.asClasses}/>
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary" type="submit">
                                            <Search className={colormode.text} />
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                        </Nav>
                            {isAuth ?
                                <Nav>
                                    <NavDropdown title={username.toUpperCase()} id="collasible-nav-dropdown">
                                        <NavDropdown.Item href={"/profile/" + username}>{t('main_profile')}</NavDropdown.Item>
                                        {isAdmin ? <NavDropdown.Item href="/admin">{t('main_admin')}</NavDropdown.Item> : ''}
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            href="/"
                                            onClick={()=>{localStorage.clear()}}
                                            >{t('main_logout')}
                                        </NavDropdown.Item>
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
            )}
        </ColorContext.Consumer>
    )
})
