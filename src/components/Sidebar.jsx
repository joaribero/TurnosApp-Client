import React, { useContext } from "react";
//eslint-disable-next-line
import bootstrap from 'bootstrap';
import AuthContext from "../context/auth/authContext";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar = () => {

    const authContext = useContext(AuthContext);
    const {user, logout} = authContext;

    //funcion que llama al state para desloguear al usuario.
    const onClickLogout = () => {
        logout();
    };
    
    return (  
        
        <div className="offcanvas offcanvas-start sidebar-nav bg-light " data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <ul className="nav flex-column mb-auto">              
                <li className="nav-item-sidebar p-2">
                    <Nav>
                        <Nav.Link as={NavLink} to="/a" className="link-dark">
                            <i class="fas fa-home me-2"></i>
                            Home
                        </Nav.Link>
                    </Nav>
                </li>
                <li className="nav-item nav-item-sidebar p-2">
                    <Nav>
                        <Nav.Link as={NavLink} to="/projects" className="link-dark">
                            <i class="fas fa-home me-2"></i>
                            Espacios
                        </Nav.Link>
                    </Nav>
                </li>
                <li className="nav-item nav-item-sidebar p-2">
                    <Nav>
                        <Nav.Link as={NavLink} to="/account" className="link-dark">
                            <i class="fas fa-home me-2"></i>
                            Mis turnos
                        </Nav.Link>
                    </Nav>
                </li>
                <li className="nav-item nav-item-sidebar p-2">
                    <Nav>
                        <Nav.Link as={NavLink} to="/admin/users" className="link-dark">
                            <i class="fas fa-home me-2"></i>
                            Buscar equipos
                        </Nav.Link>
                    </Nav>
                </li>
                <li className="nav-item nav-item-sidebar p-2">
                    <Nav>
                        <Nav.Link as={NavLink} to="/asfasfsa" className="link-dark">
                            <i class="fas fa-home me-2"></i>
                            404
                        </Nav.Link>
                    </Nav>
                </li>
            </ul>
            {user ? 
            <>
                <hr className="bg-dark mb-0"/> 
                {/*
                <div className="btn-group dropup mb-2 ms-2">
                    <a type="button" className="d-flex dropdown-toggle text-decoration-none link-light align-items-center" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={user.picture} alt="" width="32" height="32" class="rounded-circle me-2"/> 
                        <strong>{user.firstName} {user.lastName}</strong>
                    </a>
                    <ul class="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/account">Account</NavLink></li>
                        <li><button class="dropdown-item" onClick={onClickLogout}>Logout</button></li>
                    </ul>
                </div>*/}
                <div className="accordion accordion-flush text-white" id="accordionFlushExample">
                    <div className="accordion-item bg-light">
                        <h2 className="accordion-header bg-light text-white" id="flush-headingOne">
                        <button className="accordion-button collapsed bg-light acc-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <img src={user.picture} alt="" width="32" height="32" class="rounded-circle me-2"/> 
                            <strong>{user.firstName} {user.lastName}</strong>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse bg-light" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul className="list-unstyled">
                                    <li ><NavLink className="dropdown-item bg-light" to="/account">
                                        <i class="fas fa-user-alt me-3"></i>Account</NavLink>
                                    </li>
                                    <hr className="bg-dark"/>
                                    <li><button className="dropdown-item bg-light" onClick={onClickLogout}>
                                        <i class="fas fa-sign-out-alt me-3"></i>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
            </>
            : null}
        </div>
        
    );
}
 
export default Sidebar;