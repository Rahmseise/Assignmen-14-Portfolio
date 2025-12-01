import React from 'react';
import './Work.css';

const projects = [
  {
    id: 1,
    title: "Component Library",
    description: "A reusable React component library with buttons, cards, forms, and more.",
    image: "/images/component-library.png",
    link: "https://github.com/Rahmseise/coding-assignment-12",
    techList: ["ViteReact", "CSS", "Storybook", "npm", "Typescript", "Docker"]
  },
  {
    id: 2,
    title: "Rudimentary CMS Website",
    description: "Full-stack CMS website with interactable blog post and account management.",
    image: "/images/component-library.png",
    link: "https://github.com/Rahmseise/Final-Project-CMS",
    techList: ["PHP", "HTML", "MySql"]
  },
  {
    id: 3,
    title: "First Docker Trial",
    description: "Created a react app and tested docker functionality",
    image: "/images/component-library.png",
    link: "https://github.com/Rahmseise/Dockerized-React-File",
    techList: ["React", "Eslint", "Docker"]
  }
];

function Work() {
  return (
    <section className="work">
      <h2>My Work</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.techList.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project:
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;