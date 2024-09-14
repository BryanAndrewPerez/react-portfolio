import React from "react";
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/giphy.webp'; // Import the GIF

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <div className="introMsg">
                    <span className="hello">Hello</span>
                    <span className="greeting">I am <span className="myname">Bryan</span><br />3rd Year<br />Computer Science Student</span>
                    <p className="introPara">This is my react website portfolio for WEBDEVT</p>
                    <Link
                    to="works"
                    smooth={true}
                    duration={500}>
                    <button className="parabtn">View my projects</button></Link>
                </div>
                <div className="introGif">
                    <img src={bg} alt="GIF Description" />
                </div>
            </div>
        </section>
    )
}

export default Intro;
