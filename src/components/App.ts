import { Header } from "./Header";

export function App(child: Component) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Htmx Service Worker Router</title>
        <!-- Include HTMX 2.0 from a CDN -->
        <script src="https://unpkg.com/htmx.org@2.0.0/dist/htmx.js"></script>
        <script src="https://unpkg.com/@richardanaya/swrx@0.0.8/swrx.js"></script>
        <link href="./output.css" rel="stylesheet" />
        <style>
          /* Basic styling for demonstration */
          body {
            font-family: Arial, sans-serif;
            margin: 2rem;
          }
          #result {
            margin-top: 1rem;
            padding: 1rem;
            border: 1px solid #ccc;
          }
        </style>
      </head>
      <body>
        ${Header()}
        <main>${child}</main>
        <script>
          loadHtmxRouter("./sw.js");
        </script>
      </body>
    </html>
  `;
}
