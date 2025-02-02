import 'https://unpkg.com/@richardanaya/swrx@0.0.13/swrx.js';

function ErrorMessage(title, message) {
    return html `<h1>${title}</h1>
    <p>${message}</p>`;
}

get("/pages/index", async (request) => {
    const { id, otherid, wildcard } = request.params;
    return html `
    <h1>Form Examples!!!</h1>
    <form hx-post="/pages/index" hx-target="main">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <button type="submit">Submit</button>
    </form>
  `.buildResponse();
});
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
            return ErrorMessage("Error", `Missing form fields. Both "name" and "email" are required.`)
                .setStatus(400)
                .buildResponse();
        }
        // Create an HTML response displaying the submitted data.
        return html `
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
    }
    catch (error) {
        return ErrorMessage("Error", `Error processing form data`)
            .setStatus(500)
            .buildResponse();
    }
});

clients
    .matchAll({ includeUncontrolled: true, type: "window" })
    .then((clients) => {
    for (const client of clients) {
        // Post a message to each client
        client.postMessage({
            type: "service-worker-activated",
        });
    }
})
    .catch((error) => {
    console.error("Error sending message to clients:", error);
});
