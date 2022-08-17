const e = require('express');
const express = require('express');
const mysql = require('mysql');

const app = express();

app.get('/', (req, res) =>{
    console.log("hello world");
})

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "sg_vod_database",
    port: "3306"
});

connection.connect((err) =>{
    if(err){
        throw err
    }else{
        console.log("connected");
    }
})

connection.query('SELECT * FROM sg_vod_database.vod_data', (err, rows) =>{
    if(err){
        throw err;
    }else{
        console.log("success", rows);
    }
})

const port = process.env.PORT || 5000;

app.listen(port);

console.log("APP is listening on port " + port);