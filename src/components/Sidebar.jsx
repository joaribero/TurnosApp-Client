import React, { useContext } from "react";
//eslint-disable-next-line
import bootstrap from 'bootstrap';
import AuthContext from "../context/auth/authContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const authContext = useContext(AuthContext);
    const {user, logout} = authContext;

    //funcion que llama al state para desloguear al usuario.
    const onClickLogout = () => {
        logout();
    };
    
    return (  
        
        <div className="offcanvas offcanvas-start sidebar-nav bg-dark " data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <ul className="nav nav-pills flex-column mb-auto mt-2">
                <li className="nav-item">
                    <a href="#" className="nav-link link-light" aria-current="page">
                    <i class="fas fa-home me-2"></i>
                    Home
                    </a>
                </li>
                <hr className="bg-light"/>
                <li>
                    <a href="#" className="nav-link link-light">
                    <i class="fas fa-tachometer-alt me-2"></i>
                    Dashboard
                    </a>
                </li>
                <hr className="bg-light"/>
                <li>
                    <a href="#" className="nav-link link-light">
                    <i class="fas fa-tachometer-alt me-2"></i>
                    Orders
                    </a>
                </li>
                <hr className="bg-light"/>
                <li>
                    <a href="#" className="nav-link link-light">
                    <i class="fas fa-tachometer-alt me-2"></i>
                    Products
                    </a>
                </li>
                <hr className="bg-light"/>
                <li>
                    <a href="#" className="nav-link link-light">
                    <i class="fas fa-tachometer-alt me-2"></i>
                    Customers
                    </a>
                </li>
            </ul>
            {user ? 
            <>
                <hr className="bg-light mb-0"/> 
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
                    <div className="accordion-item bg-dark">
                        <h2 className="accordion-header bg-dark text-white" id="flush-headingOne">
                        <button className="accordion-button collapsed bg-dark text-white acc-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <img src={user.picture} alt="" width="32" height="32" class="rounded-circle me-2"/> 
                            <strong>{user.firstName} {user.lastName}</strong>
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse bg-dark" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul className="list-unstyled">
                                    <li ><NavLink className="dropdown-item text-white bg-dark" to="/account">
                                        <i class="fas fa-user-alt me-3"></i>Account</NavLink>
                                    </li>
                                    <hr/>
                                    <li><button className="dropdown-item text-white bg-dark" onClick={onClickLogout}>
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