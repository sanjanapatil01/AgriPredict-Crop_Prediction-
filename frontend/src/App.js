import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CropPredict from "./pages/CropPredict";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<CropPredict />} />
      </Routes>
    </Router>
  );
}

export default App;
