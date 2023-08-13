//  old way of importing
// const express = require('express') 
// const app = express()



// new way of importing
import express from 'express'
const app = express()
const PORT = 5000


let number1 = []
let number2 = []
let sumOf2 = []

// convert the data that is coming from the client to json to javascript object

app.use(express.json()) // for parsing application/json // middleware

// api
app.post("/sum", (req, res)=>{
    //  console.log(req.headers)
    let {n1, n2}  = req.headers
    let sum = +n1 +  +n2
     number1.push(n1)
     number2.push(n2)
     sumOf2.push(sum)
     console.log(number1, number2, sumOf2)
    res.send(`The sum of ${n1} and ${n2} is ${sum}`)
})


app.listen(PORT, ()=>console.log(`Server running on port ${PORT} ...`))


// api: 
// get, post, put,patch, delete 