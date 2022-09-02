import { React, useContext, useEffect, useState } from "react";
import {SocketContext} from '../context/socket';
import Chatroom from "../components/Chatroom";


const Group = () => {
  const socket = useContext(SocketContext);
  const [isConnected, setIsConnected] = useState(socket.connected);
  
  socket.on("connect", () => {
    setIsConnected(true);
  });

  socket.on("disconnect", () => {
    setIsConnected(false);
  });

  return (
    <div>
      <div>
      <Chatroom />
      </div>
      <p>Connected: {"" + isConnected}</p>
    </div>
  );
};

export default Group;
