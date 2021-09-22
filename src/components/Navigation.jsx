import {Navbar, Nav, NavDropdown, Button, Container, DropdownButton, Dropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useEffect,useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import axios from 'axios';
import DropdownMenu from 'react-overlays/esm/DropdownMenu';

const Navigation = () => {

    const authContext = useContext(AuthContext);
    const {authenticated, user, getUser, logout} = authContext;

    useEffect(() => {
        getUser();

        // eslint-disable-next-line
    },[]);

    //funcion que llama al state para desloguear al usuario.
    const onClickLogout = () => {
        logout();
    };

    return (  
        <Navbar collapseOnSelect expand="lg" variant="light" bg="light" className="mr-sm-2">
            <Navbar.Brand as={NavLink} to ='/'> 
                TurnosApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/projects" >Projects</Nav.Link>
                    <NavDropdown title="Admin" id="admin-dropdown" >
                        <NavDropdown.Item as={NavLink} to="/admin/users">Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    {!user ? <Nav.Link as={NavLink} to="/login">Login</Nav.Link> : null}
                    {!user ? <Nav.Link as={NavLink} to="/register">Register</Nav.Link> : null}
                    {user ? 
                    <NavDropdown alignRight title={user.username}>
                        <NavDropdown.Item as={NavLink} to="/account">Account</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item as={Button} onClick={onClickLogout} >Cerrar sesión</NavDropdown.Item>
                    </NavDropdown>
                    : null}                                
                </Nav>
            </Navbar.Collapse>
        </Navbar>        
    );
}
 
export default Navigation;