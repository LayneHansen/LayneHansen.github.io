import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import TopNav from "../src/components/TopNav";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Profile from "./Profile";
import workDeskImage from "../src/assets/workDeskImage4.jpg";
import React from "react";

function App() {
return (
    <HashRouter hashType="slash">
      <TopNav />
      <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
