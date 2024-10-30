import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/comedian-ellen-degeneres-arrives-for-the-77th-annual-golden-news-photo-1727188935.jpg?crop=0.940xw:0.627xh;0.0328xw,0.0380xh&resize=640:*",
      message: "What's up!",
    },
    {
      name: "Sarah",
      image:
        "https://pyxis.nymag.com/v1/imgs/a90/eb9/e35cd56b7ca7f8dc6d41defbcf1c41453f-FINALSarah.2x.rvertical.w570.jpg",
      message: "How are you doing?",
    },
    {
      message: "I'm good, thanks!",
    },
  ]);

  return (
    <div className="chatScreen">
      <h2>Hi!</h2>
      <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/8/14</p>
      {messages.map((message, index) =>
        message.name ? (
          <div
            key={index}
            className="chatScreen__message"
          >
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div
            key={index}
            className="chatScreen__message"
          >
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
    </div>
  );
}

export default ChatScreen;
