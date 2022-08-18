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
            }
        })
    }
})

app.get('/data', (req, res) =>{
    const databaseData = {
        method: "GET",
        url: "http://localhost:8000/data"
    }

    connection.query('SELECT * FROM sg_vod_database.vod_data', (err, rows) =>{
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