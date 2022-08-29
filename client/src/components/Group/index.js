import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080")

socket.on("connect", () => {
    console.log(`You did it, You are connected with id: ${socket.id}`)
})

const Group = () => {
  return (
    <div>
        <h1>Your connected with id: {socket.id}</h1>
    </div>
  );
};

export default Group;