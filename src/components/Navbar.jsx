import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  const inline = {
    background: "linear-gradient(180deg, #085643 0%, #094153 76.1%)",
    height: "max",
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nev" style={inline}>
        <div className="container-fluid nev">
          <Link to="/" style={{ textDecoration: "none", fontWeight: "600" }}>
            <a
              style={{ textDecoration: "none", fontWeight: "600" }}
              className="navbar-brand text-white  mx-3"
            >
              SmartSpend
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <a className="nav-link active text-white" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <a className="nav-link active text-white" aria-current="page">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Features
                </a>
                <ul className="dropdown-menu">
                  <Link to="/expense" style={{ textDecoration: "none" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Expense Tracker
                      </a>
                    </li>
                  </Link>
                  <Link to="/p2p" style={{ textDecoration: "none" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        P2P Lending
                      </a>
                    </li>
                  </Link>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <Link to="/smartinv" style={{ textDecoration: "none" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Smart Invest
                      </a>
                    </li>
                  </Link>
                </ul>
              </li>
            </ul>
            <div classNameName="profile">
              <Link to="/profile">
                <i
                  className="bi bi-person-circle p-4"
                  style={{ fontSize: "2rem", color: "white" }}
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
