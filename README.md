# Wii Portfolio

An interactive portfolio website inspired by the Nintendo Wii console interface. This project presents your work as "channels" in a nostalgic Wii-style interface with smooth animations and interactive elements.

## Demo

![Wii Portfolio Demo](./public/videos/demo.mp4)

## Features

- **Wii Channel Grid**: Display your projects as interactive channels in a 4-column grid layout
- **Video Previews**: Each channel can have an associated video preview that plays on hover
- **Interactive Dock**: Bottom dock with clock display and navigation buttons
- **Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions
- **Email Contact Form**: Integrated contact form accessible from the dock
- **Responsive Design**: Built with Tailwind CSS for modern, responsive styling
- **Sound Effects**: Audio feedback for user interactions

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Day.js** - Date and time manipulation
- **React Icons** - Icon library

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd wii
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

```
wii/
├── src/
│   ├── components/
│   │   ├── Channel.tsx          # Main channel grid component
│   │   ├── ChannelPreview.tsx   # Individual channel preview
│   │   ├── DockBackground.tsx  # Dock visual background
│   │   ├── DockButtons.tsx      # Dock navigation buttons
│   │   ├── DockClock.tsx        # Clock display component
│   │   ├── EmailForm.tsx        # Contact form modal
│   │   ├── Intro.tsx            # Intro animation
│   │   └── WiiDock.tsx          # Main dock container
│   ├── assets/
│   │   └── fonts/               # Custom fonts
│   ├── App.tsx                  # Main app component
│   ├── Data.tsx                 # Channel data configuration
│   ├── index.css                # Global styles
│   └── main.tsx                 # Application entry point
├── public/                      # Static assets (videos, sounds, etc.)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Configuration

### Adding Your Projects

Edit `src/Data.tsx` to add or modify your project channels:

```typescript
export const channePreview = [
  {
    id: 1,
    title: "Your Project Name",
    link: "https://your-project-url.com",
    video: "/videos/your-video.mp4",
  },
  // Add more projects...
];
```

### Customizing Videos

Place your video previews in the `public/videos/` directory and reference them in the channel data. Videos should be in a format supported by HTML5 video elements (MP4 recommended).

### Adding Sound Effects

Place audio files in the `public/sounds/` directory. The project currently uses `video-close.mp3` for channel closing interactions.

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.
