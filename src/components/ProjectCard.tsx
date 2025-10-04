import { ProjectData } from '../types/types';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
const monthMap: { [key: string]: string } = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
};

export default function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const [currImageIdx, setCurrImageIdx] = useState(0);

  const nextImage = () => {
    setCurrImageIdx((prev) => (project.images ? (prev + 1) % project.images.length : 0));
  };

  useEffect(() => {
    if (!project.images || project.images.length === 0) return;

    // five seconds (5000)
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [project.images]);

  const isVideo =
    Array.isArray(project.images) &&
    project.images.length > 0 &&
    project.images[currImageIdx]?.toLowerCase().endsWith('.mp4');

  const [yearStart, monthStart] = project.startDate ? project.startDate.split('-') : ['', ''];
  const formattedStart = `${monthMap[monthStart] ?? monthStart} ${yearStart}`;
  const [yearEnd, monthEnd] =
    project.endDate === 'present' ? ['Present', ''] : project.endDate.split('-');
  const formattedEnd = `${monthMap[monthEnd] ?? monthEnd} ${yearEnd}`;

  let dateDisplay;

  // 1. startDate MUST exist
  // 2. if startDate is same month/year as endDate, do not include endDate
  // 3. if endDate does not exist, mark as Present
  if (formattedStart.length > 0) {
    if (formattedEnd === formattedStart) {
      dateDisplay = formattedStart;
    } else {
      dateDisplay = `${formattedStart} - ${formattedEnd}`;
    }
  } else {
    dateDisplay = '';
  }

  const videoLinks = project.videoDemos
    ? project.videoDemos.map((video, index) => {
        return (
          <a
            key={index}
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link live-link"
          >
            Video {index + 1}
          </a>
        );
      })
    : null;

  // if no title, description, and highlights, do not display
  if (!project.title && !project.description && !project.highlights) {
    return null;
  }

  const classes = clsx('project-card', {
    featured: project.featured,
  });

  return (
    <div key={index} className={classes}>
      {/* current project image or video*/}
      {project.images && (
        <div className="project-image-container">
          {isVideo ? (
            <video
              src={project.images[currImageIdx]}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="project-media"
            />
          ) : (
            <img
              src={project.images[currImageIdx]}
              alt={`${project.title} screenshot`}
              className="project-media"
            />
          )}
        </div>
      )}

      {/* Project content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <h4 className="project-date">{dateDisplay}</h4>

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
          {project.externalURL && (
            <a
              href={project.externalURL}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              View More Info
            </a>
          )}
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
          {videoLinks}
        </div>
      </div>
    </div>
  );
}
