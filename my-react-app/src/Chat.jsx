import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <div className="chat__avatarContainer">
          <Avatar
            className="chat__image"
            alt={name}
            src={profilePic}
          />
        </div>
        <div>
          <h2 className="chat__name">{name}</h2>
          <p>{message}</p>
        </div>
        <p>{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
