import {React, useContext, useState} from "react";
import { SocketContext } from "../../context/socket";

const Footer = () => {
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
        <p>Connected: {"" + isConnected}</p>
    </div>
  );
};

export default Footer;
