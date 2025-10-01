import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { ProjectData } from '../types/types';
import projectsData from '../data/projects.json';
import '../css/Projects.css';

import { useProjectFilter } from '../context/ProjectFilterContext';

const Projects = () => {
  const projects: ProjectData[] = projectsData.projects;
  const { activeSkill, activeCategory } = useProjectFilter();

  // Filter projects based on selected category
  let filteredProjects = projects;
  if (activeCategory !== 'all') {
    filteredProjects = projects.filter((p) => p.categories.includes(activeCategory));
  }
  if (activeSkill) {
    filteredProjects = filteredProjects.filter((p) => p.technologies.includes(activeSkill));
  }

  return (
    <>
      <div className="projects-container">
        {/* Projects grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Project image */}
              {project.image && (
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                  />
                </div>
              )}

              {/* Project content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                {/* Tech stack */}
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={`tech-tag`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}

                {/* Links */}
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-link"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found in this category.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
