import { React, useContext, useEffect, useState } from "react";
import {SocketContext} from '../context/socket';
import Chatroom from "../components/Chatroom";


const Group = () => {
  const socket = useContext(SocketContext);

  return (
    <div>
      <div>
      <Chatroom />
      </div>
    </div>
  );
};

export default Group;
