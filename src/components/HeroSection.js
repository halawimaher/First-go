import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Hi, I am Souad ALi</h1>
            <p>Designer, Creator, Mentor</p>
            <div className="hero-btn">
                <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>Let's Talk</Button>
            </div>
        </div>
    )
}

export default HeroSection
