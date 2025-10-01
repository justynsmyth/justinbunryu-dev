import { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectFilterContextType } from '../types/types';

const ProjectFilterContext = createContext<ProjectFilterContextType | undefined>(undefined);

export const ProjectFilterContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  return (
    <ProjectFilterContext.Provider
      value={{ activeSkill, setActiveSkill, activeCategory, setActiveCategory }}
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
