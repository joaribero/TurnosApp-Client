import { useContext, useState } from "react";
import UserContext from "../../context/user/userContext";
import {Table, Button, Modal, Form, Row, Col} from 'react-bootstrap'

const TableUsers = () => {
    
    const userContext = useContext(UserContext);
    const {users} = userContext;

    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    
    if (users.length === 0) return (<h3>Genera el listado de usuarios</h3>)

    const handleClose = () => setShow(false);
    const handleShow = (currUser) => {
        
        setUser(currUser);
        setShow(true);
    };
    
    return (  
        <>
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
                <Form>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Estado del usuario:</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Estado</option>
                                    <option value="1">Activo</option>
                                    <option value="2">Baja</option>
                                    <option value="3">Bloqueado</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>Asignar Rol:</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Rol</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Comercial</option>
                                    <option value="3">Regular</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>                       
                    </Row>
                </Form>
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
                    <td><Button variant="outline-success" onClick={() => {handleShow(user)}}><i class="far fa-edit"></i></Button></td>
                </tr>
            ))}
            </tbody>
        </Table>
        </>
    );
}
 
export default TableUsers;