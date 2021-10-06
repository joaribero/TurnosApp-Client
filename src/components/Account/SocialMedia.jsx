import React,{useState,useContext} from 'react';
import {Card, Form, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import AuthContext from '../../context/auth/authContext';

const SocialMediaCard = () => {

    const authContext = useContext(AuthContext);
    const {user, editSocials} = authContext;

    const [editSocial,setEditSocial] = useState(true);
    const [socials,setSocials] = useState({
        instagram: '',
        facebook: '',
        twitter: '',
        web: ''
    });

    let instagram = '';
    if (user.socials) instagram = user.socials.instagram;
    let facebook = '';
    if (user.socials) facebook = user.socials.facebook;
    let twitter = '';
    if (user.socials) twitter = user.socials.twitter;
    let web = '';
    if (user.socials) web = user.socials.web;


    const stateMenuSocials = (e) => {
        e.preventDefault();
        setEditSocial(!editSocial);
        setSocials({});
    }

    const onSubmitSocials = e => {
        e.preventDefault();
        
        //función que invoca al WS de backend
        editSocials(socials);

        //función que modifica el estado del menú
        stateMenuSocials(e);
    }

    const handleChangeSocials = (e) => {
        setSocials({
            ...socials,
            [e.target.name]: e.target.value
        });
    }

    return (  
        <Card className="mb-3 bg-light shadow">
                        <Card.Body>
                            <div className="d-flex">
                                <Card.Title>Tus redes sociales </Card.Title>
                                <Button type="button" variant="outline-secondary" className="ms-auto" size="sm" onClick={stateMenuSocials}>
                                    <i class="far fa-edit"></i>
                                </Button>
                            </div>
                            <hr/>
                            <Form>
                                <FormGroup>
                                    <Form.Label htmlFor="InputInstagram" visuallyHidden>
                                        Instagram
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text><i class="fab fa-instagram"></i></InputGroup.Text>
                                        <FormControl id="InputInstagram" 
                                            placeholder="Perfil de Instagram"
                                            disabled={true}
                                            value={instagram}/>
                                        {!editSocial ? 
                                        <FormControl id="inlineFormInstagram"
                                            placeholder="Ingresa un perfil de Instagram"
                                            value={socials.instagram}
                                            onChange={handleChangeSocials}
                                            name="instagram"/>
                                        : null }
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
                                            disabled={true}
                                            value={facebook}/>
                                        {!editSocial ? 
                                        <FormControl id="inlineFormFacebook"
                                            placeholder="Ingresa un perfil de Facebook"
                                            value={socials.facebook}
                                            onChange={handleChangeSocials}
                                            name="facebook"/>
                                        : null }
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
                                            disabled={true}
                                            value={twitter}/>
                                        {!editSocial ? 
                                        <FormControl id="inlineFormTwitter"
                                            placeholder="Ingresa un perfil de Twitter"
                                            value={socials.twitter}
                                            onChange={handleChangeSocials}
                                            name="twitter"/>
                                        : null }
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
                                            disabled={true}
                                            value={web}/>
                                        {!editSocial ? 
                                        <FormControl id="inlineFormWeb"
                                            placeholder="Url de tu página web"
                                            value={socials.web}
                                            onChange={handleChangeSocials}
                                            name="web"/>
                                        : null }
                                    </InputGroup>
                                </FormGroup>
                                <div className="d-flex flex-row-reverse">
                                    {!editSocial ? 
                                    <>
                                    <Button type="submit" variant="success" onClick={onSubmitSocials}>
                                        Aceptar <i class="far fa-check-circle"></i>
                                    </Button>
                                    <Button variant="danger" className="me-2" onClick={stateMenuSocials}>
                                        Cancelar <i class="fas fa-ban"></i>
                                    </Button>
                                    </>
                                    : null }
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
    );
}
 
export default SocialMediaCard;