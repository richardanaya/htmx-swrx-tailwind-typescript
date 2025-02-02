post("/pages/index", async (request) => {
  // Retrieve and update the counter value in a cleaner way.
  const storedValue = await serviceStorage.getItem("counter");
  let counter = storedValue ? parseInt(storedValue, 10) : 0;
  counter++;
  await serviceStorage.setItem("counter", counter.toString());

  try {
    // Parse the form data from the request.
    const formData = await request.formData();
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();

    // Validate that both fields are provided.
    if (!name || !email) {
      return html`
        <html>
          <head>
            <title>Error</title>
            <link rel="stylesheet" href="/path/to/shadcn.css" />
          </head>
          <body class="bg-gray-100 font-sans">
            <div class="container mx-auto p-4">
              <div class="alert alert-error p-4 rounded-md shadow-md">
                <h1 class="text-xl font-bold mb-2">Error</h1>
                <p>
                  Missing form fields. Both "name" and "email" are required.
                </p>
              </div>
            </div>
          </body>
        </html>
      `
        .setStatus(400)
        .buildResponse();
    }

    // Create an HTML response displaying the submitted data with shadcn styling.
    return html`
      <html>
        <head>
          <title>Form Submitted</title>
          <link rel="stylesheet" href="/path/to/shadcn.css" />
        </head>
        <body class="bg-gray-100 font-sans">
          <div class="container mx-auto p-4">
            <div class="card bg-white shadow-lg rounded-md p-6">
              <h1 class="text-2xl font-bold mb-4">
                Form Submitted Successfully!
              </h1>
              <p class="mb-2"><strong>Name:</strong> ${name}</p>
              <p class="mb-2"><strong>Email:</strong> ${email}</p>
              <p class="mb-2"><strong>Counter:</strong> ${counter}</p>
            </div>
          </div>
        </body>
      </html>
    `.buildResponse();
  } catch (error) {
    return html`
      <html>
        <head>
          <title>Error</title>
          <link rel="stylesheet" href="/path/to/shadcn.css" />
        </head>
        <body class="bg-gray-100 font-sans">
          <div class="container mx-auto p-4">
            <div class="alert alert-error p-4 rounded-md shadow-md">
              <h1 class="text-xl font-bold mb-2">Error Processing Form Data</h1>
              <p>${(error as Error).message}</p>
            </div>
          </div>
        </body>
      </html>
    `
      .setStatus(500)
      .buildResponse();
  }
});
