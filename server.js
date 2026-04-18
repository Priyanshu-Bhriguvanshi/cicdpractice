const express = require("express");
const app = express()


app.get("/check", (req, res)=>{
    res.send("Hello Priyanshu Singh how are you ?  the current version 1.0");
})
app.listen(3000, (req, res)=>{
    console.log("Server listen on port 3000");
})