import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import { IconButton } from "@mui/material";

export default function Header() {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon
          className="header__icon"
          fontSize="large"
        />
      </IconButton>
      <CloudCircleIcon
        className="header__logo"
        fontSize="large"
      />
      <IconButton>
        <ChatBubbleIcon
          className="header__icon"
          fontSize="large"
        />
      </IconButton>
    </div>
  );
}
