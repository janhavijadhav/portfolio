export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanityFile {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
}

export interface HeroSection {
  headline?: string;
  subheadline?: string;
  highlights?: string[];
  snapshotLabel?: string;
  snapshotTitle?: string;
  snapshotItems?: string[];
}

export interface AboutSection {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  tags?: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
  order?: number;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description?: string;
  highlights?: string[];
  technologies?: string[];
  order?: number;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  order?: number;
}

export interface ProjectDetailBlock {
  heading: string;
  content?: string;
  bulletItems?: string[];
}

export interface ProjectItem {
  title: string;
  slug: string;
  category?: string;
  summary?: string;
  whyItMatters?: string;
  detailSummary?: string;
  technologies?: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
  order?: number;
  thumbnail?: SanityImage;
  detailBlocks?: ProjectDetailBlock[];
}

export interface CertificationItem {
  title: string;
  issuer?: string;
  date?: string;
  credentialUrl?: string;
  order?: number;
}

export interface ResearchItem {
  title: string;
  publishedIn?: string;
  date?: string;
  summary?: string;
  paperUrl?: string;
  order?: number;
}

export interface TestimonialItem {
  quote: string;
  author?: string;
  role?: string;
  order?: number;
}

export interface ContactInfo {
  title?: string;
  description?: string;
  email?: string;
  linkedinUrl?: string;
}

export interface SeoSettings {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  keywords?: string[];
}

export interface SectionHeader {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export interface Candidate {
  _id: string;
  fullName: string;
  slug: string;
  professionalTitle?: string;
  profileImage?: SanityImage;
  shortBio?: string;
  aboutDescription?: string;
  featured?: boolean;
  displayOrder?: number;
  hero?: HeroSection;
  about?: AboutSection;
  skills?: SkillGroup[];
  experience?: ExperienceItem[];
  education?: EducationItem[];
  certifications?: CertificationItem[];
  projects?: ProjectItem[];
  research?: ResearchItem[];
  testimonials?: TestimonialItem[];
  socialLinks?: SocialLink[];
  contact?: ContactInfo;
  resume?: SanityFile;
  seo?: SeoSettings;
  projectsSection?: SectionHeader;
  experienceSection?: SectionHeader;
  skillsSection?: SectionHeader;
  educationSection?: SectionHeader;
  researchSection?: SectionHeader;
}

export type SanityImageSource = SanityImage | { asset?: { _ref: string } };
