import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

export default function Header() {
  return (
    <div className="Header">
      <PersonIcon />
      <h2>I am a Header</h2>
      <ChatBubbleIcon />
    </div>
  );
}
