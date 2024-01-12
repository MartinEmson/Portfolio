// ContactPage.js
import React from 'react';
import '../styles/ContactPage.css';
import '../App.css'

const ContactPage = () => {
    return (
        <main>
            <div className="wrapper">
                <header>
                    <h1>Contact Me</h1>
                    <p>Feel free to reach out if you have any questions or just want to connect!</p>
                </header>
                <div className="contact-page"> {/* Apply the contact-page class here */}
                    <form>
                        <div className="names">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="name" />
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="name" />
                        </div>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />

                        <label htmlFor="message">Message</label>
                        <textarea id="message"></textarea>

                        <button type="submit">Send</button>
                    </form>

                    {/* Social Links */}
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
