import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/ABout";
import Career from "./Components/Career/Career";
import Career_title from "./Components/Career_title/Career_title";
import Joinus from "./Components/Joinus/Joinus";

function App() {
  return (
    <Routes>
      €z
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/career" element={<Career />} />
      <Route path="/join_us" element={<Joinus />} />
      <Route path="/career/:title" element={<Career_title />} />
    </Routes>
  );
}

export default App;
