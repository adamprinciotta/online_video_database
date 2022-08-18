const e = require('express');
const express = require('express');
const mysql = require('mysql');
const { default: VODDisplay } = require('../src/VODDisplay');

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
        res.json('hi')
        console.log("success", rows)
        setData(rows)
    }
})

var databaseData = []

function setData(value){
    databaseData = value;
    console.log("success", value);
}



const port = process.env.PORT || 5000;

app.listen(port);

console.log("APP is listening on port " + port);