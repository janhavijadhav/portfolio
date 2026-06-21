export const candidateFields = `
  _id,
  fullName,
  "slug": slug.current,
  professionalTitle,
  profileImage,
  shortBio,
  aboutDescription,
  featured,
  displayOrder,
  hero,
  about,
  skills[] {
    title,
    skills,
    order
  },
  experience[] {
    title,
    company,
    duration,
    description,
    highlights,
    technologies,
    order
  },
  education[] {
    institution,
    degree,
    duration,
    order
  },
  certifications[] {
    title,
    issuer,
    date,
    credentialUrl,
    order
  },
  projects[] {
    title,
    "slug": slug.current,
    category,
    summary,
    whyItMatters,
    detailSummary,
    technologies,
    githubUrl,
    liveDemoUrl,
    featured,
    order,
    thumbnail,
    detailBlocks[] {
      heading,
      content,
      bulletItems
    }
  },
  research[] {
    title,
    publishedIn,
    date,
    summary,
    paperUrl,
    order
  },
  testimonials[] {
    quote,
    author,
    role,
    order
  },
  socialLinks[] {
    platform,
    url,
    label
  },
  contact,
  resume,
  seo,
  projectsSection,
  experienceSection,
  skillsSection,
  educationSection,
  researchSection
`;

export const featuredCandidateQuery = `
  *[_type == "candidate" && featured == true] | order(displayOrder asc)[0] {
    ${candidateFields}
  }
`;

export const candidateBySlugQuery = `
  *[_type == "candidate" && slug.current == $slug][0] {
    ${candidateFields}
  }
`;

export const candidateSlugsQuery = `
  *[_type == "candidate" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export const projectBySlugQuery = `
  *[_type == "candidate" && (
    featured == true || slug.current == $candidateSlug
  )][0].projects[slug.current == $projectSlug][0] {
    title,
    "slug": slug.current,
    category,
    summary,
    whyItMatters,
    detailSummary,
    technologies,
    githubUrl,
    liveDemoUrl,
    detailBlocks[] {
      heading,
      content,
      bulletItems
    }
  }
`;
