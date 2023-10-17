const figlet = require("figlet");

const text = "Vincenzo Pallante";

figlet(text, (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});
