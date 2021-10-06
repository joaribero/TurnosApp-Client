import React, { useContext, useState } from 'react';
import { Card, Form, Row, Col, FloatingLabel, Modal} from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import {Button} from 'react-bootstrap'

const ContactDataCard = () => {
    
    const authContext = useContext(AuthContext);
    const {user, editContactData} = authContext;

    let phones = {};
    if (user.phones) phones = user.phones;

    const [data, setData] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        number: phones.number,
        areaCode: phones.areaCode
    });

    


    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitContactData = () => {
        editContactData(data);
        handleClose();
    }


    return (
        <>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
            <Modal.Header closeButton>
                <Modal.Title>Editar datos de contacto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>No es necesario editar todos los campos.</p>
                <Form>
                    <Row className="g-2">
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <FloatingLabel label="Nombre">
                                <Form.Control type="text"
                                    placeholder="Nombre"
                                    name="firstName"
                                    value={data.firstName}
                                    onChange={handleChange}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <FloatingLabel label="Apellido">
                                <Form.Control type="text"
                                    placeholder="Apellido"
                                    name="lastName"
                                    value={data.lastName}
                                    onChange={handleChange}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel label="Email">
                        <Form.Control type="email"
                            placeholder="Email"
                            name="email"
                            value={data.email}  
                            onChange={handleChange}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Row className="g-2">
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <FloatingLabel label="Area">
                                <Form.Control type="number"
                                    placeholder="Area"
                                    name="areaCode"
                                    value={data.areaCode}  
                                    onChange={handleChange}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <FloatingLabel label="Teléfono">
                                <Form.Control type="number"
                                    placeholder="Ingresa tu teléfono"
                                    name="number"
                                    value={data.number}  
                                    onChange={handleChange}/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" className="me-2" onClick={handleClose}>
                    Cancelar <i class="fas fa-ban"></i>
                </Button>
                <Button type="submit" variant="success" onClick={onSubmitContactData}>
                    Aceptar <i class="far fa-check-circle"></i>
                </Button>       
            </Modal.Footer>
        </Modal>  
        <Card className="mb-2 bg-light shadow">
            <Card.Body>
                <div className="d-flex">
                    <Card.Title>Datos de contacto </Card.Title>
                    <Button type="button" variant="outline-secondary" className="ms-auto" size="sm" onClick={handleShow}>
                        <i class="far fa-edit"></i>
                    </Button>
                </div> 
                <hr/>
                <Form>
                    <Row className="g-2">
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <FloatingLabel label="Nombre">
                                <Form.Control type="text"
                                    placeholder="Nombre"
                                    name="firstName"
                                    value={user.firstName}
                                    disabled/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicText">
                                <FloatingLabel label="Apellido">
                                <Form.Control type="text"
                                    placeholder="Apellido"
                                    name="lastName"
                                    value={user.lastName}
                                    disabled/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel label="Email">
                        <Form.Control type="email"
                            placeholder="Email"
                            name="email"
                            value={user.email}  
                            disabled/>
                        </FloatingLabel>
                    </Form.Group>
                    <Row className="g-2">
                        <Col md="3">
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <FloatingLabel label="Area">
                                <Form.Control type="number"
                                    placeholder="Código de area"
                                    name="area"
                                    value={phones.areaCode}  
                                    disabled/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formBasicNumber">
                                <FloatingLabel label="Teléfono">
                                <Form.Control type="number"
                                    placeholder="Ingresa tu teléfono"
                                    name="number"
                                    value={phones.number}  
                                    disabled/>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>                   
                </Form>
            </Card.Body>
        </Card>
        </>
    );
}
 
export default ContactDataCard;