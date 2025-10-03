import { ProjectData } from '../types/types';
import projectsData from '../data/projects.json';
import '../css/Projects.css';

import ProjectCard from '../components/ProjectCard';

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

  // filter projects by startDate
  function parseDate(date: string | undefined): Date | null {
    if (!date) return null;
    if (date.toLowerCase() === 'present') return new Date(9999, 11, 31);
    const [year, month] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1);
  }

  filteredProjects.sort((a, b) => {
    // if a is featured, then it automatically takes priority
    // if a and b are featured, continue with below
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    const endA = parseDate(a.endDate) || parseDate(a.startDate);
    const endB = parseDate(b.endDate) || parseDate(b.startDate);

    return (endB?.getTime() || 0) - (endA?.getTime() || 0);
  });

  return (
    <>
      <div className="projects-container" id="projects">
        {/* Projects grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            return <ProjectCard key={index} project={project} index={index} />;
          })}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">No projects found in this category.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
