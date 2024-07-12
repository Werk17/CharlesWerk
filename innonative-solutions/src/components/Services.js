import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service">
                    <h3>Web Development</h3>
                    <p>Creating responsive and modern websites tailored to your business needs.</p>
                </div>
                <div className="service">
                    <h3>Mobile App Development</h3>
                    <p>Developing intuitive and high-performance mobile applications for both Android and iOS.</p>
                </div>
                <div className="service">
                    <h3>Software Engineering</h3>
                    <p>Providing software solutions that enhance productivity and drive business growth.</p>
                </div>
                <div className="service">
                    <h3>Consulting</h3>
                    <p>Offering expert advice to help you leverage technology for better outcomes.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
