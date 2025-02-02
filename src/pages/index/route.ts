import { ErrorMessage } from "../../components/ErrorMessage";

post("/pages/index", async (request) => {
  let counter = parseInt(await serviceStorage.getItem("counter")!, 10);
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
      return ErrorMessage(
        "Error",
        `Missing form fields. Both "name" and "email" are required.`
      )
        .setStatus(400)
        .buildResponse();
    }

    // Create an HTML response displaying the submitted data.
    return html`
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
  } catch (error) {
    return ErrorMessage("Error", `Error processing form data`)
      .setStatus(500)
      .buildResponse();
  }
});
