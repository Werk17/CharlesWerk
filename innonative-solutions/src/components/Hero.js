import React from "react";
import "./Hero.css"; // Ensure Hero.css contains the styles below

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Transforming Businesses with Innovative Technology</h1>
        <h2>Driving Growth and Success through Custom Digital Solutions</h2>
        <p>
          At Innonative Solutions, we partner with businesses to identify
          challenges and craft tailored technology solutions that fuel growth.
          From mobile apps to websites and beyond, our mission is to empower
          your business to thrive in the digital age.
        </p>
        <div className="hero-buttons">
          {/* <a href="/services" className="hero-button">Our Services</a> */}
          <a href="/contact" className="hero-button">
            Let’s Grow Together
          </a>
        </div>
      </div>
      {/* <div className="hero-image">
        <img src="/assets/NoBGCropped.png" alt="Business Solutions" />
      </div> */}
    </div>
  );
};

export default Hero;
