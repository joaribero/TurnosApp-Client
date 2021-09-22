import React,{Fragment, useContext, useEffect} from 'react';
import Navigation from '../Navigation';
import AuthContext from "../../context/auth/authContext";
import Footer from '../Footer';


const Layout = ({children}) => {

    return (  
        <Fragment>
            <Navigation/>    
            {children}
            <Footer/>       
        </Fragment>
    );
}
 
export default Layout;