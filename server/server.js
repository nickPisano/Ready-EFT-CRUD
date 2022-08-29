const express = require("express");
const app = express();
const http = require('http');
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;
const cors = require("cors")
app.use(cors())


const io = require("socket.io")(8080, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", socket => {
  console.log(socket.id);
  socket.on("send_message", (data) => {
    console.log(data);
    socket.broadcast.emit("receive_message", data);
  });
});

// app.post("/create", (req, res) => {
//     const name = req.body
// })

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
