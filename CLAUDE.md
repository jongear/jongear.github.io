# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```sh
npm start              # Start dev server with auto-open (gatsby develop -o)
npm run build          # Build production site
npm run serve          # Serve production build locally
npm run lint           # Run ESLint
npm run lint:fix       # Auto-fix linting issues
```

### Makefile (Alternative)
```sh
make help              # Show all available commands
make dev               # Start development server
make build             # Build production site
make test              # Run lint + build verification
make clean             # Remove .cache and public directories
make fresh             # Clean everything and reinstall
```

## Architecture

### Gatsby Site Structure

This is a Gatsby 5 static site that generates:
- **Blog posts** from MDX files in `src/blog/`
- **Category pages** dynamically created for each tag
- **Static pages** in `src/pages/`

### Key Build Flow

1. **gatsby-node.js** (Build-time Page Generation):
   - Creates dynamic routes for blog posts at `/[slug]`
   - Creates category pages at `/categories/[category]`
   - Calculates `timeToRead` for each post (200 words/min)
   - Generates slugs from post titles using kebab-case
   - Provides `prev`/`next` post context for navigation

2. **wrap-root-element.js** (MDX Configuration):
   - Wraps app with MDXProvider
   - Maps MDX `pre` elements to custom `Code` component
   - Enables syntax highlighting via prism-react-renderer

3. **Templates** (`src/templates/`):
   - `post.js` - Individual blog post pages
   - `category.js` - Category listing pages

### Content Management

**Blog Post Format:**
- Location: `src/blog/YYYY-MM-DD - Title/index.mdx`
- Frontmatter required:
  ```yaml
  date: 'YYYY-MM-DD'
  title: 'Post Title'
  categories:
    - Category1
    - Category2
  ```
- Optional: Custom `slug` in frontmatter (auto-generated from title if omitted)

### SEO & Metadata

**SEO Component** (`src/components/SEO.js`):
- Handles Open Graph tags (Facebook, LinkedIn, Threads)
- Twitter/X card metadata
- Schema.org JSON-LD structured data (WebPage, Article, BreadcrumbList)
- Configuration in `src/config/website.js`

**Gatsby Head API:**
- Uses `export const Head` pattern (Gatsby 5+)
- SEO component used in Head exports across pages/templates
- No react-helmet dependency

### Styling Architecture

- **styled-components** for all styling
- Theme configuration in `src/config/theme.js`
- Global styles injected via `Layout` component
- Responsive breakpoints defined in theme

### Component Organization

- `src/components/` - Shared components (Layout, Header, Wrapper, SEO, Button)
- `src/components/blog/` - Blog-specific components (Article, PrevNext, SectionTitle, Subline)
- `src/components/index.js` - Central export barrel

## Important Configuration Files

- **gatsby-config.js** - Plugins, site metadata, MDX processing
- **src/config/website.js** - Site-wide settings (title, URL, social handles, analytics)
- **src/config/theme.js** - Design tokens and responsive breakpoints
- **gatsby-node.js** - Dynamic page creation and field generation

## CI/CD

### GitHub Actions
- **ci.yml** - Runs on PRs only (lint + build verification)
- **release.yml** - Runs on master pushes (creates releases with build artifacts)

### Netlify
- Handles all deploys (preview on PRs, production on master)
- Static site generation via Gatsby build
- Preview URLs for every PR

## Node Version

- **Node 22.x** required (specified in GitHub Actions workflows)
- Use `npm ci` for reproducible CI builds
- Use `npm install` for local development
