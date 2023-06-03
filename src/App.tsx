import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/electron-vite.animate.svg";
import "./App.css";
import Pages from "./Pages/Pages";
import { Header } from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import { Profile } from "./Views/Profile";
import { About } from "./Views/About";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Header />
        </div>
        <div className="col p-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
