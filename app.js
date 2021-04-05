const express = require("express");
const app = express();
const port = 3000
const limit = require("./limiter.js");

app.use(limit);

app.get("/", (req,res)=> {
  res.send("Hello");
})

app.listen(port, ()=>{
  console.log("App is up");
})
