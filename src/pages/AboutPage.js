// AboutPage.js
import React from 'react';
import '../styles/AboutPage.css';
import '../App.css'
import Footer from '../components/Footer';


const AboutPage = () => {
    return (
        <main>
            <div className="wrapper">
                <div>
                    <h2>Hello, I'm Martin!</h2>
                    <p>I'm a front end student based in Stockholm. Welcome to my portfolio!</p>
                    <button>View My Work</button>
                </div>

                <section className="skillsSection">
                    <h2>My skills</h2>
                    <ul className="skills">
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Wordpress</li>
                        <li>HTML 5</li>
                        <li>HTML 5</li>
                        <li>HTML 5</li>
                        <li>HTML 5</li>
                        <li>HTML 5</li>

                    </ul>
                </section>
            </div>
        </main>

    );
};
export default AboutPage;
