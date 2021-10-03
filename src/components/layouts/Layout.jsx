import React,{Fragment} from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Sidebar from '../Sidebar.jsx';


const Layout = ({children}) => {

    return (  
        <Fragment>
            <Navigation/>
            <Sidebar/>
            <div className="main-content">
                {children}
                <Footer/>
            </div>
        </Fragment>
    );
}
 
export default Layout;