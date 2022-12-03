import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="text--bg">
              Donate with <span className="text--yellow">100%</span>
            </p>
            <p className="text--bg">Transparency</p>
            <p className="text--sm">The most trusted crowdfunding platform that tracks how your donations are used.</p>
          </div>
          <div className="hero-img">
            <img src="/imgs/hero.png" alt="Charitism features" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
