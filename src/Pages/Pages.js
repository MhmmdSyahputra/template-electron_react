import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "../Components/Header";
import Home from "../Views/Home";
const Pages = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default Pages;
