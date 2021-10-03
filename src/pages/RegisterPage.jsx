import { useContext, useState, useEffect } from "react";
import {Button,Form, Col, Container, Row, Card, Image} from 'react-bootstrap';
import AuthContext from "../context/auth/authContext";
import {Redirect} from 'react-router-dom';
import  {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    
    const [newUser,setNewUser] = useState({});

    const authContext = useContext(AuthContext);
    const {user,message, register} = authContext;

    const notify = () => toast.error(message);

    //check if there is a error message.
    useEffect(() => {

        if (message) {
            notify();
        }
        //eslint-disable-next-line
    },[message]);

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitRegister = async e => {
        e.preventDefault();
        register(newUser);
    }
    if (user) return <Redirect to='/'/>
    
    return (  
        <Container className="p-5 overflow-auto">      
                <Row className="show-grid">
                    <Col md={12} xs={12} lg={5} className="show-grid">
                        <Card className="shadow rounded">
                            <Card.Header>
                                <h1>Creación de cuenta</h1>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={onSubmitRegister}>
                                    <ToastContainer/>
                                    <Form.Group className="mb-3" controlId="formBasicText">
                                        <Form.Label>Nombre de usuario</Form.Label>
                                        <Form.Control type="text" 
                                            placeholder="Nombre de usuario"
                                            name="username"  
                                            onChange={handleChange}/>
                                    </Form.Group>
                                    <Row className="g-2">
                                        <Col md>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                            <   Form.Label>Nombre</Form.Label>
                                                <Form.Control type="text"
                                                    placeholder="Nombre"
                                                    name="firstName"
                                                    onChange={handleChange}/>
                                            </Form.Group>
                                        </Col>
                                        <Col md>
                                            <Form.Group className="mb-3" controlId="formBasicText">
                                            <   Form.Label>Apellido</Form.Label>
                                                <Form.Control type="text"
                                                    placeholder="Apellido"
                                                    name="lastName"
                                                    onChange={handleChange}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" 
                                            placeholder="Email"
                                            name="email"  
                                            onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicNumber">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control type="number" 
                                            placeholder="Ingresa tu teléfono"
                                            name="number"  
                                            onChange={handleChange}/>
                                        <Form.Text className="text-muted">
                                            Sin el 0 y sin el 15 en caso de ser un celular.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" 
                                            placeholder="Contraseña"
                                            aria-describedby="passwordHelp"
                                            name="password" 
                                            onChange={handleChange}/>
                                        <Form.Text id="passwordHelp" muted>
                                            Debe contener más de 6 caracteres y sin caracteres especiales.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Repite la contraseña</Form.Label>
                                        <Form.Control type="password" 
                                            placeholder="Repite la contraseña"
                                            name="verifiedPassword" 
                                            onChange={handleChange}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" className="block">
                                        Registrarse
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={12} xs={12} lg={6}>
                        <Container>
                            <Image src="/images/register.svg" className="p-5" fluid/>
                        </Container>
                        
                    </Col>
                </Row>
            </Container>
    );
}
 
export default RegisterPage;