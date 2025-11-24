import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Jan Gabriel T. Misa</h1>
        <p className="subtitle">Full Stack Developer</p>
        <p className="bio">
          Passionate developer studying Web Development with experience in
          building modern web applications using ViteReact, Node.js, Rails, Python and more.
        </p>
        <div className="contact-info">
          <a href="mailto:jangab143@yahoo.com">Email</a>
          <a href="https://github.com/yRahmseise">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;