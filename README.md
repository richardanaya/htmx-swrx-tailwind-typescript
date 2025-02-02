# HTMX Service Worker Router Example

This project is an example application demonstrating the power of using HTMX, [SWRX (service worker router)](https://github.com/richardanaya/swrx/), Rollup, and Tailwind CSS together. It showcases how these technologies can be combined to create a modern web application with dynamic content loading, service worker routing, and responsive design.

## Project Structure

- **src/components**: Contains reusable UI components in functions that return templated HTML.
- **src/pages**: Includes route handlers for different pages, and also handlers of submission of form data.
- **src/sw.ts**: The main entry point for the application that loads the router in SWRX and the routes.
- **dist**: The output directory for compiled assets.

## Key Technologies

- **HTMX**: A library that allows you to access modern browser features directly from HTML, enabling dynamic content updates without full page reloads.
- **SWRX**: A service worker router that helps manage client-side routing and caching strategies, enhancing performance and offline capabilities.
- **Rollup**: A module bundler used to compile and optimize the JavaScript code for production.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs without leaving your HTML.

## Getting Started

1. **Install Dependencies**: Ensure you have Node.js installed, then run `npm install` to install project dependencies.
2. **Run the Project**: Use `npm run dev` to compile the assets using Rollup.
