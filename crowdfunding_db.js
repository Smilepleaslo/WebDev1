const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"Homepage.html"));
});

app.get("/search",(req,res)=>{
    res.sendFile(path.join(__dirname,"Searchfundraiser.html"));
});

app.get("/fundraiser",(req,res)=>{
    res.sendFile(path.join(__dirname,"Fundraiser.html"));
});

app.listen(8080, ()=>{
    console.log("running in 8080");
});

// setup MySQL connection
const mysql = require('mysql2');

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

db.query('SELECT * FROM fundraiser', (err,rows) => {
    if(err) throw err;
    console.log('Data received from Db:');
    console.log(rows);
  });