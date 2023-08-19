//  old way of importing
// const express = require('express') 
// const app = express()
// const morgan = require('morgan')
// var colors = require('colors');



// new way of importing
import express from 'express'
const app = express()
const PORT = 5000
import morgan from 'morgan'
import colors from 'colors'


let number1 = []
let number2 = []
let sumOf2 = []

// convert the data that is coming from the client to json to javascript object

app.use(express.json()) // for parsing application/json // middleware
// app.use(morgan("tiny"))


// function logger(req, res, next){
//      // let get the apis which are going to be hit:
//      // get the host name: 
//         // console.log("Protocol", req.protocol)
//         console.log("HostName", req.get("host"))
//                      // http://localhost:5000/sum
//         let api_path = req.protocol + "://"+req.get("host")+req.path
//         console.log("API PATH", api_path)
//         next()
        
// }

// app.use(logger)

// api
app.post("/sum",
 (req, res)=>{
    //  console.log(req.headers)
    let {n1, n2}  = req.body 
    let sum = n1 +  n2
    console.log(`The sum of ${n1} and ${n2} is ${sum}`.yellow)
    res.send(`The sum of ${n1} and ${n2} is ${sum}`)
})

app.post("/diff", 
(req, res)=>{
    //  console.log(req.headers)
    let {n1, n2}  = req.body
    let diff = n1 -  n2
    
    res.send(`The diff of ${n1} and ${n2} is ${diff}`)
})




app.listen(PORT, ()=>console.log(`Server running on port ${PORT} ...`))


// api: 
// get, post, put,patch, delete 