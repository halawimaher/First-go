import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Hi, My name is Souad ALi</h1>
            <p>Let's Work Together</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Talk to Me</Button>
            </div>
        </div>
    )
}

export default HeroSection
