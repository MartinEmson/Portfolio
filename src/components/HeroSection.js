// HeroSection.js
import React from 'react';
import '../styles/HeroSection.css'; // Import the CSS for styling
import myImage from '../images/red.jpg'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-image">
                    <img src={myImage} alt="My Image" />
                </div>
                <div className="hero-text">
                    <h1>Hi, I'm Martin.</h1>
                    <p>FRONT-END DEVELOPER</p>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
