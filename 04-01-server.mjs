// Our HTTP server sends an HTML response body.
// Replace the text in the HTML with your own message.
// Run the server and use your web browser to test your changes.

// Il nostro server HTTP invia un corpo di risposta HTML.
// Sostituisci il testo nell'HTML con il tuo messaggio.
// Esegui il server e utilizza il browser web per testare le modifiche. // TESTATO

import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end("<html><body><h1>Hello World!</h1></body></html>");
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
