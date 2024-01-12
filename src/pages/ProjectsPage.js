// ProjectsPage.js
import React from 'react';
import '../styles/ProjectsPage.css';
import '../App.css'

const ProjectsPage = () => {
    return (
        <main>
            <div className="wrapper">
                <div>
                    <h2>My Projects</h2>
                    <div className="projects-container">
                        {/* Map through your projects and display them here */}
                        <div className="project">
                            <img src="path-to-project-image" alt="Project" />
                            <h3>Project Title</h3>
                            <p>Short description...</p>
                            <a href="live-link">Live Demo</a>
                            <a href="github-link">Source Code</a>
                        </div>
                        {/* Repeat for other projects */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
