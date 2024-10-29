import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
