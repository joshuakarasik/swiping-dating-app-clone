import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CloudCircleIcon from "@mui/icons-material/CloudCircle";
import { IconButton } from "@mui/material";
import flame from "./flame.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon
          className="header__icon"
          fontSize="large"
        />
      </IconButton>
      <img
        src={flame}
        alt="logo"
      />
      <Link to="/chats">
        <IconButton>
          <ChatBubbleIcon
            className="header__icon"
            fontSize="large"
          />
        </IconButton>
      </Link>
    </div>
  );
}
