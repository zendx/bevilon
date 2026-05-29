# Bevilon

Bevilon is a modern marketing website for a web development studio focused on strategy, creative direction, and technology. The site presents Bevilon as a team of strategists, designers, and engineers building high-performance websites, web applications, e-commerce platforms, and brand-led marketing sites.

## What This Project Includes

- A responsive homepage for the Bevilon studio
- Hero, services, agency profile, project, and footer sections
- Brand-focused visual design with custom imagery and logo assets
- SEO and social metadata for the public website
- File-based routing with TanStack Router and TanStack Start

## Core Services Presented

- Web applications built with React, TypeScript, and scalable frontend architecture
- E-commerce and headless storefront experiences
- Brand and marketing websites designed to support growth and conversion

## Tech Stack

- React 19
- TypeScript
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- Radix UI components
- Lucide React icons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/routes/` - TanStack file-based routes
- `src/components/site/` - Page sections and site-level UI
- `src/components/ui/` - Reusable UI primitives
- `src/assets/` - Images and brand assets
- `src/styles.css` - Global styles and theme tokens

## Notes

The homepage is currently the primary public experience. Route generation is handled by TanStack Router through `src/routeTree.gen.ts`, which should not be edited manually.
