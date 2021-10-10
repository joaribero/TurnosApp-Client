import {Modal, Button, Form} from 'react-bootstrap'
import { useState } from 'react';

const NewStateModal = ({setShowState, addUserState}) => {

    const [stateData, setStateData] = useState({
        name: '',
        description: ''
    });
    
    const handleClose = () => setShowState(false);

    const handleStateChange = (e) => {
        e.preventDefault();
        setStateData({
            ...stateData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitState = () => {
        handleClose();
        addUserState(stateData);
    }

    return (  
        <>
        <Modal.Header closeButton>
            <Modal.Title>Crear nuevo estado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-2">
                    <Form.Label>Nombre del estado:</Form.Label>
                    <Form.Control type="text" 
                        placeholder="Ingresa nombre del estado" 
                        name="name"
                        value={stateData.name}
                        onChange={handleStateChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Descripción del estado:</Form.Label>
                    <Form.Control as="textarea" 
                        placeholder="Breve descripción de la funcionalidad del estado" 
                        name="description"
                        value={stateData.description}
                        onChange={handleStateChange}/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" className="me-2" onClick={handleClose}>
                Cancelar <i class="fas fa-ban"></i>
            </Button>
            <Button type="submit" variant="success" onClick={onSubmitState}>
                Aceptar <i class="far fa-check-circle"></i>
            </Button>
        </Modal.Footer>
        </>
    );
}
 
export default NewStateModal;