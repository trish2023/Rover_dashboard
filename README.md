# Rover Dashboard

A real-time monitoring and control dashboard for rover operations, built with Next.js and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-teal)

## Features

- **Navigation Control Center** - Interactive map view with real-time position tracking, elevation, speed, and directional controls
- **System Status** - Live monitoring of battery level, signal strength, and temperature
- **Mission Control** - Switch between Science, Delivery, and Equipment Servicing missions
- **Team Communication** - View operator status and request runners
- **Camera Feeds** - Multiple camera views (Main, Arm, Navigation) with pan/zoom controls
- **Science Data** - Soil moisture, temperature, pH, and mineral analysis
- **Environmental Monitoring** - Wind speed, temperature, and dust level readings

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rover-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
rover-dashboard/
├── app/
│   ├── globals.css      # Global styles & Tailwind directives
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main dashboard page
├── components/
│   └── ui/
│       ├── alert.tsx    # Alert component
│       └── card.tsx     # Card components
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── package.json
```


