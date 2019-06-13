const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const auth = require("./authMiddleware");
const router = jsonServer.router("serverdata.json");

const enableHttps = false;

const ssloptions = {};

if (enableHttps) {
}

const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/", express.static("./dist/mySportStore"));

app.listen(80, () => console.log("HTTP Server running on port 80"));
