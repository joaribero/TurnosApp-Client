import { useContext, useEffect, useState } from "react";
import {Button,Form, Col, Container, Row, Card, Image} from 'react-bootstrap';
import AuthContext from '../context/auth/authContext';
import { Redirect } from "react-router-dom";
import  {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const LoginPage = (props) => {
    
    const authContext = useContext(AuthContext);
    const {user,message, login} = authContext;

    const [loginUsername,setLoginUsername] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const notify = () => toast.error(message);

    //check if there is a error message.
    useEffect(() => {

        if (message) {
            notify();
        }

    },[message]);

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        login(loginUsername,loginPassword);
        if (user) props.history.push("/");      
    }

    //if (user) return <Redirect to='/'/>      

    return ( 
        <div>         
            <Container className="p-5">
                <Row>
                    <Col md={5}>
                        <Card className="shadow rounded">
                            <Card.Header>
                                <h1>Ingresar</h1>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={onSubmitLogin}>
                                    <ToastContainer/>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" 
                                            placeholder="Ingresa tu nombre de usuario" 
                                            onChange={e => setLoginUsername(e.target.value)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" 
                                            placeholder="Ingresa tu contraseña" 
                                            onChange={e => setLoginPassword(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit" block>
                                            Ingresar
                                        </Button>
                                    </Form.Group>                          
                                    <hr className="solid"/>
                                    <FacebookLoginButton>
                                        <span>Ingresar con Facebook</span>
                                    </FacebookLoginButton>
                                    <GoogleLoginButton>
                                        <span>Ingresar con Google</span>
                                    </GoogleLoginButton>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Container>
                            <Image src="/images/login.svg" className="p-5" fluid/>
                        </Container>
                        
                    </Col>
                </Row>           
            </Container>
        </div>
    );
}
 
export default LoginPage;