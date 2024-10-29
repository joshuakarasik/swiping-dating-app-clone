import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<TinderCards />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
