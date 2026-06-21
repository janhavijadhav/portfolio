import { defineField, defineType } from "sanity";

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({ name: "platform", title: "Platform", type: "string" }),
    defineField({ name: "url", title: "URL", type: "url" }),
    defineField({ name: "label", title: "Label", type: "string" }),
  ],
});

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 4 }),
    defineField({
      name: "highlights",
      title: "Skill Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "snapshotLabel",
      title: "Snapshot Label",
      type: "string",
      initialValue: "Professional Snapshot",
    }),
    defineField({ name: "snapshotTitle", title: "Snapshot Title", type: "string" }),
    defineField({
      name: "snapshotItems",
      title: "Snapshot Items",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string", initialValue: "About" }),
    defineField({ name: "title", title: "Title", type: "string", initialValue: "About Me" }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});

export const skillGroup = defineType({
  name: "skillGroup",
  title: "Skill Group",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});

export const experienceItem = defineType({
  name: "experienceItem",
  title: "Experience Item",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Job Title", type: "string" }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});

export const educationItem = defineType({
  name: "educationItem",
  title: "Education Item",
  type: "object",
  fields: [
    defineField({ name: "institution", title: "Institution", type: "string" }),
    defineField({ name: "degree", title: "Degree", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});

export const projectDetailBlock = defineType({
  name: "projectDetailBlock",
  title: "Project Detail Block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      description: "Paragraph content (use bulletItems for lists)",
    }),
    defineField({
      name: "bulletItems",
      title: "Bullet Items",
      type: "array",
      of: [{ type: "text" }],
    }),
  ],
});

export const projectItem = defineType({
  name: "projectItem",
  title: "Project Item",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
    defineField({ name: "whyItMatters", title: "Why It Matters", type: "text", rows: 3 }),
    defineField({
      name: "detailSummary",
      title: "Detail Page Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "liveDemoUrl", title: "Live Demo URL", type: "url" }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: true,
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
    defineField({
      name: "detailBlocks",
      title: "Detail Blocks",
      type: "array",
      of: [{ type: "projectDetailBlock" }],
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

export const certificationItem = defineType({
  name: "certificationItem",
  title: "Certification",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "issuer", title: "Issuer", type: "string" }),
    defineField({ name: "date", title: "Date", type: "string" }),
    defineField({ name: "credentialUrl", title: "Credential URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});

export const researchItem = defineType({
  name: "researchItem",
  title: "Research / Publication",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "publishedIn", title: "Published In", type: "string" }),
    defineField({ name: "date", title: "Date", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 4 }),
    defineField({ name: "paperUrl", title: "Paper URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});

export const testimonialItem = defineType({
  name: "testimonialItem",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 4 }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Information",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", initialValue: "Let's Connect" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
  ],
});

export const seoSettings = defineType({
  name: "seoSettings",
  title: "SEO Settings",
  type: "object",
  fields: [
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "OG Image", type: "image" }),
    defineField({ name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] }),
  ],
});

export const sectionHeader = defineType({
  name: "sectionHeader",
  title: "Section Header",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
  ],
});
