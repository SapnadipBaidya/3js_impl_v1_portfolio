// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { device } from '../styles/breakpoint';

const projects = [
  {
    title: 'Credit Workflow Management System',
    description: 'An efficient workflow app for finance teams.',
    link: '#',
  },
  {
    title: 'AI-Powered Dating App',
    description: 'Interactive dating app with ChatGPT API.',
    link: '#',
  },
];

const Projects = () => (
  <ProjectSection id="projects">
    <h2>Projects</h2>
    <ProjectList>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View More
          </a>
        </ProjectCard>
      ))}
    </ProjectList>
  </ProjectSection>
);

const ProjectSection = styled.section`
  padding: 2rem;
  background: #1f1f1f;
  color: #eaeaea;

  @media ${device.mobile} {
    padding: 1rem;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: #333;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
`;

export default Projects;