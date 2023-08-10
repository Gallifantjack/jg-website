import React from 'react';

function Hero() {
    return (
        <div className="hero-container">
            <img src={require('@/img/resources/refactoringui-small@75.jpg').default.src} alt="Hero" className="hero-image fade-in" />
        </div>
    );
}

export default Hero;
