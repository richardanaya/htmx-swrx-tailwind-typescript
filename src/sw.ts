import "https://unpkg.com/@richardanaya/swrx@0.0.13/swrx.js";
import "./pages/index/route.ts";

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
