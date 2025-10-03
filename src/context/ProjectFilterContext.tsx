import { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectFilterContextType, SkillTypes, getSkillType } from '../types/types';

import { useSearchParams } from 'react-router-dom';

const ProjectFilterContext = createContext<ProjectFilterContextType | undefined>(undefined);

export const ProjectFilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // check skillFilter, set null if invalid
  const rawSkill = searchParams.get('skill');
  const skillFilter = rawSkill && getSkillType(rawSkill);

  const [activeSkill, setActiveSkill] = useState<string | null>(skillFilter);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <ProjectFilterContext.Provider
      value={{
        activeSkill,
        setActiveSkill,
        activeCategory,
        setActiveCategory,
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </ProjectFilterContext.Provider>
  );
};

export const useProjectFilter = () => {
  const context = useContext(ProjectFilterContext);
  if (!context) {
    throw new Error('useProjectFilter must be used inside a ProjectFilterContextProvider');
  }
  return context;
};
