const express = require("express");
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;

const io = require('socket.io')(8080,  {
  cors: {
      origin: ['http://localhost:3000']
}
})
const app = express();

// app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on('connection', socket => {
  console.log(socket.id)
})

// app.post("/create", (req, res) => {
//     const name = req.body
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
