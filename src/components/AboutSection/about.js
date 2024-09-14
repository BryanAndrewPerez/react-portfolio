import React, { useState } from 'react';
import './about.css';

const About = () => {
    // State to manage which FAQ is open
    const [openFaq, setOpenFaq] = useState(null);

    // Function to toggle FAQs
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index); // Toggle FAQ open/close
    };

    return (
        <section id="about">
            <h2 className="aboutTitle">Some Random Facts About Me</h2>
            
            <div className="accordion">
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(0)}>
                        Who are you?
                    </div>
                    {openFaq === 0 && (
                        <div className="faq-answer">
                            <p>I am Bryan Andrew Perez from C3A. I am currently<br /> 20 years old and my birthday is on October 23</p>
                        </div>
                    )}
                </div>
                
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(1)}>
                        What are your hobbies?
                    </div>
                    {openFaq === 1 && (
                        <div className="faq-answer">
                            <p>I enjoy playing video games, reading mystery novels,<br />and watching horror movies</p>
                        </div>
                    )}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFaq(2)}>
                        Who is/are your favorite music artists?
                    </div>
                    {openFaq === 2 && (
                        <div className="faq-answer">
                            <p>My favorite music artists are NIKI and Taylor Swift</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;