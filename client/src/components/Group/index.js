import { React, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:8080");

socket.on("connect", () => {
  console.log(`You did it, You are connected with id: ${socket.id}`);
});

const Group = () => {
  // Room State
  const [room, setRoom] = useState("");

  // Sending Messages to Other users Realtime
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceive] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceive(data.message);
    });
  }, [socket]);

  return (
    <div className="chatRoom">
      <h2>Your connected with id: {socket.id}</h2>
      <div>
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}> Join Room</button>
        <div className="messageDiv">
          <input
            placeholder="Message"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
      <h1>Message: {messageReceived}</h1>
    </div>
  );
};

export default Group;
