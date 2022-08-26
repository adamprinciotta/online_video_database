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
                console.log(rows)
                console.log("HELLLO THIS IS THE CONNECTION TO THE DATABSE")
            }
        })
    }


})






app.get('/data', (req, res) =>{
    console.log("get")

    
    // const databaseData = {
    //     method: "GET",
    //     //url: "http://localhost:8000/data",
    //     params: {Player1: req.query.Player1, P1P: req.query.P1P, P1M: req.query.P1M, P1A: req.query.P1A, P2P: req.query.P2P, 
    //         P2M: req.query.P2M, P2A: req.query.P2A, Player2: req.query.Player2, EventName: req.query.EventName, TO1: req.query.TO1, TO2: req.query.TO2}
    // }

    var Player1 = req.query.Player1;
    var Player2 = req.query.Player2;
    var P1P = req.query.P1P;
    var P1M = req.query.P1M;
    var P1A = req.query.P1A;
    var P2P = req.query.P2P;
    var P2M = req.query.P2M;
    var P2A = req.query.P2A;
    var TO1 = req.query.TO1;
    var TO2 = req.query.TO2;


    //If it's null, then set it the value to the same name as the column so it returns all values
    if(Player1 === ''){
        Player1 = 'Player1'
    }
    //Else, wrap the name in " " so that it is correctly read in the query
    else{
        Player1 = '"' + Player1 + '"'
    }

    if(Player2 === ''){
        Player2 = 'Player2';
    }
    else{
        Player2 = '"' + Player2 + '"'
    }

    //If they don't care which character it is, then replace it to accept any value in this column
    if(P1P === 'Any'){
        P1P = 'P1P'
    }

    //If they want no character(either a duo or a solo), then set it to null so it can search for a mid or anchor spot with null value
    // else if (P1P === 'None'){
    //     P1P = null
    // } NOT USED ANYMORE BUT SAVING JUST IN CASE

    //Otherwise, wrap the character name in quotes so it can search properly
    else{
        P1P = '"' + P1P + '"'
    }

    if(P1M === 'Any'){
        P1M = 'P1M'
    }
    else{
        P1M = '"' + P1M + '"'
    }

    if(P1A === 'Any'){
        P1A = 'P1A'
    }
    else{
        P1A = '"' + P1A + '"'
    }

    if(P2P === 'Any'){
        P2P = 'P2P'
    }
    else{
        P2P = '"' + P2P + '"'
    }

    if(P2M === 'Any'){
        P2M = 'P2M'
    }
    else{
        P2M = '"' + P2M + '"'
    }

    if(P2A === 'Any'){
        P2A = 'P2A'
    }
    else{
        P2A = '"' + P2A + '"'
    }

    

    if(TO1 === 'false' && TO2 === 'false'){
        console.log("BOTH FALSE")
        var sql = mysql.format(`SELECT * FROM sg_vod_database.vod_data WHERE Player1 = ${Player1} 
        AND Player2 = ${Player2} AND
        ( 
            ${P1P} in (P1P, P1M, P1A, P2P, P2M, P2A) AND
            ${P1M} in (P1P, P1M, P1A, P2P, P2M, P2A) AND
            ${P1A} in (P1P, P1M, P1A, P2P, P2M, P2A) AND 
            ${P2P} in (P1P, P1M, P1A, P2P, P2M, P2A) AND
            ${P2M} in (P1P, P1M, P1A, P2P, P2M, P2A) AND
            ${P2A} in (P1P, P1M, P1A, P2P, P2M, P2A)
        )`)
    }
    else if(TO1 === 'true' && TO2 === 'false'){
        console.log("TO2 FALSE")
        var sql = mysql.format(`SELECT * FROM sg_vod_database.vod_data WHERE Player1 = ${Player1} 
        AND Player2 = ${Player2} AND
        ( 
            ${P1P} = P1P AND
            ${P1M} = P1M AND
            ${P1A} = P1A AND 
            ${P2P} in (P2P, P2M, P2A) AND
            ${P2M} in (P2P, P2M, P2A) AND
            ${P2A} in (P2P, P2M, P2A)
        ) OR
        (
            ${P1P} = P2P AND
            ${P1M} = P2M AND
            ${P1A} = P2A AND 
            ${P2P} in (P1P, P1M, P1A) AND
            ${P2M} in (P1P, P1M, P1A) AND
            ${P2A} in (P1P, P1M, P1A)
        )
        
        `)
    }
    else if(TO1 === 'false' && TO2 === 'true'){
        console.log("TO1 FALSE")
        var sql = mysql.format(`SELECT * FROM sg_vod_database.vod_data WHERE Player1 = ${Player1} 
        AND Player2 = ${Player2} AND 
        ${P1P} in (P1P, P1M, P1A) AND
        ${P1M} in (P1P, P1M, P1A) AND
        ${P1A} in (P1P, P1M, P1A) AND 
        ${P2P} = P2P AND
        ${P2M} = P2M AND
        ${P2A} = P2A`)
    }
    else{
        console.log("BOTH TRUE")
        var sql = mysql.format(`SELECT * FROM sg_vod_database.vod_data WHERE Player1 = ${Player1} 
        AND Player2 = ${Player2} AND 
        ${P1P} = P1P AND
        ${P1M} = P1M AND
        ${P1A} = P1A AND 
        ${P2P} = P2P AND
        ${P2M} = P2M AND
        ${P2A} = P2A`)
    }
    
    console.log("SQL = " + sql)
    

    connection.query(sql, (err, rows) =>{
        if(err){
            throw err;
        }else{
            res.json(rows)
        }
        })

    // axios.request(databaseData).then((response) => {
    //     console.log(response.data) 
    // }).catch((error)=>{
    //     console.error(error)
    // })

}) 


app.listen(port, ()=> console.log(`Server running on port ${port}`))





// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log('server running on port' + port))

// console.log("APP is listening on port " + port);

