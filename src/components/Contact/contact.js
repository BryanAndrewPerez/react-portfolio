import React, { useState } from 'react';
import './contact.css';

const Contacts = () => {
    // State variables to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        // Simple email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            alert('Name is required.');
        } else if (!email) {
            alert('Email is required.');
        } else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
        } else if (!message) {
            alert('Message cannot be empty.');
        } else {
            alert('Message successfully submitted!');
            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <section id='contacts'>
            <div>
                <h1 className="contactTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below</span>
                <form className="contactForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        className="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className="msg"
                        name="message"
                        rows="5"
                        placeholder="Message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button type='submit' className="submitBtn">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contacts;
