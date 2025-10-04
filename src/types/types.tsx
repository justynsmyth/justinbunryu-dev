export type ExternalLinkProps = Readonly<{
  children: React.ReactNode;
  href: string;
  label: string;
}>;

export type InternalLinkProps = Readonly<{
  children: React.ReactNode;
  targetId: string;
  label?: string;
}>;

export type SkillData = {
  name: string;
  type: string;
  tags: string[];
  color?: string;
};

export type SkillTypes =
  | 'JavaScript'
  | 'React'
  | 'Python'
  | 'C++'
  | 'HTML+CSS'
  | 'Golang'
  | 'C#'
  | 'MySQL'
  | 'Lua';

const skillMap: { [key: string]: SkillTypes } = {
  js: 'JavaScript',
  react: 'React',
  python: 'Python',
  cpp: 'C++',
  htmlcss: 'HTML+CSS',
  go: 'Golang',
  cs: 'C#',
  mysql: 'MySQL',
  lua: 'Lua',
};

const skillValues = [
  'js',
  'react',
  'python',
  'cpp',
  'htmlcss',
  'dev',
  'go',
  'cs',
  'mysql',
  'lua',
] as const;

export function getSkillType(value: string): SkillTypes | null {
  return (skillValues as readonly string[]).includes(value) ? skillMap[value] : null;
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  highlights?: string[];
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  endDate: string;
  videoDemos?: string[];
  externalURL?: string;
  featured?: boolean;
}

export type ProjectFilterContextType = {
  activeSkill: string | null;
  setActiveSkill: (s: string | null) => void;
  activeCategory: string; // ALL is default
  setActiveCategory: (c: string) => void;
  searchParams: URLSearchParams;
  setSearchParams: any;
};

export interface ExperienceData {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights?: string[];
}
