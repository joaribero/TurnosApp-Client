import { useContext, useState, useEffect} from "react";
import { Container, Button, Card, Modal} from "react-bootstrap";
import TableUsers from "../../components/Users/Table";
import UserContext from "../../context/user/userContext";
import  {ToastContainer, toast} from 'react-toastify';
import NewRoleModal from "../../components/Users/NewRoleModal";
import NewStateModal from "../../components/Users/NewStateModal";

const UsersPage = () => {

    const userContext = useContext(UserContext);
    const {users, message, getUsers, addRole, addUserState} = userContext;

    const [show, setShow] = useState(false);
    const [modal, setModal] = useState('');

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

    const handleClose = () => setShow(false);
    const handleShowRole = () => {
        setModal('Role');
        setShow(true);
    };
    const handleShowState = () => {
        setModal('State');
        setShow(true);
    }
    
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
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered>
            {modal === 'Role' ? <NewRoleModal setShowRole={setShow} addRole={addRole}/>
            : null}
            {modal === 'State' ? <NewStateModal setShowState={setShow} addUserState={addUserState}/>
            : null}
            
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
                    <Button type="button" className="me-2 mt-2" variant="primary" onClick={handleShowRole}>
                        Crear nuevo rol
                    </Button>
                    <Button type="button" className="me-2 mt-2" variant="primary" onClick={handleShowState}>
                        Crear nuevo estado
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