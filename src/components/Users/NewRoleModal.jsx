import {Modal, Button, Form} from 'react-bootstrap'
import { useState } from 'react';

const NewRoleModal = ({setShowRole, addRole}) => {
   
    const [roleData, setRoleData] = useState({
        name: '',
        description: ''
    });

    const handleClose = () => setShowRole(false);

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
        </>
    );
}
 
export default NewRoleModal;