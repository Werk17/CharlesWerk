import React from 'react';

const MyWork = () => {
    return (
        <div>
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="project">
                    <img src="/assets/Starquilts247Landing.png" alt="Project 1" />
                    <h3>Starquilts247</h3>
                    <p>Designed and developed a responsive website showcasing exquisite quilts with a photo gallery and SEO optimization.</p>
                </div>
                <div className="project">
                    <img src="/assets/StarTrailsDesign.png" alt="Project 2" />
                    <h3>Startrails</h3>
                    <p>Developed a mobile app for promoting tourism in Eastern Montana with a robust database and interactive map.</p>
                </div>
                <div className="project">
                    <img src="/assets/SpectralClustering.png" alt="Project 3" />
                    <h3>Spectral Clustering</h3>
                    <p>Utilized Python and machine learning to uncover patterns and predict trends through spectral clustering techniques.</p>
                </div>
                <div className="project">
                    <img src="/assets/eventPlanner.webp" alt="Project 3" />
                    <h3>Campus Event Planner</h3>
                    <p>Developed a React Native app to streamline event planning and management within the campus community using Firebase.</p>
                </div>
            </div>
            <div className="projects-button-container">
                <a href="/my-work" className="projects-button">See All Projects</a>
            </div>
        </div>
    );
};

export default MyWork;
