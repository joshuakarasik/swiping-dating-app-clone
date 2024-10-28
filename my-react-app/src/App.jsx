import { useState } from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
/*
const firebaseConfig = {
  apiKey: "AIzaSyBvW5yztDZVWLjssuvfY_CWKqpHneXzZ98",
  authDomain: "clone-47521.firebaseapp.com",
  projectId: "clone-47521",
  storageBucket: "clone-47521.appspot.com",
  messagingSenderId: "1036492225679",
  appId: "1:1036492225679:web:dc48867a3d27321a4f04fa",
  measurementId: "G-4ZLL6JB241"
};
  */

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
