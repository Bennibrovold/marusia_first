const express = require("express");
const server = express();
const bodyParser = require("body-parser");

const createEchoResponse = require("./create-echo-response.js");

server
  .use(bodyParser.json())
  .post("/webhook", (req, res) => res.json(createEchoResponse(req.body)))
  .listen(3000, () => console.log("Сервер запущен на порту 3000"));
