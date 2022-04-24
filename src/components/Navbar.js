/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/Exodus_2/Exodus-Vertical-Logo_2.svg";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div id="OverviewText4">
          <a href="#">
            <img src={Logo} className="logo left" alt="Exodus DAO Logo" />
          </a>
        </div>
        <nav>
          <ul className="primary-nav">
            {/* <li><a href="#">Olympus Pro</a></li> */}
            <li>
              <a href="#">Stake</a>
            </li>
            <li>
              <a href="#">Bond</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            {/* <li><a href="#">Get Involved</a></li> */}
            <li>
              <a
                id="headlines"
                href="https://gleeful-basbousa-b1231f.netlify.app/"
                target="_blank"
                className="enter-app"
                rel="noreferrer"
              >
                Enter App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
