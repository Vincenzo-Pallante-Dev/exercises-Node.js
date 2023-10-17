import * as fs from "node:fs";

const content = "Questo è il contenuto del mio file di testo";
const fileName = "file.txt";
const settings = { encoding: "utf-8" };

fs.writeFile(fileName, content, settings, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Il file è stato scritto con successo");
  }
});
