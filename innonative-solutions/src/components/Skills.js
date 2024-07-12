import React from 'react';
import './Skills.css'; // Create Skills.css for specific styles

const Skills = () => {
    return (
        <section className="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                <div className="skill">
                    <i className="fas fa-code"></i>
                    <h3>Programming Languages</h3>
                    <p>Python, Java, HTML/CSS/JS, PHP</p>
                </div>
                <div className="skill">
                    <i className="fas fa-database"></i>
                    <h3>Data Management</h3>
                    <p>SQL/NoSQL, Data Pipelines, ETL Processes, Database management</p>
                </div>
                <div className="skill">
                    <i className="fas fa-chart-bar"></i>
                    <h3>Analytics & Visualization</h3>
                    <p>NumPy, Pandas, Tableau, Google Analytics</p>
                </div>
                <div className="skill">
                    <i className="fas fa-tools"></i>
                    <h3>Development Tools</h3>
                    <p>Django, React + React Native, Android Studio, Node.js, Firebase</p>
                </div>
                <div className="skill">
                    <i className="fas fa-cloud"></i>
                    <h3>Cloud Platforms</h3>
                    <p>Azure, AWS, Google Platform, Firebase</p>
                </div>
                <div className="skill">
                    <i className="fas fa-users"></i>
                    <h3>Collaboration & Communication</h3>
                    <p>Team projects, Leadership roles, Agile, Scrum</p>
                </div>
                <div className="skill">
                    <i className="fas fa-gears"></i>
                    <h3>Automation & Integration</h3>
                    <p>Ansible, Docker, Hypervisors, SIEM Integration, Terraform, Kubernetes</p>
                </div>
                <div className="skill">
                    <i className="fas fa-bug"></i>
                    <h3>Testing & Debugging</h3>
                    <p>Unit Testing, Integration Testing </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
