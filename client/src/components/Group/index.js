import { React, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:8080");

socket.on("connect", () => {
  console.log(`You did it, You are connected with id: ${socket.id}`);
});

const Group = () => {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceive] = useState("")
  const sendMessage = () => {
    socket.emit('send_message', { message } )
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceive(data.message)
    })
  }, [socket])

  return (
    <div>
      <h1>Your connected with id: {socket.id}</h1>
      <div>
        <div className="messageDiv">
          <input placeholder="Message" 
          onChange={(event) => {
            setMessage(event.target.value)
          }}/>
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
      <h1>Message: {messageReceived}</h1>
    </div>
  );
};

export default Group;
