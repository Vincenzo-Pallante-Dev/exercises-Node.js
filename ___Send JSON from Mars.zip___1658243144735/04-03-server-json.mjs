// Il nostro server HTTP ora invia il corpo della risposta JSON.
// Cambia la posizione nella risposta a "Marte".
//  Esegui il server ed effettua una richiesta con curl utilizzando il flag --verbose.
//   Qual è il valore dell'intestazione della risposta Content-Length?
// risposta --> < Content-Length: 19

import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
