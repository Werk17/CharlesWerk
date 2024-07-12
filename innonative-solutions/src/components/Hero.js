import React from 'react';
import './Hero.css'; // Ensure Hero.css contains the styles below

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Innonative Solutions</h1>
                <h2>Innovative Software Engineering and Web Development</h2>
                <p>I provide creative solutions to drive your business forward. From cutting-edge web development to effective software engineering, I am dedicated to helping you achieve your goals.</p>
                <div className="hero-buttons">
                    {/* <a href="/services" className="hero-button">Our Services</a> */}
                    <a href="/contact" className="hero-button">Get in Touch</a>
                </div>
                {/* <div className="hero-image">
                    <img src="/assets/highTechPhotoNoBG.png" alt="Business Solutions" />
                </div> */}
            </div>
        </div>
    );
};

export default Hero;
