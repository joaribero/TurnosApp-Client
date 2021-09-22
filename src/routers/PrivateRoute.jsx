import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const PrivateRoute = (props) => {

    const authContext = useContext(AuthContext);
    const { user, getUser } = authContext;

    if(!user) return <Redirect to="/login"/>

    return (  
        <Route {...props}/>
    );
}
 
export default PrivateRoute;