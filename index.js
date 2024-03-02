const express = require("express");
const prab = express();
const port = 8000;

prab.get("/", (req, res) => {
  res.send("document is ready 💻");
});

prab.listen(port, () => {
  console.log("server is 🏃");
});
