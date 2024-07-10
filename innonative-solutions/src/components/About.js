import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
const About = () => {
    return (
        <div className="about-page">
            <div className="about-section">
                <div className="about-content">
                    {/* Profile Picture Section */}
                    <div className="profile-section">
                        <img src="/assets/highTechPhotoNoBG.png" alt="Profile" id="profile-pic" />
                        <h2>About Me</h2>
                    </div>
                    <p>Hello! My name is Charles Werk, and I am a computer science graduate passionate about technology and innovation. I recently completed my Bachelor's degree and am excited to embark on the next chapter of my career.</p>
                    <p>During my studies, I developed a strong foundation in programming languages such as Python and Java. I have also honed my skills in website design, creating visually appealing and user-friendly interfaces.</p>
                    <p>My primary interests lie in Software Engineering and Application Development. I have collaborated on various group software projects, including website design, mobile app development, and numerous programming assignments. These experiences have not only enhanced my technical skills but also improved my ability to work effectively in a team environment.</p>
                    <p>One area I am particularly enthusiastic about is video game development. I am eager to further explore this field and delve into creative coding to develop innovative and engaging gaming experiences.</p>
                    <p>In addition to my technical abilities, I am known for being a quick learner, a dedicated team player, and possessing excellent problem-solving skills. I thrive on challenges and am always seeking opportunities to expand my knowledge and skills in the ever-evolving field of computer science.</p>
                    <p>Thank you for visiting my portfolio. I am excited about the prospect of connecting with you and exploring how we can collaborate to achieve great things together!</p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="skills">
                <h3>Skills</h3>
                <div className="skill">
                    <span>Python</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <span>Java</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '75%' }}></div>
                    </div>
                </div>
                <div className="skill">
                    <span>Web Development</span>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '85%' }}></div>
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="timeline">
                <h3>Timeline</h3>
                <div className="timeline-item">
                    <h4>June 2024 - Present</h4>
                    <p>Software Engineer at XYZ Company</p>
                </div>
                <div className="timeline-item">
                    <h4>2020 - 2024</h4>
                    <p>Bachelor of Computer Science, University of Montana</p>
                </div>
            </div>

            {/* Projects Section */}
            <div className="projects">
                <h3>Projects</h3>
                <div className="project-item">
                    <img src="/assets/projects/project1.jpg" alt="Project 1" />
                    <p>Project 1 Description</p>
                </div>
                <div className="project-item">
                    <img src="/assets/projects/project2.jpg" alt="Project 2" />
                    <p>Project 2 Description</p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials">
                <h3>Testimonials</h3>
                <blockquote>"Charles is a dedicated and skilled software engineer. He was a pleasure to work with on multiple projects." - Colleague</blockquote>
            </div>

            {/* Hobbies Section */}
            <div className="hobbies">
                <h3>Hobbies and Interests</h3>
                <div className="hobby-item">
                    <img src="/assets/hobbies/gaming.jpg" alt="Gaming" />
                    <p>Gaming</p>
                </div>
                <div className="hobby-item">
                    <img src="/assets/hobbies/design.jpg" alt="Video/Graphic Design" />
                    <p>Video/Graphic Design</p>
                </div>
            </div>

            {/* Quotes Section */}
            <div className="quotes">
                <h3>Inspirational Quotes</h3>
                <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
            </div>
        </div>
    );
};

export default About;