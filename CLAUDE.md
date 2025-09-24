# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based Powerball lottery number generator web application built with Vite, styled with Tailwind CSS. The app generates Powerball number sets: 5 unique main numbers (1-69) plus 1 Powerball number (1-26). Players can generate up to 10 sets of numbers on a single ticket.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Architecture

**Frontend Stack:**
- React 18 with functional components and hooks
- Vite for build tooling and development server
- Tailwind CSS for styling with utility classes
- ESLint for code linting

**Project Structure:**
- `src/main.jsx` - Application entry point with React root mounting
- `src/App.jsx` - Main application component containing lottery logic
- `src/index.css` - Global styles with Tailwind imports
- `index.html` - HTML template
- `vite.config.js` - Vite configuration with React plugin
- `tailwind.config.js` - Tailwind CSS configuration

**Key Application Logic:**
- Single-page application with one main component (`App.jsx`)
- State management using React's `useState` hook for number sets and loading state
- Powerball number generation: 5 unique main numbers (1-69) + 1 Powerball (1-26)
- Support for generating multiple sets (up to 10 per ticket)
- Main numbers are sorted in ascending order after generation
- 1-second delay simulation for generation process

**Styling Approach:**
- Utility-first CSS with Tailwind classes
- Gradient backgrounds and hover effects
- Responsive design with mobile-first approach
- Component styling is inline using Tailwind classes