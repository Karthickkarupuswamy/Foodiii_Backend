const express = require("express")
const cors=require("cors")
const server= express();
server.use(cors())
const port = 7000;
server.use(express.json())

const mongoose = require("mongoose")
const router = require("./router")

mongoose.connect("mongodb+srv://karthick:karthick33@bulbul.57vu6qe.mongodb.net/",{useNewUrlParser: true})
.then(()=>{console.log("database conncetd")})
.catch(err =>console.log(err))

server.use('/', router)

server.listen(port,()=>{
    console.log(`You're server On Fire  http://localhost:${port}`);
});