import { useContext, useState } from "react";
import { Container, Image, Button, Card, Row, Col, InputGroup, Form, FormControl, FormGroup } from "react-bootstrap";
import AuthContext from "../context/auth/authContext";

const AccountPage = () => {
    
    const authContext = useContext(AuthContext);
    const {user} = authContext;

    const [editSocial,setEditSocial] = useState(true);
    const [socials,setSocials] = useState({
        facebook: '/joa.ribero',
        instragram: '/joa.ribero',
        twitter: '/joaquinribero',
        web: ''
    });

    const editSocials = (e) => {
        e.preventDefault();
        setEditSocial(!editSocial)
    }

    const onSubmitSocials = e => {
        e.preventDefault();
        
        editSocials(e);
    }

    const handleChangeSocials = (e) => {
        setSocials({
            ...socials,
            [e.target.name]: e.target.value
        });
    }
    

    return (  
        <Container fluid className="p-3">
            <div className="account-header">
                <Image src={user.picture} height="100" width="100" rounded align="left" className="rounded-circle me-2"/>
                <div className="account-name me-auto mb-2 ms-2">
                    <h2>{`${user.firstName} ${user.lastName}`}</h2>
                </div>
                <div className="justify-content-md-end">
                    <Button type="button" className="btn btn-success me-2 mt-2">
                        Mis espacios
                    </Button>
                    <Button type="button" className="btn btn-secondary mt-2">
                        <i class="fas fa-cog"></i>
                    </Button>
                </div>              
            </div>
            <hr/>
            <Row className="justify-content-center">
                <Col md={5} lg={5} xs={12}>
                    <Card className="mb-3 bg-light shadow">
                        <Card.Body>
                            <Card.Title>Tus redes sociales</Card.Title>
                            <hr/>
                            <Form>
                                <FormGroup>
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Instagram
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text><i class="fab fa-instagram"></i></InputGroup.Text>
                                        <FormControl id="inlineFormInputGroup" 
                                            placeholder="Perfil de Instragram"
                                            readOnly={editSocial}
                                            value={socials.instragram}
                                            onChange={handleChangeSocials}
                                            name="instagram"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Facebook
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text><i class="fab fa-facebook"></i></InputGroup.Text>
                                        <FormControl id="inlineFormInputGroup" 
                                            placeholder="Perfil de Facebook"
                                            readOnly={editSocial}
                                            value={socials.facebook}
                                            onChange={handleChangeSocials}
                                            name="facebook"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Twitter
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text><i class="fab fa-twitter"></i></InputGroup.Text>
                                        <FormControl id="inlineFormInputGroup" 
                                            placeholder="Perfil de Twitter" 
                                            readOnly={editSocial}
                                            value={socials.twitter}
                                            onChange={handleChangeSocials}
                                            name="twitter"/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                    Página Web
                                </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text><i class="fas fa-globe"></i></InputGroup.Text>
                                        <FormControl id="inlineFormInputGroup" 
                                            placeholder="Página Web"
                                            readOnly={editSocial}
                                            value={socials.web}
                                            onChange={handleChangeSocials}
                                            name="web"/>
                                    </InputGroup>
                                </FormGroup>
                                <div className="d-flex flex-row-reverse">
                                    {editSocial ? 
                                    <Button type="button" variant="info" onClick={editSocials}>
                                        Editar <i class="far fa-edit"></i>
                                    </Button>
                                    : 
                                        <>
                                        <Button type="submit" variant="success" onClick={onSubmitSocials}>
                                            Aceptar <i class="far fa-check-circle"></i>
                                        </Button>
                                        <Button variant="danger" className="me-2" onClick={editSocials}>
                                            Cancelar <i class="fas fa-ban"></i>
                                        </Button>
                                        </>
                                    }
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5} lg={5} xs={12}>
                    <Card className="mb-2 bg-light shadow">
                        <Card.Body>
                            <Card.Title>Datos de contacto</Card.Title>
                            <hr/>
                            <ul>
                                <li><i className="fa fa-facebook me-2"></i></li>
                                <li><i className="fa fa-facebook me-2"></i></li>
                                <li><i className="fa fa-facebook me-2"></i></li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
}
 
export default AccountPage;