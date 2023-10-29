# NodeJS Part 2 :: Exercise 2 :: CRUD with dummy database

## Do

- Write a router with the following routes:
  - `GET /api/planets`: return all planets (JSON) with `200`
  - `GET /api/planets/:id`: return a planet (JSON) by id with `200`
  - `POST /api/planets`: create a planet, return only `201` code and a success JSON with key `msg`
    - Make sure every planet is created with `id` and `name`.
  - `PUT /api/planets/:id`: update a planet by id, return only `200` code and a success JSON with key `msg`
  - `DELETE /api/planets/:id`: delete a planet by id, return only `200` code and a success JSON with key `msg`
- Validate planet fields where appropriate.

## Use

- The dummy database of planets from the previous exercise.
- `joi` library for validation.

## Check

- Use Postman to test the routes.
- Paths `POST` and `PUT` should receive data in JSON format (`req.body`).

## Fare

- Scrivere un router con i seguenti percorsi:
  - `GET /api/planets`: restituisce tutti i pianeti (JSON) con `200`
  - `GET /api/planets/:id`: restituisce un pianeta (JSON) tramite id con `200`
  - `POST /api/planets`: crea un pianeta, restituisce solo il codice `201` e un JSON di successo con la chiave `msg`
    - Assicurati che ogni pianeta sia creato con "id" e "nome".
  - `PUT /api/planets/:id`: aggiorna un pianeta tramite id, restituisce solo il codice `200` e un JSON di successo con la chiave `msg`
  - `DELETE /api/planets/:id`: elimina un pianeta tramite id, restituisce solo il codice `200` e un JSON di successo con la chiave `msg`
- Convalidare i campi planetari ove appropriato.

## Utilizzo

- Il database fittizio dei pianeti dell'esercizio precedente.
- Libreria "joi" per la convalida.

## Controllo

- Usa Postman per testare i percorsi.
- I percorsi "POST" e "PUT" dovrebbero ricevere i dati in formato JSON (`req.body`).
