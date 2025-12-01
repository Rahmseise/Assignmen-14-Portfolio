import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills & Technologies</h2>

      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages & Frameworks</h3>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>HTML5 & CSS</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>Ruby</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>VS Code</li>
            <li>npm/yarn</li>
            <li>Storybook</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Core Competencies</h3>
          <p>
            Experienced building responsive web applications using JavaScript
            HTML5, and more, with strong understanding of website core funtionalities such as
            Git Repositories, data management, and coding languages.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;