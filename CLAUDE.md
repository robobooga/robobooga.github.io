# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Nick Tan built with Vite and vanilla JavaScript. Deployed to GitHub Pages with a custom domain (nick-tan.com).

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (usually runs on http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## Architecture

**Single-Page Application Structure:**
- `src/main.js` - Contains all HTML content via template literals and interactive behavior (smooth scrolling)
- `src/style.css` - All styling using CSS custom properties for theming
- `index.html` - Minimal entry point that loads main.js
- `public/CNAME` - Custom domain configuration for GitHub Pages

**Content Sections (in order):**
1. Hero - Introduction with availability status badge
2. Expertise - Four core areas: Operations, Strategy, Systems, Product
3. Talk - Topics of interest displayed as tags
4. Ventures - Three business ventures with external links
5. Projects - Current development projects (Scarab, NoLag Tool)
6. Contact - Email and LinkedIn links

**Design System:**
- Soft dark theme with CSS variables defined in `:root`
- Typography: Inter font family from Google Fonts
- Responsive breakpoint at 600px (mobile nav hidden, single-column grid)
- Container max-width: 700px
- Interactive elements use hover states with subtle transforms and border color transitions

## Deployment

- **Automatic deployment** via GitHub Actions on push to `master` branch
- Workflow: `.github/workflows/deploy.yml`
- Process: Install deps → Build → Upload to GitHub Pages
- Build output: `dist/` directory (git-ignored)
- Custom domain: Configured via `public/CNAME`

## Content Updates

When updating portfolio content:
- All text content lives in `src/main.js` template literal
- Projects and ventures are anchor tags with `.project-card` class
- Maintain consistent structure: h3 title, p description, external link icon
- Status badge in hero can be updated for availability

## Styling Patterns

- Use existing CSS custom properties from `:root` for consistency
- Card components: `.project-card`, `.stack-category`, `.stack-item`
- Buttons: `.btn`, `.btn-primary`, `.social-btn`
- Section titles use uppercase with decorative line (`::after` pseudo-element)
- Maintain hover states for interactive elements
