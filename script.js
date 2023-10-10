const crypto = require("crypto");

const lengthBytes = 16;

const randomId = crypto.randomBytes(lengthBytes);

console.log(randomId);
