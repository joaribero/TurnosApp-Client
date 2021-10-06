import { useContext, useState } from "react";
import { Container, Button, Card, Table, Modal } from "react-bootstrap";
import UserContext from "../../context/user/userContext";

const UsersPage = () => {
    
    const userContext = useContext(UserContext);
    const {users, getUsers} = userContext;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (  
        <Container fluid>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" className="me-2" onClick={handleClose}>
                    Cancelar <i class="fas fa-ban"></i>
                </Button>
                <Button type="submit" variant="success">
                    Aceptar <i class="far fa-check-circle"></i>
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="account-header mt-3">
                <div className="account-name me-auto mb-2 ms-2">
                    <h1>Usuarios</h1>
                </div>
                <div className="">
                    <Button type="button" className="me-2 mt-2" variant="primary" onClick={getUsers}>
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
                    <Table striped bordered hover responsive size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Usuario</th>
                                <th>Email</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.map((user,index) => (
                            <tr>
                                <td>{index}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.date}</td>
                                <td><Button variant="outline-dark" onClick={handleShow}><i class="far fa-edit"></i></Button></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>                    
                </Card.Body>
            </Card>      
        </Container>
    );
}
 
export default UsersPage;