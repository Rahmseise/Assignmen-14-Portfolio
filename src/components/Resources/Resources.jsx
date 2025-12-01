import React from 'react';
import './Resources.css';

const resources = [
  {
    id: 1,
    title: "MDN Web Docs",
    icon: "📚",
    summary: "Comprehensive documentation for web technologies including HTML, CSS, and JavaScript.",
    link: "https://developer.mozilla.org"
  },
  {
    id: 2,
    title: "React Documentation",
    icon: "⚛️",
    summary: "Official React documentation with guides, tutorials, and API reference.",
    link: "https://react.dev"
  },
  {
    id: 3,
    title: "Stack Overflow",
    icon: "💬",
    summary: "Community-driven Q&A platform for programming questions and solutions.",
    link: "https://stackoverflow.com"
  },
  {
    id: 4,
    title: "GitHub",
    icon: "🐙",
    summary: "Version control platform for hosting and collaborating on code projects.",
    link: "https://github.com"
  }
];

function Resources() {
  return (
    <section className="resources">
      <h2>Helpful Resources</h2>
      <div className="resources-grid">
        {resources.map(resource => (
          <div key={resource.id} className="resource-card">
            <div className="resource-icon">{resource.icon}</div>
            <h3>{resource.title}</h3>
            <p>{resource.summary}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Visit Resource:
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;