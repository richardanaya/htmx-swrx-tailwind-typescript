import 'https://unpkg.com/@richardanaya/swrx@0.0.9/swrx.js';

function Header() {
    return html `
    <header>
      <h1>Header</h1>
    </header>
  `;
}

function App(child) {
    return html `
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

function ErrorMessage(title, message) {
    return html `<h1>${title}</h1>
    <p>${message}</p>`;
}

post("/pages/index", async (request) => {
    let counter = parseInt(await serviceStorage.getItem("counter"), 10);
    if (!counter) {
        await serviceStorage.setItem("counter", "1");
        counter = 2;
    }
    await serviceStorage.setItem("counter", (counter + 1).toString());
    const { id, otherid, wildcard } = request.params;
    try {
        // Parse the form data from the request.
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        // Validate that both fields are provided.
        if (!name || !email) {
            return App(ErrorMessage("Error", `Missing form fields. Both "name" and "email" are required.`))
                .setStatus(400)
                .buildResponse();
        }
        // Create an HTML response displaying the submitted data.
        const r = html `
      <html>
        <head>
          <title>Form Submitted</title>
        </head>
        <body>
          <h1>Form Submitted Successfully!</h1>
          ${id} ${otherid} ${wildcard}
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Counter: ${counter}</p>
        </body>
      </html>
    `.buildResponse();
        return r;
    }
    catch (error) {
        return App(ErrorMessage("Error", `Error processing form data`))
            .setStatus(500)
            .buildResponse();
    }
});
