import React from 'react';
import './Footer.css';

const Footer = () => {
    return (  
        <footer>
            <div className="footer-content">
                <h3>TurnosApp</h3>
                <p>La forma más facil de reservar tu cancha, buscar compañeros y gestionar tus turnos.</p>
                <ul className="socials">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-google"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} TurnosApp | Designed by <span>jribero</span> </p>
            </div>
        </footer>
        
    );
}
 
export default Footer;