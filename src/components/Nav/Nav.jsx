import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import booklogo from "../../img/logo3.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    console.log("Toggling...");
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="nav" id="nav">
        <div className="container nav-tabs flex">
          <div className="icon-toggle flex space-between">
            <Link to="/" className="nav-brand flex">
              {" "}
              <img src={booklogo} alt="site logo" />
              <span className="text-uppercase fw-7 fs-24 ls-1">LitLink</span>
            </Link>
            <button
              type="button"
              className="toggle-button"
              onClick={handleToggle}
            >
              <HiOutlineMenuAlt3
                size={35}
                style={{
                  color: `${toggle ? "#fff" : "#e98552"}`,
                }}
              />
            </button>
          </div>

          <div
            className={
              toggle ? "navbar-collapse show-navbar" : "navbar-collapse"
            }
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-uppercase text-ligt fs-22 fw-6 ls-1"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link text-uppercase text-ligt fs-22 fw-6 ls-1"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
