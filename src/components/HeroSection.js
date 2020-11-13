import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container" id="Home">
            <h1>Souad ALi</h1>
            <p>Designer, Creator, Mentor</p>
            <div className="hero-btn">
                <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>Contact Me</Button>
            </div>
        </div>
    )
}

export default HeroSection
