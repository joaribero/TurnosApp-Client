import { useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const PublicRoute = (props) => {
    
    const authContext = useContext(AuthContext);
    const {user} = authContext;

    if (user) return <Redirect to='/'/>

    return (  
        <Route {...props}/>
    );
}
 
export default PublicRoute;