# Ömer Doğan - Portfolio Website

Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🌐 **Multi-language Support** - Turkish and English
- 🎨 **Modern Dark Theme** - Beautiful dark UI with glassmorphism effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🎯 **SEO Friendly** - Optimized meta tags and structure
- 📝 **Blog Section** - Share your thoughts and tutorials
- 💼 **CV Download** - Download CV in your preferred language

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router
- **i18n**: React i18next
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── portfolio/    # Portfolio-specific components
│   └── ui/           # shadcn/ui components
├── pages/            # Page components
├── i18n/             # Internationalization
│   └── locales/      # Translation files
├── assets/           # Images and static assets
├── CV/               # CV PDF files
└── lib/              # Utility functions
```

## Customization

### Update Personal Information

1. Edit translation files in `src/i18n/locales/`
2. Update CV files in `src/CV/`
3. Modify components in `src/components/portfolio/`

### Change Theme Colors

Edit color variables in `src/index.css`

## License

MIT
