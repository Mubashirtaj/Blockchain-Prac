/*const crypto = require("crypto");

function Generatesha256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function compareHash(input, expectedHash) {
  return Generatesha256(input) === expectedHash;
}
const originalText = "hello world123";
const hashedText = Generatesha256(originalText);
console.log("test", compareHash("hello world123", hashedText));
*/

const crypto = require("crypto");
/*const { generateKeyPairSync } = require("crypto");
const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});
*/
const secp256k1 = require("secp256k1");
// const crypto = require("crypto");

function createwallet() {
  let privateKey;
  do {
    privateKey = crypto.randomBytes(32);
  } while (!secp256k1.privateKeyVerify(privateKey));

  const publicKey = secp256k1.publicKeyCreate(privateKey).toString("hex");

  return {
    privateKey: privateKey.toString("hex"),
    publicKey: publicKey,
  };
}

const wallet = createwallet();
console.log("wallet", wallet);

/*
const { sign, verify } = require("crypto");

let message = "Hello Mubashir kaise ho";

const signature = sign("sha256", Buffer.from(message), {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});
console.log("signature", signature.toString("hex"));


const isVerified = verify(
  "sha256",
  Buffer.from(message),
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  },
  signature
);
console.log(isVerified);*/
/*
const {
  generateKeyPairSync,
  publicEncrypt,
  privateDecrypt,
} = require("crypto");

// Generate RSA Key Pair
const { publicKey, privateKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

// let message = "Hello Mubashir kaise ho";

// Encrypt with Public Key
const encryptedMessage = publicEncrypt(publicKey, Buffer.from(message));

console.log("Encrypted:", encryptedMessage.toString("hex"));

// Decrypt with Private Key
const decryptedMessage = privateDecrypt(privateKey, encryptedMessage);

console.log("Decrypted:", decryptedMessage.toString());
*/
