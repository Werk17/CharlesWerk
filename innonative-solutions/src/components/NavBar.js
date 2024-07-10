import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav>
            <div className="logo">
                <Link to="/"><img src="/assets/logos/MyLogo1.png" alt="website logo" /></Link>
                <Link className="logo-text" to="/">
                    <span className="logo-script">InnoNative</span>
                    <span className="logo-solutions">Solutions</span>
                </Link>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/my-work">My Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="mobile-nav">
                <ul className="nav-links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/my-work">My Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
