# Ahmed.dev | Flutter Developer Portfolio

Modern, premium portfolio website built with React and Vite. Showcases Flutter apps, AI workflows, and professional projects with a cinematic, interactive design.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool and dev server
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion 12** — Animation library
- **Lucide React** — Icon library

## Features

- Animated loading screen with gradient loader
- Custom cursor glow effect
- Typing animation for role headlines
- Smooth scroll with progress indicator
- Phone mockup components with float animation
- Circular skill progress rings
- GitHub-style repository cards
- Fully responsive layout
- Accessible with semantic HTML and ARIA labels
- SEO-optimized with Open Graph and Twitter tags
- Premium glassmorphism UI with blur effects
- Dark theme optimized for performance

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ahmedbawzir12-png/ahmed-portfolio.git

# Navigate into the project
cd ahmed-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory. Preview the production build with:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Deploy

### Vercel (recommended)

1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel auto-detects Vite — no configuration needed.
4. Deploy.

The included `vercel.json` ensures SPA routing works correctly.

### Manual Deployment

Serve the `dist/` folder with any static file server:

```bash
npx serve dist
```

## Project Structure

```
src/
├── assets/images/    # Static images
├── components/       # Navbar, Hero, Loader
├── sections/         # About, Projects, Skills, Contact
├── App.jsx           # Root component
├── main.jsx          # Entry point
└── index.css         # Global styles and Tailwind
```

## License

MIT
