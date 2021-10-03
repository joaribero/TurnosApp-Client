import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useEffect,useContext } from 'react';
import AuthContext from '../context/auth/authContext';

const Navigation = () => {

    const authContext = useContext(AuthContext);
    const { user, getUser, logout} = authContext;

    useEffect(() => {
        getUser();

        // eslint-disable-next-line
    },[]);

    //funcion que llama al state para desloguear al usuario.
    const onClickLogout = () => {
        logout();
    };

    return (  
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" fixed="top">     
            <button className="btn btn-primary" 
                type="button" 
                className="navbar-toggler"
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvas" 
                aria-controls="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Brand as={NavLink} to ='/' className="mx-5"> 
                TurnosApp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav mx-auto"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/projects" >Turnos</Nav.Link>
                    <NavDropdown title="Admin" id="admin-dropdown" menuVariant="dark">
                        <NavDropdown.Item as={NavLink} to="/admin/users">Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex me-5">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-1"
                        aria-label="Search"
                    />
                    <Button variant="outline-secondary">Buscar</Button>
                </Form>
                <Nav>
                    {!user ? <Nav.Link as={NavLink} to="/login">Login</Nav.Link> : null}
                    {!user ? <Nav.Link as={NavLink} to="/register">Register</Nav.Link> : null}
                    {user ? 
                    <NavDropdown title={`${user.firstName} ${user.lastName}`} align="end" menuVariant="dark">
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