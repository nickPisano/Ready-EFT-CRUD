const express = require("express");
const app = express();
const http = require("http");
const sequelize = require("./config/connection");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(8080, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  // Server Logs when user joins io
  console.log(`User Connected: ${socket.id}`);

  // Sends a status of current room
  socket.on("join_room", (data) => {
    console.log(`Socket id: ${socket.id} joined room: ${data}`);
    socket.join(data);
  });

  //Send message to specific room
  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`MYsql is listening on ${PORT}`));
});
