# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DataShopper v2 - A visitor identification and marketing intelligence dashboard that helps businesses identify website visitors and target them with personalized marketing campaigns.

## Tech Stack

- Language: JavaScript (ES6+)
- Framework: Vue.js 3 (Composition API)
- Build Tool: Vite
- Styling: Tailwind CSS
- State Management: Pinia
- Routing: Vue Router
- Charts: Chart.js with vue-chartjs
- Icons: Heroicons (Vue)
- Backend: REST API (separate service)

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
/
├── src/
│   ├── assets/          # CSS and static assets
│   ├── components/
│   │   ├── charts/      # Chart components (LineChart, etc.)
│   │   ├── common/      # Shared UI components
│   │   ├── dashboard/   # Dashboard-specific components
│   │   └── layout/      # Layout components (Sidebar, Header)
│   ├── router/          # Vue Router configuration
│   ├── services/        # API service layer
│   ├── stores/          # Pinia stores
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Development Guidelines

- Use Vue 3 Composition API with `<script setup>` syntax
- Follow existing code style and patterns
- Keep components focused and single-purpose
- Use Pinia stores for shared state
- API calls should go through the services layer
- Use Tailwind CSS utility classes for styling

## Architecture Notes

- **Component Architecture**: Smart/container components in `views/`, presentational components in `components/`
- **State Management**: Pinia stores handle global state; component state stays local when possible
- **API Layer**: All REST API calls go through `src/services/api.js` for consistent error handling
- **Routing**: Lazy-loaded routes for better performance
