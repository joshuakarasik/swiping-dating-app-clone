import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import flame from "./flame.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Only show the back button on the "/chats" route
  const showBackButton = location.pathname === "/chats";

  return (
    <div className="Header">
      {showBackButton ? (
        <IconButton onClick={() => navigate("/")}>
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon
            className="header__icon"
            fontSize="large"
          />
        </IconButton>
      )}
      <Link to="/">
        <img
          src={flame}
          alt="logo"
        />
      </Link>
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
