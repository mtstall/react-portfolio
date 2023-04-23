import React from 'react';
import github from '../public/github-icon.jpg';
import linkedin from '../public/linkedin-icon.png';
import twitter from '../public/twitter-icon.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/mtstall">
                <img src={github} alt="github icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/mtstall/">
                <img src={linkedin} alt="linkedin icon"></img>
            </a>
            <a href="https://twitter.com/tay_stall">
                <img src={twitter} alt="twitter icon"></img>
            </a>
        </div>
    )
}