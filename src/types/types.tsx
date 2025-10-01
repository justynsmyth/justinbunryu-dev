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

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  categories: string[];
  highlights?: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}
