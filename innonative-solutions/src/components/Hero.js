import React from 'react';
import './Hero.css'; // Create Hero.css for specific styles

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h2>Welcome!</h2>
                <h1>I'm Charles Werk</h1>
                <h3>Software Engineer</h3>
                <p>Specializing in innovative web design and software development.</p>
            </div>
            <img src="/assets/highTechPhotoNoBG.png" alt="Profile" id="profile-pic" />
        </div>
    );
};

export default Hero;
