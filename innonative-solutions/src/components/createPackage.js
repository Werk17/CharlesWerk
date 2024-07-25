import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import './createPackage.css';

const CreatePackage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectDescription: '',
        preferredTimeline: '',
        services: {
            consultation: false,
            webDesign: false,
            contentCreation: false,
            seoSetup: false,
            testingLaunch: false,
            eCommerce: false,
            digitalMarketing: false,
            socialMedia: false
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                services: {
                    ...formData.services,
                    [name]: checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if at least one service is selected
        const selectedServices = Object.values(formData.services).filter(value => value === true);
        if (selectedServices.length === 0) {
            alert('Please select at least one service.');
            return;
        }

        try {
            await addDoc(collection(db, 'customPackages'), {
                name: formData.name,
                email: formData.email,
                projectDescription: formData.projectDescription,
                preferredTimeline: formData.preferredTimeline,
                services: formData.services,
                timestamp: serverTimestamp()
            });
            alert('Your request has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                projectDescription: '',
                preferredTimeline: '',
                services: {
                    consultation: false,
                    webDesign: false,
                    contentCreation: false,
                    seoSetup: false,
                    testingLaunch: false,
                    eCommerce: false,
                    digitalMarketing: false,
                    socialMedia: false
                }
            });
        } catch (error) {
            console.error('Error writing document: ', error);
            alert('There was an error sending your request. Please try again later.');
        }
    };

    return (
        <section className="create-package-section">
            <div className="create-package-form">
                <h2>Propose a Project:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name"><h3>Name:</h3></label>
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
                        <label htmlFor="email"><h3>Email:</h3></label>
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
                        <label htmlFor="projectDescription"><h3>Project Description:</h3></label>
                        <textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="preferredTimeline"><h3>Preferred Timeline/Deadline:</h3></label>
                        <input
                            type="text"
                            id="preferredTimeline"
                            name="preferredTimeline"
                            value={formData.preferredTimeline}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label><h3>Services (choose at least one option):</h3></label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="consultation"
                                    checked={formData.services.consultation}
                                    onChange={handleChange}
                                />
                                Initial Consultation and Planning
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="webDesign"
                                    checked={formData.services.webDesign}
                                    onChange={handleChange}
                                />
                                Website Design and Development
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="contentCreation"
                                    checked={formData.services.contentCreation}
                                    onChange={handleChange}
                                />
                                Content Creation and Upload
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="seoSetup"
                                    checked={formData.services.seoSetup}
                                    onChange={handleChange}
                                />
                                Basic SEO Setup
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="testingLaunch"
                                    checked={formData.services.testingLaunch}
                                    onChange={handleChange}
                                />
                                Testing and Launch
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="eCommerce"
                                    checked={formData.services.eCommerce}
                                    onChange={handleChange}
                                />
                                E-Commerce Integration
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="digitalMarketing"
                                    checked={formData.services.digitalMarketing}
                                    onChange={handleChange}
                                />
                                SEO and Digital Marketing Setup
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="socialMedia"
                                    checked={formData.services.socialMedia}
                                    onChange={handleChange}
                                />
                                Social Media Integration
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreatePackage;
