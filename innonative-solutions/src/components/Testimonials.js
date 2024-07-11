import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <div className="testimonial">
                    <p>"Charles is a fantastic developer. His attention to detail and commitment to quality are exceptional."</p>
                    <h3>- John</h3>
                </div>
                <div className="testimonial">
                    <p>"Working with Charles was a great experience. He delivered on time and exceeded our expectations."</p>
                    <h3>- Megan</h3>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
