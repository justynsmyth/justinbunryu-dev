import { useMemo } from 'react';

import SectionHeader from '../components/SectionHeader';
import { useProjectFilter } from '../context/ProjectFilterContext';

import { SkillData } from '../types/types';
import skillsData from '../data/skills.json';
import { ProjectData } from '../types/types';
import projectsData from '../data/projects.json';
import clsx from 'clsx';

export default function ProjectFilters() {
  const allSkills: SkillData[] = skillsData.skills;
  const projects: ProjectData[] = projectsData.projects;
  const { activeSkill, setActiveSkill, activeCategory, setActiveCategory, setSearchParams } =
    useProjectFilter();

  // Extract all unique categories from projects
  const categories = ['all', ...new Set(projects.flatMap((p) => p.categories))];

  // Get projects filtered by active category
  const categoryFilteredProjects = useMemo(() => {
    return activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory, projects]);

  // Get only skills that appear in the filtered projects
  const availableSkills = useMemo(() => {
    const skillsInFilteredProjects = new Set<string>();
    categoryFilteredProjects.forEach((project) => {
      project.technologies.forEach((tech) => {
        skillsInFilteredProjects.add(tech);
      });
    });

    // Filter allSkills to only include those in the filtered projects
    return allSkills.filter((skill) => skillsInFilteredProjects.has(skill.name));
  }, [categoryFilteredProjects, allSkills]);

  // Clickable skill filter bubbles (only for skills in filtered projects)
  const skillFilterBubbles = availableSkills.map((skill: SkillData) => {
    const color = skill.color || 'golang';
    const isActive = activeSkill === skill.name;
    return (
      <button
        key={skill.name}
        className={clsx(`button-${color}`, { active: isActive })}
        onClick={() => {
          const newSkill = isActive ? null : skill.name;
          setActiveSkill(newSkill);
          if (newSkill) {
            setSearchParams({ skill: newSkill });
          } else {
            setSearchParams({});
          }
        }}
      >
        {skill.name}
      </button>
    );
  });

  // Category bubbles
  const categoryBubbles = categories.map((category) => {
    const color = 'golang';
    const isActive = activeCategory === category;
    return (
      <button
        key={category}
        className={clsx(`button-${color}`, { active: isActive })}
        onClick={() => {
          setActiveCategory(category);
          // Reset skill filter when changing category
          setActiveSkill(null);
          setSearchParams({});
        }}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    );
  });

  // Global reset function
  const handleGlobalReset = () => {
    setActiveCategory('all');
    setActiveSkill(null);
    setSearchParams({});
  };

  return (
    <>
      {/* Projects Section with Category Filters */}
      <div className="filter-container" id="projects">
        <SectionHeader>Projects</SectionHeader>

        {/* Global Reset Button */}
        <div className="skills-header">
          <p className="skills-instruction">Filter by category and skill</p>
          <div className="skill-reset-container">
            <button
              className={clsx('reset-button', {
                hidden: activeCategory === 'all' && !activeSkill,
              })}
              onClick={handleGlobalReset}
              aria-hidden={activeCategory === 'all' && !activeSkill}
            >
              Reset All Filters
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="filter-section">
          <h4 className="filter-label">Category</h4>
          <div className="bubble-container">{categoryBubbles}</div>
        </div>

        {/* Skill Filters (only show skills available in current category) */}
        {availableSkills.length > 0 && (
          <div className="filter-section">
            <h4 className="filter-label">
              Filter by Skill
              <span className="filter-count">({availableSkills.length} available)</span>
            </h4>
            <div className="bubble-container">{skillFilterBubbles}</div>
          </div>
        )}
      </div>
    </>
  );
}
