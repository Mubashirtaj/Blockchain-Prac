const crypto = require("crypto");

function Generatesha256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function compareHash(input, expectedHash) {
  return Generatesha256(input) === expectedHash;
}
const originalText = "hello world123";
const hashedText = Generatesha256(originalText);
console.log("test", compareHash("hello world123", hashedText));
