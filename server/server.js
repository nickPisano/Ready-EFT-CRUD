const express = require("express");
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/create", (req, res) => {
//     const name = req.body
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
