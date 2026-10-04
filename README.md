# Tulas International School — Homepage Redesign

A modern homepage redesign for Tulas International School (TIS), created as part of the Frontend Developer assessment.

The goal was to keep the school's existing identity while giving the homepage a more premium, modern and interactive experience.

## Live Website

[View Live Website](YOUR_VERCEL_URL)

## GitHub Repository

[View Source Code](https://github.com/venkateshmacherla/TIS-Homepage-Redesign)

## What I Built

The homepage is designed as a single-page experience with:

- Responsive navigation with mobile menu
- Premium hero section
- About TIS section
- School statistics
- Academics section
- Campus and facilities section
- Sports section
- Parent testimonials
- Admissions call-to-action
- Footer

## Interactive Features

I implemented three interactive features from the assessment requirements:

- Scroll progress indicator
- Scroll-triggered section reveals
- Custom cursor for desktop users

The custom cursor is disabled on touch devices so it does not interfere with mobile interaction.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── animation/
│   │   ├── CustomCursor.tsx
│   │   ├── Reveal.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   └── sections/
│       ├── AboutSection.tsx
│       ├── AcademicsSection.tsx
│       ├── AdmissionsSection.tsx
│       ├── CampusSection.tsx
│       ├── HeroSection.tsx
│       ├── SportsSection.tsx
│       ├── StatsSection.tsx
│       └── TestimonialsSection.tsx
│
├── data/
├── hooks/
└── styles/
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/venkateshmacherla/TIS-Homepage-Redesign.git
```

Move into the project:

```bash
cd TIS-Homepage-Redesign
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

To check the production build locally:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Responsive Design

The homepage was designed and tested for:

- Mobile — 375px
- Tablet — 768px
- Desktop — 1280px and above

The navigation, layouts, typography and animations adapt across screen sizes.

## Design Direction

The visual direction follows a premium editorial style while retaining the TIS identity.

The main palette uses:

- Deep navy
- Warm gold
- Off-white
- Neutral grey

Large typography, generous spacing, rounded surfaces and subtle motion are used to create a more contemporary school website experience.

## Animation Approach

Framer Motion is used for the interactive parts of the page.

`Reveal` is a reusable component for scroll-triggered animations rather than repeating animation configuration throughout each section.

The custom cursor uses Framer Motion motion values and springs so pointer movement does not require React state updates for every mouse event.

## Notes

This project focuses on the frontend homepage experience. It does not include a backend, authentication system or CMS because they are outside the scope of the homepage redesign assessment.

## Author

**Venkatesh Macharla**

Frontend Developer
