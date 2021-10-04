import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import AuthContext from '../../context/auth/authContext';
import {Button} from 'react-bootstrap'

const ContactDataCard = () => {
    
    const authContext = useContext(AuthContext);
    const {user} = authContext;


    return (  
        <Card className="mb-2 bg-light shadow">
            <Card.Body>
                <div className="d-flex">
                    <Card.Title>Datos de contacto </Card.Title>
                    <Button type="button" variant="outline-secondary" className="ms-auto" size="sm">
                        <i class="far fa-edit"></i>
                    </Button>
                </div> 
                <hr/>
                <ul>
                    <li><i className="fa fa-facebook me-2"></i></li>
                    <li><i className="fa fa-facebook me-2"></i></li>
                    <li><i className="fa fa-facebook me-2"></i></li>
                </ul>
            </Card.Body>
        </Card>
    );
}
 
export default ContactDataCard;