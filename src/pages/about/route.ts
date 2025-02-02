get("/pages/about", async (request) => {
  const { id, otherid, wildcard } = request.params;
  return html`
    <h1>About</h1>
    <p>
      This is a simple example of a page that uses the Hyperscript syntax to
      generate HTML.
    </p>
  `.buildResponse();
});
