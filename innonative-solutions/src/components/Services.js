import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <div className="services-container">
        <div className="service">
          <h3>Web Development</h3>
          <p>
            Creating responsive and modern websites to help you reach your
            audience effectively.
          </p>
        </div>
        <div class="service">
          <h3>Mobile Apps</h3>
          <p>
            Developing mobile applications that provide a seamless user
            experience on any device.
          </p>
        </div>
        <div class="service">
          <h3>Graphic Design</h3>
          <p>
            Designing visually appealing graphics to enhance your brand’s
            presence and communication.
          </p>
        </div>
        <div className="service">
          <h3>Consulting</h3>
          <p>
            Offering expert advice to help you leverage technology for better
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
