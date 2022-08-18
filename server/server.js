const express = require('express');
const app = express();
const mySQL = require("mysql")

const db = mySQL.createConnectione({
    user: "root",
    host: "localhost",
    password: "abc123",
    database: "readyEft_DB"
});

app.post("/create", (req, res) => {
    const name = req.body
})

app.listen(3001, () => {
    console.log("Server is Running on 3001")
});