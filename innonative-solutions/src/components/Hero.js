import React from 'react';
import './Hero.css'; // Ensure Hero.css contains the styles below

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Innovative Digital Solutions for Modern Businesses</h1>
                <h2>Empowering Your Business with Cutting-Edge Technology</h2>
                <p>At Innonative Solutions, we specialize in creating mobile apps, websites, and digital products that drive results. Our mission is to bring advanced technology and a robust digital presence to our community and beyond.</p>
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
