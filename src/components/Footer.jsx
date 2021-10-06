import React from 'react';

const Footer = () => {
    return (  
        <footer className="footer fixed-bottom">
            {/*<div className="footer-content">
                <h3>TurnosApp</h3>
                <p>La forma más facil de reservar tu cancha, buscar compañeros y gestionar tus turnos.</p>
                <ul className="socials">
                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="/"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="/"><i className="fa fa-google"></i></a></li>
                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                </ul>
    </div>*/}
            <div className="footer-bottom">
                <p className="me-auto">&copy; {new Date().getFullYear()} TurnosApp | Designed by <span>jribero </span>  
                    | <a href="https://www.facebook.com/joa.ribero/" target="_blank" rel="noreferrer"><i className="fa fa-facebook me-2"></i></a> 
                    | <a href="https://www.instagram.com/joa.ribero/" target="_blank" rel="noreferrer"><i className="fa fa-instagram me-2"></i></a>
                    | <a href="https://www.linkedin.com/in/joaquinribero/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin me-2"></i></a></p>
            </div>
        </footer>
        
    );
}
 
export default Footer;