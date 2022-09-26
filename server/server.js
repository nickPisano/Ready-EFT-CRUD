const express = require("express");
const app = express();
const SQLPORT = process.env.SQLPORT || 8080;
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const http = require("http");
const sequelize = require("./config/connection");
const socketio = require("socket.io");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users.js");

const router = require("./router");
const { callbackify } = require("util");
const httpServer = http.createServer(app);
const io = socketio(httpServer, {
  cors: "localhost:3000",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


httpServer.listen(PORT, () =>
console.log(`server has started on port ${PORT}`)
);

io.on("connection", (socket) => {
  // Server Logs when user joins io
  console.log(`User Connected: ${socket.id}`);
  // Sends a status of current room
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    
    if (error) return callback(error);
    
    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room: ${user.room}`,
    });
    socket.broadcast
    .to(user.room)
    .emit("message", { user: "admin", text: `${user.name}, has joined!` });
    
    socket.join(user.room);
    
    callback();
  });
  
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id)

    io.to(user.room).emit('message' , { user: user.name, text: message});

    callback();
  });
  
  socket.on("disconnect", () => {
    console.log(`User Disconnected: ${socket.id}`);
  });
});

app.use(router);
//Send message to specific room

sequelize.sync({ force: false }).then(() => {
  app.listen(SQLPORT, () => console.log(`MYsql is listening on ${SQLPORT}`));
});
