const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/homepage", (req, res) => {
    res.sendFile(path.join(__dirname, "Homepage.html"));
});

