import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { DonutLarge } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerinfo">
          <h3>Room Name</h3>
          <p>Last seen message</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
