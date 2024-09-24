const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const mysql = require("mysql2");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//setting up mySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Apocalypse_07',
    database: 'crowdfunding_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

app.get("/api/homepage", (req, res) => {
    res.sendFile(path.join(__dirname, "Homepage.html"));
});

app.get("/api/searchfundraiser", (req, res) => {
    res.sendFile(path.join(__dirname, "searchfundraiser.html"));
});

app.get("/api/fundraiser", (req, res) => {
    res.sendFile(path.join(__dirname, "fundraiser.html"));
});