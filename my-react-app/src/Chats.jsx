import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ellen"
        message="Can't believe that..."
        timestamp="40 seconds ago"
        profilePic="https://hips.hearstapps.com/hmg-prod/images/comedian-ellen-degeneres-arrives-for-the-77th-annual-golden-news-photo-1727188935.jpg?crop=0.940xw:0.627xh;0.0328xw,0.0380xh&resize=640:*"
      />
      <Chat
        name="Sarah"
        message="So how are you?😄"
        timestamp="2 days ago"
        profilePic="https://pyxis.nymag.com/v1/imgs/a90/eb9/e35cd56b7ca7f8dc6d41defbcf1c41453f-FINALSarah.2x.rvertical.w570.jpg"
      />
      <Chat
        name="Mark"
        message="Bruh that's out of pocket"
        timestamp="4 days ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1280px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      />
      <Chat
        name="John"
        message="LMAO 💀"
        timestamp="1 week ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/John_Legend_2019_by_Glenn_Francis_%28cropped%29.jpg/862px-John_Legend_2019_by_Glenn_Francis_%28cropped%29.jpg"
      />
    </div>
  );
}

export default Chats;
