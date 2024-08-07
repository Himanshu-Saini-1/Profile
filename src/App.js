import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Landingpage from "./components/Landingpage/Landingpage";

function App() {
  return (
    <div className="App">
      <Router basename="/profile">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landingpage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
