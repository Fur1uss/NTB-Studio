# AI Coding Agent Instructions - NTB Studio Landing

## Project Overview
This is a Next.js 16 landing page for NTB Studio featuring interactive 3D components and section-based architecture. Uses modern React patterns with CSS modules and 3D physics simulations.

## Architecture & Patterns

### Component Structure
- **Section-based**: Main sections are in `components/sections/` (Hero, Escogenos, Nosotros)
- **Reusable UI**: Common components in `components/ui/` (Button, Lanyard, BubbleNav)
- **Co-located CSS**: Each component has its `.css` file in the same directory
- **Mixed languages**: Spanish content with English component names

### Key Technologies
- **Next.js 16** with React 19 (React Compiler enabled)
- **Three.js ecosystem**: `@react-three/fiber`, `@react-three/drei`, `@react-three/rapier` for 3D/physics
- **Styling**: Vanilla CSS with CSS Grid/Flexbox (no Tailwind actively used despite presence)
- **Animations**: GSAP + Framer Motion for complex interactions
- **Package manager**: pnpm

## Development Workflow

### Commands
```bash
pnpm dev        # Development server (preferred over npm/yarn)
pnpm build      # Production build
pnpm lint       # ESLint checking
```

### File Organization
```
app/
├── layout.jsx     # Root layout with K2D font
├── page.jsx       # Main page composition
└── globals.css    # Minimal global styles

components/
├── sections/      # Page sections (Hero, Escogenos, Nosotros)
├── ui/           # Reusable components (Button, Lanyard, BubbleNav)
└── textCarousel/ # Specialized components
```

## Component Conventions

### Section Components
- Export default function with PascalCase name
- Import co-located CSS as `import "./ComponentName.css"`
- Use semantic HTML elements (`<header>`, `<section>`, etc.)
- Grid-based layouts preferred over Flexbox for complex structures

### UI Components
- Flexible prop patterns: `<Button>Text</Button>` or `<Button label="Text" />`
- Forward all props with `{...props}` for extensibility
- Document usage patterns in comments (see `Button.jsx`)

### 3D Components (Lanyard pattern)
- Heavy use of `@react-three/fiber` Canvas and physics
- Responsive configurations based on viewport width breakpoints
- `useEffect` + `useState` for viewport tracking
- Complex prop interfaces for positioning and scene control

## Styling Patterns

### CSS Architecture
- **Component-scoped**: Each component imports its own CSS file
- **CSS Grid primary**: Complex layouts use CSS Grid over Flexbox
- **Responsive-first**: `clamp()`, `vw` units, and media queries for fluid scaling
- **Z-index layering**: Explicit z-index management for overlays (lanyard: 1, interactive: 2)

### Layout Strategies
```css
/* Preferred grid pattern from Hero.css */
display: grid;
grid-template-rows: 1fr 20vh; /* content + carousel */

/* Responsive font scaling */
font-size: clamp(1.4rem, 3.5vw + 0.5rem, 2.4rem);
```

## Integration Points

### 3D Physics Setup
- Physics simulation via `@react-three/rapier`
- Custom rope/joint configurations for lanyard interactions
- Canvas overlay patterns with `pointer-events` management

### Asset Management
- 3D models in `/public/lanyard/` directory
- SVG assets in `/public/` root
- `useGLTF.preload()` and `useTexture.preload()` for performance

### Font Strategy
- Google Fonts via `next/font` (K2D family)
- No FOUT with `display: "swap"`
- Applied at root layout level

## Common Patterns

### Responsive Behavior
- Mobile-first hiding of complex 3D components
- Viewport-based component configuration
- Breakpoints: 640px (mobile), 768px (tablet), 1024px (desktop)

### State Management
- Local component state with hooks
- No global state management detected
- Physics state managed by Rapier

### Error Handling
- `suppressHydrationWarning={true}` in layout for SSR compatibility
- ESLint disabled for specific Three.js patterns (`/* eslint-disable react/no-unknown-property */`)

## When Adding Features
- Co-locate CSS files with components
- Use semantic HTML structure
- Consider mobile responsiveness from the start
- Test 3D components across different viewport sizes
- Follow existing prop forwarding patterns for UI components