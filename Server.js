const port = 8000

const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')

const app = express()
app.use(cors())


const mysql = require('mysql');

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
        connection.query('SELECT * FROM sg_vod_database.vod_data', (err, rows) =>{
            if(err){
                throw err;
            }else{
                //console.log(rows)
            }
        })
    }
})

app.get('/data', (req, res) =>{
    console.log("get")
    const databaseData = {
        method: "GET",
        url: "http://localhost:8000/data",
        params: {Player1: req.query.Player1, P1P: req.query.P1P, P1M: req.query.P1M, P1A: req.query.P1A, P2P: req.query.P2P, P2M: req.query.P2M, P2A: req.query.P2A, Player2: req.query.Player2, EventName: req.query.EventName, Link: req.query.EventName, VODDate: req.query.VODDate}
    }

    var Player1 = req.query.Player1;
    if(req.query.Player1 === ''){
        Player1 = 'Player1';
        //var Player1 = " Player1 = " + "'" + req.query.Player1 + "'";
    }

    var sql = mysql.format("SELECT * FROM sg_vod_database.vod_data WHERE Player1 = ?", [Player1])
    //console.log("THIS IS PLAYER 1: " + Player1)
    //console.log(sql)
    //connection.query('SELECT * FROM sg_vod_database.vod_data WHERE' + Player1 + ' ORDER BY VODDate', (err, rows) =>{
        connection.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }else{
            res.json(rows)
        }
    })

    axios.request(databaseData).then((response) => {
        console.log(response.data) 
    }).catch((error)=>{
        console.error(error)
    })
}) 

app.listen(port, ()=> console.log(`Server running on port ${port}`))





// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log('server running on port' + port))

// console.log("APP is listening on port " + port);