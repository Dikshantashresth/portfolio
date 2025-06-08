import React from 'react';
import './Projects.css';
import currencyx from '../assets/currencyx.png';
import Nav from './Nav';
import portfolio from '../assets/portfolio.png';
import footquiz from '../assets/footquiz.png';
import archimedes from '../assets/Archimedes.png';
const projects = [
  {
    title: 'Portfolio Website',
    img: portfolio,
    description: 'A personal portfolio to showcase my skills, projects, and resume.',
    Stack: 'HTML, CSS, JAVASCRIPT, React',
    link: '#'
  },
  {
    title: 'CurrencyX',
    img: currencyx,
    description: 'A currency converter app that provides real-time exchange rates.',
    Stack: 'React, Node.js,API',
    link: 'https://dikshantashresth.github.io/currencyx/'
  },
  {
    title: 'FootQuiz',
    img: footquiz,
    description: 'A fun quiz app to test your knowledge about football.',
    Stack: 'HTML, CSS, JAVASCRIPT, API',
    link: 'https://dikshantashresth.github.io/footquiz/'
  },
  {
    title: 'Archimedes Calculator',
    img: archimedes,
    description: 'A calculator app that helps with various mathematical calculations.',
    Stack: 'HTML, CSS, JAVASCRIPT',
    link: 'https://dikshantashresth.github.io/Archimedes-Calculator/'
  }
];

const Projects = () => {
  return (
    <>
      <Nav />
      <div className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <img src={project.img} alt={project.title} className="project-image" />
              <p className="project-stack">{project.Stack}</p>
              <p>{project.description}</p>
              <div className="view"><a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
                View Project
              </a></div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
