import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: serverTimestamp()
            });
            alert('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error writing document: ', error);
            alert('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <h2>Contact Me</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Email: <a href="mailto:charles@innonativesolutions.com">charles@innonativesolutions.com</a></p>
                    <div className="social-media">
                        <h4>Follow Me</h4>
                        <a href="https://www.facebook.com/profile.php?id=61561665602540" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.linkedin.com/in/charles-werk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.instagram.com/innonativesolutions/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
