import { defineField, defineType } from "sanity";

export const candidate = defineType({
  name: "candidate",
  title: "Candidate",
  type: "document",
  fields: [
    defineField({ name: "fullName", title: "Full Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "fullName", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "professionalTitle", title: "Professional Title", type: "string" }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "shortBio", title: "Short Bio", type: "text", rows: 3 }),
    defineField({ name: "aboutDescription", title: "About Description", type: "text", rows: 4 }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number", initialValue: 0 }),
    defineField({ name: "hero", title: "Hero Section", type: "heroSection" }),
    defineField({ name: "about", title: "About Section", type: "aboutSection" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "skillGroup" }],
    }),
    defineField({
      name: "experience",
      title: "Work Experience",
      type: "array",
      of: [{ type: "experienceItem" }],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "educationItem" }],
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "certificationItem" }],
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "projectItem" }],
    }),
    defineField({
      name: "research",
      title: "Research & Publications",
      type: "array",
      of: [{ type: "researchItem" }],
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "testimonialItem" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "socialLink" }],
    }),
    defineField({ name: "contact", title: "Contact Information", type: "contactInfo" }),
    defineField({
      name: "resume",
      title: "Resume",
      type: "file",
      options: { accept: ".pdf" },
    }),
    defineField({ name: "seo", title: "SEO Settings", type: "seoSettings" }),
    defineField({ name: "projectsSection", title: "Projects Section Header", type: "sectionHeader" }),
    defineField({ name: "experienceSection", title: "Experience Section Header", type: "sectionHeader" }),
    defineField({ name: "skillsSection", title: "Skills Section Header", type: "sectionHeader" }),
    defineField({ name: "educationSection", title: "Education Section Header", type: "sectionHeader" }),
    defineField({ name: "researchSection", title: "Research Section Header", type: "sectionHeader" }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "professionalTitle",
      media: "profileImage",
      featured: "featured",
    },
    prepare({ title, subtitle, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle,
        media,
      };
    },
  },
});
