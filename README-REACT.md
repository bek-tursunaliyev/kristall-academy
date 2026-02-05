# Kristall Academy - Pure React & CSS Version

This is a complete rewrite of the Kristall Academy website from Next.js/TypeScript to pure React with vanilla CSS.

## What Changed

- **Removed**: Next.js framework, TypeScript, shadcn/ui components, Tailwind CSS
- **Added**: Pure React components, vanilla CSS, Vite build tool, Lucide React icons

## Project Structure

```
src/
├── components/        # All React components
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── ProgramsSection.jsx
│   ├── AdmissionsSection.jsx
│   ├── LocationSection.jsx
│   └── Footer.jsx
├── styles/           # Component CSS files
│   ├── globals.css
│   ├── Header.css
│   ├── HeroSection.css
│   ├── AboutSection.css
│   ├── ProgramsSection.css
│   ├── AdmissionsSection.css
│   ├── LocationSection.css
│   └── Footer.css
├── App.jsx          # Main app component
└── index.jsx        # Entry point
index.html          # HTML template
vite.config.js      # Vite configuration
package.json        # Dependencies (renamed from package-react.json)
```

## Installation & Setup

1. Rename `package-react.json` to `package.json`
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## CSS Architecture

All styling is vanilla CSS with CSS variables for theming:

- **Primary Color**: Emerald Green (#2d8a7d)
- **Secondary Color**: Gold (#d4a574)
- **Neutral Colors**: White, grays, blacks
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px

## Features

- Fully responsive design
- Smooth scrolling navigation
- Mobile menu toggle
- CSS Grid and Flexbox layouts
- CSS Variables for easy theming
- Icon integration with Lucide React
- Form inputs (newsletter subscription)
- Social media links
- Google Maps embed

## Browser Support

Works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid
- CSS Variables
- CSS Flexbox

## License

© 2024 Kristall Akademiyasi. All rights reserved.
