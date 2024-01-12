// Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import the CSS for styling

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
