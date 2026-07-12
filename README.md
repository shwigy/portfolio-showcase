# Personal Project Showcase App

A single-page React app for showcasing projects: view a list, search it, add
new projects on the fly, and click through to a project's detail page.

## Features

- Landing page listing projects in a card layout (inspired by the design mock-up)
- Add Project form with validation
- Live search/filter by title or description
- Project detail view via React Router (`/projects/:id`)
- Responsive layout for mobile screens
- Projects persist to `localStorage`

## Getting Started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm test         # run the Vitest + React Testing Library suite
npm run build    # production build
```

## Project Structure

```
src/
  components/   Header, AddProjectForm, SearchBar, ProjectList, ProjectCard, ProjectDetail
  hooks/        useProjects — owns project state, persists to localStorage
  tests/        Vitest + React Testing Library specs
  App.jsx       Lifts shared state (projects, search term) and defines routes
db.json         Seed data (also works with `npm run server` via json-server)
```

State lives in `App.jsx`, the nearest common parent of the components that
need it (the form, search bar, and list); each component manages only its own
local input state otherwise.

## Known Limitations

- Data is stored in `localStorage`, not a real backend — it won't sync across
  devices/browsers.
- No editing or deleting existing projects, and no authentication.
