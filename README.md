**[Tech Stack](#tech-stack)** | **[Setup](#setup)** | **[Development](#development)** | **[Deployment](#deployment)**

# Jon Gear's Website And Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/4771c8dc-35e6-45fa-96d2-158d20f5c2d0/deploy-status)](https://app.netlify.com/projects/gear-dev/deploys)
[![CI](https://github.com/jongear/jongear.github.io/workflows/CI/badge.svg)](https://github.com/jongear/jongear.github.io/actions)

Thanks for checking out my site. This is the complete code for my website and blog, featuring articles on distributed systems, machine learning, and brain-computer interfaces.

## Tech Stack

- **Framework:** [Gatsby](https://www.gatsbyjs.com/) v5
- **UI Library:** [React](https://reactjs.org/) v18
- **Content:** [MDX](https://mdxjs.com/) (Markdown + JSX)
- **Styling:** [styled-components](https://styled-components.com/)
- **Syntax Highlighting:** [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Node.js:** v20.x

## Setup

Install dependencies:

```sh
npm install
```

Or use clean install for CI/CD:

```sh
npm ci
```

## Development

Start the development server:

```sh
npm start
```

The site will be available at `http://localhost:8000`

### Other Commands

- `npm run build` - Build the production site
- `npm run lint` - Run ESLint
- `npm run serve` - Serve the production build locally

## Deployment

My site uses a comprehensive CI/CD pipeline with [GitHub Actions](https://docs.github.com/en/actions) and [Netlify](https://www.netlify.com/):

### CI Pipeline (GitHub Actions)

Every pull request triggers automated checks:
- **Linting:** ESLint checks for code quality
- **Build Verification:** Ensures the site builds successfully
- **Node.js:** Tests run on Node 20.x

### CD Pipeline (Netlify)

- **Preview Deploys:** Every PR gets a preview URL for testing
- **Production Deploys:** Merges to `master` automatically deploy to production
- **Static Generation:** Gatsby builds optimized static HTML/CSS/JS

### Why GitHub Actions?

While Netlify handles builds and deploys excellently, GitHub Actions provides critical quality gates:
- **Linting enforcement** ensures code adheres to consistent standards
- **Build verification** catches issues before deployment
- **Automated testing** maintains long-term stability and cleanliness
- **Required status checks** prevent broken code from reaching production

This dual approach ensures both deployment automation and code quality.

## Powered By

This website was originally based on [gatsby-starter-minimal-blog](https://github.com/LekoArts/gatsby-starter-minimal-blog) by [LekoArts](https://www.lekoarts.de/), and has been extensively customized and modernized.
