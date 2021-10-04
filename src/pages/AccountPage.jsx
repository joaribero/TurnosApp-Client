import { useContext, useEffect } from "react";
import { Container, Image, Button, Card, Row, Col} from "react-bootstrap";
import AuthContext from "../context/auth/authContext";
import  {ToastContainer, toast} from 'react-toastify';
import SocialMediaCard from "../components/Account/SocialMedia";

const AccountPage = () => {
    
    const authContext = useContext(AuthContext);
    const {user,message, getUser} = authContext;
    getUser();

    const notify = () => {
        
        if(message.category === 'error') {
            toast.error(message.text)
        }
        else if (message.category === 'success') {
            toast.success(message.text);
        }   
        
    };

    //check if there is a error message.
    useEffect(() => {

        if (message) {
            notify();
        }
        //eslint-disable-next-line
    },[message]);

    return (  
        <Container fluid className="p-3">
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'/>
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
                    <SocialMediaCard/>                         
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