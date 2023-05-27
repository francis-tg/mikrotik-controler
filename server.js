const express = require("express")
const app = express()
const http = require("http")



http.createServer(app).listen(8000, () => {
    console.log("server run on port 8000")
})