# HTMX Service Worker Router Example

This project is an example application demonstrating the power of using HTMX, SWRX (service worker router), Rollup, and Tailwind CSS together. It showcases how these technologies can be combined to create a modern web application with dynamic content loading, service worker routing, and responsive design.

## Project Structure

- **src/components**: Contains reusable UI components like `Header` and `ErrorMessage`.
- **src/pages**: Includes route handlers for different pages, such as the form submission logic in `index/route.ts`.
- **src**: The main entry point for the application, including the service worker setup in `sw.ts` and the main HTML structure in `index.html`.
- **dist**: The output directory for compiled assets.

## Key Technologies

- **HTMX**: A library that allows you to access modern browser features directly from HTML, enabling dynamic content updates without full page reloads.
- **SWRX**: A service worker router that helps manage client-side routing and caching strategies, enhancing performance and offline capabilities.
- **Rollup**: A module bundler used to compile and optimize the JavaScript code for production.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs without leaving your HTML.

## Getting Started

1. **Install Dependencies**: Ensure you have Node.js installed, then run `npm install` to install project dependencies.
2. **Build the Project**: Use `npm run build` to compile the assets using Rollup.
3. **Serve the Application**: You can use a local server to serve the `dist` directory and view the application in your browser.

## Usage

- The application demonstrates a simple form submission process using HTMX for dynamic updates.
- The service worker, configured with SWRX, handles routing and caching for improved performance.
- Tailwind CSS is used for styling, providing a clean and responsive design.

## Conclusion

This example project serves as a starting point for building modern web applications with HTMX, SWRX, Rollup, and Tailwind CSS. It highlights the capabilities of these technologies and how they can be integrated to create efficient and responsive web experiences.
