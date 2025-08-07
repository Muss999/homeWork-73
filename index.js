const express = require("express");
const Vigenere = require("caesar-salad").Vigenere;

const PASSWORD = "password";

const app = express();
const port = 8000;

app.get("/:text", (req, res) => {
    return res.send(req.params.text);
});

app.get("/encode/:text", (req, res) => {
    return res.send(Vigenere.Cipher(PASSWORD).crypt(req.params.text));
});

app.get("/decode/:text", (req, res) => {
    return res.send(Vigenere.Decipher(PASSWORD).crypt(req.params.text));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
