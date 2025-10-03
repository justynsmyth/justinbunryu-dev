import { useState } from 'react';

import SectionHeader from '../components/SectionHeader';
import { useProjectFilter } from '../context/ProjectFilterContext';

import { SkillData } from '../types/types';
import skillsData from '../data/skills.json';
import { ProjectData } from '../types/types';
import projectsData from '../data/projects.json';
import clsx from 'clsx';

export default function ProjectFilters() {
  const skills: SkillData[] = skillsData.skills;
  const { activeSkill, setActiveSkill, activeCategory, setActiveCategory, setSearchParams } =
    useProjectFilter();

  // Create skill components
  const skillBubbles = skills.map((skill: SkillData, index: number) => {
    const color = skill.color || 'golang';
    const isActive = activeSkill === skill.name;
    return (
      <button
        key={skill.name}
        className={clsx(`button-${color}`, { active: isActive })}
        onClick={() => {
          setActiveSkill(skill.name);
          setSearchParams({ skill: skill.name });
        }}
      >
        {skill.name}
      </button>
    );
  });

  const projects: ProjectData[] = projectsData.projects;

  // Extract all unique categories from projects and attach 'all' to list
  const categories = ['all', ...new Set(projects.flatMap((p) => p.categories))];

  const categoryBubbles = categories.map((category) => {
    const color = 'golang';
    const isActive = activeCategory === category;
    return (
      <button
        key={category}
        className={clsx(`button-${color}`, { active: isActive })}
        onClick={() => setActiveCategory(category)}
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    );
  });

  return (
    <>
      <div className="skills-container">
        <SectionHeader> Skills </SectionHeader>
        <div className="skills-header">
          <div className="skills-instruction">Click a skill to filter projects</div>
          <div className="skill-reset-container">
            <button
              className={clsx('reset-button', { hidden: !activeSkill })}
              onClick={() => {
                setActiveSkill(null);
                setSearchParams({});
              }}
              aria-hidden={!activeSkill}
            >
              Reset Filter
            </button>
          </div>
        </div>
        <div className="bubble-container">{skillBubbles}</div>
      </div>
      <div className="filter-container">
        <SectionHeader>Projects</SectionHeader>
        <div className="skills-header">
          <p className="skills-instruction">Click a category to filter projects</p>
        </div>
        <div className="bubble-container">{categoryBubbles}</div>
      </div>
    </>
  );
}
