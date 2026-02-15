export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  techStack: string[];
  type: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};