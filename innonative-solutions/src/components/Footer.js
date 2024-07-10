import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container" id="footer">
                <div className="footer-section">
                    <h4>About Me</h4>
                    <p>Computer Science graduate passionate about software engineering and web development. Exploring innovative solutions to complex problems.</p>
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
                    {/* <p>Email: your.email@example.com</p> */}
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/charles-werk/">Charles Werk</a></p>
                    <p>GitHub: <a href="https://github.com/Werk17">Werk17</a></p>
                </div>
                <div className="footer-section">
                    <h4>Connect with Me</h4>
                    <a href="https://www.linkedin.com/in/charles-werk/"><span style={{ fontSize: '2rem' }}><i className="fa-brands fa-linkedin"></i></span></a>
                    <a href="https://github.com/Werk17"><span style={{ fontSize: '2rem' }}><i className="fa-brands fa-github"></i></span></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Charles Werk. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
