import React from 'react';
import './About.css';
import Skills from './Skills';
import Projects from './Projects';
const About = () => {
    return (
        <div className="about-page">
            <div className="about-section">
                <div className="about-content">
                    <div className="profile-section">
                        <img src="/assets/highTechPhotoNoBG.png" alt="Profile" className="profile-pic" />
                    </div>
                    <h2>About Me</h2>
                    <p>Hi! I'm Charles Werk, a computer science graduate with a passion for technology and innovation. I have a solid foundation in Python and Java, and I excel in website design, creating user-friendly interfaces.</p>
                    <p>My interests include Software Engineering, Application Development, and video game development. I've worked on various group projects, including website design and mobile app development, which have sharpened my technical and teamwork skills.</p>
                    <p>I'm a quick learner and a dedicated team player with excellent problem-solving abilities. I'm always looking for new challenges and opportunities to grow in the field of computer science.</p>
                    <p>Thanks for visiting my portfolio. I look forward to connecting and exploring potential collaborations!</p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="timeline">
                <h3>Timeline</h3>
                <div className="timeline-item">
                    <h4>June 2024 - Present</h4>
                    <p>Security and Systems Intern at Island Mountain Development Group</p>
                </div>
                <div className="timeline-item">
                    <h4>2020 - 2024</h4>
                    <p>Bachelor of Computer Science, University of Montana with a concentration in Software Engineering</p>
                </div>
                <div className="timeline-item">
                    <h4>2017 - 2019</h4>
                    <p>Associates of Science in Computer Information Systems, Aaniiih Nakoda College</p>
                </div>
            </div>

            {/* Skills Section */}
            <Skills />


            {/* Projects Section */}
            <Projects />

            {/* Quotes Section */}
            <div className="quotes">
                <h3>Inspirational Quotes</h3>
                <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
            </div>
        </div>
    );
};

export default About;