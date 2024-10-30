import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Header backButton="/" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
          <Route
            path="/chats"
            element={<Chats />}
          ></Route>
          <Route
            path="/chat/:person"
            element={<ChatScreen />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
