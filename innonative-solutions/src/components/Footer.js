import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container" id="footer">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Innonative Solutions LLC is dedicated to delivering innovative software engineering and web development solutions. We are committed to solving complex problems with creativity and technology.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects/Portfolio</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Information</h4>
                    <p>Email: <a href="mailto:charles.werk@innonative-solutions.com">charles.werk@innonative-solutions.com</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/charles-werk/">Charles Werk</a></p>
                    <p>GitHub: <a href="https://github.com/Werk17">Werk17</a></p>
                </div>
                <div className="footer-section">
                    <h4>Connect with Us</h4>
                    <a href="https://www.linkedin.com/in/charles-werk/"><span style={{ fontSize: '2rem' }}><i className="fa-brands fa-linkedin"></i></span></a>
                    <a href="https://github.com/Werk17"><span style={{ fontSize: '2rem' }}><i className="fa-brands fa-github"></i></span></a>
                    <a href="https://www.facebook.com/profile.php?id=61561665602540" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: '2rem' }}><i className="fa-brands fa-facebook"></i></span></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>1001 S. Main Street, STE 500, Kalispell, MT, 59901, USA</p> <br />
                <p>© 2024 Innonative Solutions LLC. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
