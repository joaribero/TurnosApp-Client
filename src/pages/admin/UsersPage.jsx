import { useContext} from "react";
import { Container, Button, Card} from "react-bootstrap";
import TableUsers from "../../components/Users/Table";
import UserContext from "../../context/user/userContext";

const UsersPage = () => {

    const userContext = useContext(UserContext);
    const {getUsers} = userContext;

    
    return (  
        <Container fluid>
            <div className="account-header mt-3">
                <div className="account-name me-auto mb-2 ms-2">
                    <h1>Usuarios</h1>
                </div>
                <div className="">
                    <Button type="button" className="me-2 mt-2" variant="primary" onClick={() => {getUsers()}}>
                        Obtener listado
                    </Button>
                    <Button type="button" className="me-2 mt-2" variant="primary">
                        Crear nuevo rol
                    </Button>
                </div>              
            </div>
            <hr/>
            <Card className="mt-3 bg-light shadow">
                <Card.Body>
                    <TableUsers/>                    
                </Card.Body>
            </Card>      
        </Container>
    );
}
 
export default UsersPage;