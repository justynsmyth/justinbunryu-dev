import SectionHeader from '../components/SectionHeader';
import '../css/Experience.css';

import { ExperienceData } from '../types/types';
import ExperienceDb from '../data/experience.json';

const Experience = () => {
  const experiences: ExperienceData[] = ExperienceDb.experience;

  // Sort experiences by startDate in descending order (most recent first)
  experiences.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <>
      <div className="experience-header">
        <SectionHeader>Experience</SectionHeader>
      </div>
      <div className="timeline">
        {/* Vertical neon line */}
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-connector"></div>

            {/* Experience card */}
            <div className="experience-card">
              <div className="card-header">
                <h3 className="card-title">{exp.title}</h3>
                <span className="card-date">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>

              <div className="card-organization">
                <strong>{exp.organization}</strong>
                <span className="card-location"> • {exp.location}</span>
              </div>

              {exp.description && <p className="card-description">{exp.description}</p>}

              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="card-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
