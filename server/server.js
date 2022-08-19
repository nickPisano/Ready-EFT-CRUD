const express = require('express');
// const mySQL = require("mysql");
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const db = mySQL.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "abc123",
//     database: "readyEft_DB"
// });

// app.post("/create", (req, res) => {
//     const name = req.body
// })

// app.listen(3001, () => {
//     console.log("Server is Running on 3001")
// });

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
  });