# Portfolio Clone — Next.js + Sanity CMS

A pixel-accurate replica of the [Sankar Raghuthaman portfolio](https://sankar-raghuthaman.netlify.app/), built with **Next.js**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **Lucide React**, and **Sanity CMS**.

All portfolio content is fetched dynamically from Sanity — no hardcoded data in the frontend.

## Website Audit Summary

### Sections (in order)

| # | Section | ID | Notes |
|---|---------|-----|-------|
| 1 | Navbar | — | Sticky header, mobile hamburger menu |
| 2 | Hero | — | Two-column grid + Professional Snapshot card |
| 3 | Featured Projects | `#projects` | 2-column project grid, "View All Projects" |
| 4 | Experience | `#experience` | Soft background, stacked timeline cards |
| 5 | Skills | `#skills` | Skill group cards with pills |
| 6 | Education | `#education` | 2-column grid |
| 7 | Research | `#research` | Publication cards |
| 8 | About | `#about` | Photo + bio grid |
| 9 | Contact | `#contact` | CTA card |
| 10 | Footer | — | Copyright + social icons |

### Additional Pages

- `/projects` — All projects (compact cards)
- `/projects/[slug]` — Project detail with blocks
- `/c/[slug]` — Multi-candidate portfolio route
- `/studio` — Embedded Sanity Studio

### Design Tokens (from original CSS)

- Accent: `#2f66f3` / `#1f4fd0`
- Text: `#0f172a` / Muted: `#475569`
- Background gradient: `#f8fafc` → `#f4f8ff`
- Container: `1120px`, Radius: `18px`
- Font: Inter

## Project Structure

```
sanity/
  schemas/          # Sanity document & object schemas
  queries/          # GROQ queries
  types/            # TypeScript types for Sanity documents
  lib/              # Sanity client
  scripts/          # Seed script

src/
  app/              # Next.js App Router pages
  components/       # Reusable UI, layout, sections
  features/         # Feature modules (projects, portfolio)
  lib/              # Utilities, animations, data fetching
  sanity/           # Frontend Sanity integration
  types/            # Shared TypeScript types
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project

```bash
npx sanity@latest init --project-plan free
```

Or create a project at [sanity.io/manage](https://www.sanity.io/manage).

### 3. Configure environment variables

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token
```

### 4. Seed reference content (optional)

Populates a featured candidate matching the reference site:

```bash
npm run sanity:seed
```

### 5. Run development servers

```bash
# Next.js frontend
npm run dev

# Sanity Studio (standalone)
npm run sanity:dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## Sanity Schemas

The `candidate` document aggregates all portfolio content:

- Personal info (name, title, photo, bio)
- Hero, About, Contact, SEO
- Skills, Experience, Education, Projects
- Certifications, Research, Testimonials
- Social links, Resume file

Mark one candidate as **Featured** to render on `/`.

For multiple candidates, use `/c/[slug]` (e.g. `/c/sankar-raghuthaman`).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run sanity:dev` | Standalone Sanity Studio |
| `npm run sanity:deploy` | Deploy Studio to sanity.studio |
| `npm run sanity:seed` | Seed reference candidate data |

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion (entrance, stagger, hover)
- Lucide React
- Sanity CMS v3
- next-sanity
