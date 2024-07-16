import React from 'react';
import './Hero.css'; // Ensure Hero.css contains the styles below

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Innonative Solutions</h1>
                <h2>Innovative Software Engineering and Web Development</h2>
                <p>Just because you have a small business, doesn't mean you can't achieve big results.</p>
                <div className="hero-buttons">
                    {/* <a href="/services" className="hero-button">Our Services</a> */}
                    <a href="/contact" className="hero-button">Get in Touch</a>
                </div>
            </div>
            <div className="hero-image">
                <img src="/assets/NoBGCropped.png" alt="Business Solutions" />
            </div>
        </div>
    );
};

export default Hero;
