import React from 'react';
import github from '../public/images/github-icon.jpg';
import linkedin from '../public/images/linkedin-icon.png';
import twitter from '../public/images/twitter-icon.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/mtstall" rel="noreferrer" target="_blank">
                <img src={github} alt="github icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/mtstall/" rel="noreferrer" target="_blank">
                <img src={linkedin} alt="linkedin icon"></img>
            </a>
            <a href="https://twitter.com/tay_stall" rel="noreferrer" target="_blank">
                <img src={twitter} alt="twitter icon"></img>
            </a>
        </div>
    )
}