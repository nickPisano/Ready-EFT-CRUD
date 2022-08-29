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
    
    // checks if user is connected
    const [isConnected, setIsConnected] = useState(socket.connected);
    
    const joinRoom = () => {
    if (room !== "") {
        socket.emit("join_room", room);
    }
};

  socket.on("connect", () => {
      setIsConnected(true);
    });
    
  socket.on("disconnect", () => {
    setIsConnected(false);
  });
  
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageReceive(data.message);
        displayMessage(data.message)
    });
}, [socket]);

const displayMessage = (data) => {
    console.log("display message function called");
    console.log(data);
    const div = document.createElement("div")
    div.textContent = data;
    document.getElementById("message-container").append(div)
}

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
      <div id="message-container"></div>
      <p>Connected: {"" + isConnected}</p>
    </div>
  );
};

export default Group;
