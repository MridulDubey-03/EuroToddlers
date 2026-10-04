# Euro Toddlers International Pre School

Marketing website for Euro Toddlers, built with React, Vite, Tailwind CSS, React Router and Framer Motion.

## Getting started

```bash
cd frontend
npm install
npm run dev
```

| Script | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  assets/              Images and static assets
  components/
    layout/            Navbar, Footer (shared on every page)
    sections/
      home/            Homepage sections
      about/           About page sections
      contact/         Contact page sections
  layouts/             Page layout wrappers (PublicLayout)
  pages/               One component per route
  routes/              Route definitions (AppRoutes)
  App.jsx              App root
  main.jsx             Entry point (mounts BrowserRouter)
  index.css            Tailwind import and global styles
```

Conventions: lowercase folder names, PascalCase component files. Sections used by one page go in `components/sections/<page>/`. Components reused across pages go in `components/` (e.g. `components/common/`).
