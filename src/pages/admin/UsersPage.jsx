import { useContext, useState, useEffect} from "react";
import { Container, Button, Card, Form, Modal} from "react-bootstrap";
import TableUsers from "../../components/Users/Table";
import UserContext from "../../context/user/userContext";
import  {ToastContainer, toast} from 'react-toastify';

const UsersPage = () => {

    const userContext = useContext(UserContext);
    const {message, getUsers, addRole} = userContext;

    const [showRole, setShowRole] = useState(false);
    const [roleData, setRoleData] = useState({
        name: '',
        description: ''
    });

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

    const handleRoleChange = (e) => {
        e.preventDefault();
        setRoleData({
            ...roleData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitRole = () => {
        handleClose();
        addRole(roleData);
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
            show={showRole}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered>
            <Modal.Header closeButton>
            <Modal.Title>Editar usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-2">
                        <Form.Label>Nombre del rol</Form.Label>
                        <Form.Control type="text" 
                            placeholder="Ingresa nombre del rol" 
                            name="name"
                            value={roleData.name}
                            onChange={handleRoleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción del rol</Form.Label>
                        <Form.Control as="textarea" 
                            placeholder="Breve descripción de la funcionalidad del rol" 
                            name="description"
                            value={roleData.description}
                            onChange={handleRoleChange}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" className="me-2" onClick={handleClose}>
                Cancelar <i class="fas fa-ban"></i>
            </Button>
            <Button type="submit" variant="success" onClick={onSubmitRole}>
                Aceptar <i class="far fa-check-circle"></i>
            </Button>
            </Modal.Footer>
        </Modal>
        <Container fluid>
            <div className="account-header mt-3">
                <div className="account-name me-auto mb-2 ms-2">
                    <h1>Usuarios</h1>
                </div>
                <div className="">
                    <Button type="button" className="me-2 mt-2" variant="primary" onClick={() => {getUsers()}}>
                        Obtener listado
                    </Button>
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