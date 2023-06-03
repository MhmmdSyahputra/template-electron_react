import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="sidebar p-0"
            style={{ height: "100vh", background: "#081F3E" }}
          >
            <center>
              <img
                src="./img/logotext.png"
                className="img-fluid pt-5"
                width={250}
                alt=""
              />
            </center>
            <ul className="list-unstyled" style={{ marginTop: "30px" }}>
              <li className="fs-5 fw-bold">
                <Link className="nav-link text-light sideNav p-3" to="/">
                  Home
                </Link>
              </li>
              <li className="fs-5 fw-bold">
                <Link className="nav-link text-light sideNav p-3" to="/profil">
                  Profil
                </Link>
              </li>
              <li className="fs-5 fw-bold">
                <Link className="nav-link text-light sideNav p-3" to="/about">
                  About
                </Link>
              </li>
              <li className="fs-5 fw-bold">
                <Link className="nav-link text-light sideNav p-3" to="/about">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
