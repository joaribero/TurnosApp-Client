import { useContext, useState, useEffect} from "react";
import { Container, Button, Card, Modal} from "react-bootstrap";
import TableUsers from "../../components/Users/Table";
import UserContext from "../../context/user/userContext";
import  {ToastContainer, toast} from 'react-toastify';
import NewRoleModal from "../../components/Users/NewRoleModal";

const UsersPage = () => {

    const userContext = useContext(UserContext);
    const {users, message, getUsers, addRole} = userContext;

    const [showRole, setShowRole] = useState(false);

    const notify = () => {
        
        if(message.category === 'error') {
            toast.error(message.text)
        }
        else if (message.category === 'success') {
            toast.success(message.text);
        }   
        
    };

    //check if there is a error message.
    useEffect(() => {

        if (message) {
            notify();
        }
        //eslint-disable-next-line
    },[message])

    const handleClose = () => setShowRole(false);
    const handleShow = () => setShowRole(true);
    
    return (  
        <>
        <ToastContainer position="top-right" autoClose={5000} 
            hideProgressBar={false} 
            newestOnTop={false} 
            closeOnClick rtl={false} 
            pauseOnFocusLoss 
            draggable
            pauseOnHover
            theme='colored'/>
        <Modal
            show={showRole}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered>
            <NewRoleModal setShowRole={setShowRole} addRole={addRole}/>
        </Modal>
        <Container fluid>
            <div className="account-header mt-3">
                <div className="account-name me-auto mb-2 ms-2">
                    <h1>Usuarios</h1>
                </div>
                <div className="">
                    {users.length === 0 ?
                    <Button type="button" className="me-2 mt-2" variant="success" onClick={() => {getUsers()}}>
                        Obtener listado
                    </Button>
                    : null }
                    <Button type="button" className="me-2 mt-2" variant="primary" onClick={handleShow}>
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
        </>
    );
}
 
export default UsersPage;