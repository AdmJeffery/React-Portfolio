import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{"background-color": "#b19a78"}}>
        <Link className="navbar-brand" to="/">
         Ammon Jeffery
        </Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </Link>
            </li>
        </ul>
    </div>
    </nav>
        )
   }

   export default Navbar
    