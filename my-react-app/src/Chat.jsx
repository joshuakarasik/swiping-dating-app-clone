import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className="chat">
      <AccountCircleIcon
        className="chat__image"
        alt={name}
        src={profilePic}
      />
    </div>
  );
}

export default Chat;
