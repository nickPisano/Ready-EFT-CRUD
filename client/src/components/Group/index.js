import { React, useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:8080");

socket.on("connect", () => {
  console.log(`You did it, You are connected with id: ${socket.id}`);
});

const Group = () => {
  // Callsign State
  const [callSign, setCallSign] = useState("");

  // Room State
  const [room, setRoom] = useState("");

  // Sending Messages to Other users Realtime
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceive] = useState("");

  // checks if user is connected
  const [isConnected, setIsConnected] = useState(socket.connected);

  const setCall = () => {
    if (callSign !== "") {
      socket.emit("set_callsign", callSign);
    }
  };

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
    socket.emit("send_message", { message, room, callSign });
    const div = document.createElement("div");
    const text = document.createElement("p");
    const currentTime = document.createElement("span");
    const name = document.createElement("span");
    const img = document.createElement("img");
    const today = new Date();
    img.src = "defaultAvatar.jpg";
    img.style = "width:100%;"
    img.alt = "Avatar";
    currentTime.textContent =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    text.textContent = message;
    name.textContent = callSign;
    currentTime.className = "time-right";
    name.className = "time-left";
    div.className = "container darker";
    div.append(text);
    div.append(currentTime);
    div.append(name);
    div.append(img);
    document.getElementById("message-container").append(div);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceive(data.message);
      displayMessage(data.message, data.callSign);
    });
  }, [socket]);

  const displayMessage = (msg, sign) => {
    const div = document.createElement("div");
    const text = document.createElement("p");
    const currentTime = document.createElement("span");
    const name = document.createElement("span");
    const img = document.createElement("img");
    const today = new Date();
    img.src = "defaultAvatar.jpg";
    img.style = "width:100%;"
    img.alt = "Avatar";
    currentTime.textContent =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    text.textContent = msg;
    name.textContent = sign;
    currentTime.className = "time-left";
    name.className = "time-right";
    img.className = "right";
    div.className = "container";
    div.append(text);
    div.append(currentTime);
    div.append(name);
    div.append(img);
    document.getElementById("message-container").append(div);
  };

  return (
    <div className="chatRoom">
      <h2>Your connected with id: {socket.id}</h2>
      <div>
        <div>
          <div>
            <input
              placeholder="Callsign"
              onChange={(event) => {
                setCallSign(event.target.value);
              }}
            />
            <button onClick={setCall}>Set Callsign</button>
          </div>
          <input
            placeholder="Room Number"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
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
      <h2>Chat Messages</h2>
      <div id="message-container"></div>
      <p>Connected: {"" + isConnected}</p>
    </div>
  );
};

export default Group;
