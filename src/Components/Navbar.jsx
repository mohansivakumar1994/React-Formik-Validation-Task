import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Link
              to="/"
              style={{
                fontFamily: "Protest Riot, sans-serif",
                fontSize: "3rem",
                color: "purple",
                fontStyle: "normal",
                textDecoration: "none",
              }}
            >
              Library
              <i
                class="fa-solid fa-book-open-reader"
                style={{ color: "green" }}
              ></i>
            </Link>
          </a>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className=" nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link
                    to="/"
                    style={{
                      fontFamily: "cursive",
                      fontSize: "20px",
                      textDecoration: "none",
                      color: "purple",
                      fontWeight: "bold",
                    }}
                  >
                    Home{" "}
                    <i class="fa-solid fa-house" style={{ color: "green" }}></i>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    to="/books"
                    style={{
                      fontFamily: "cursive",
                      fontSize: "20px",
                      textDecoration: "none",
                      color: "purple",
                      fontWeight: "bold",
                    }}
                  >
                    Books{" "}
                    <i class="fa-solid fa-book" style={{ color: "green" }}></i>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    to="/bookDetails"
                    style={{
                      fontFamily: "cursive",
                      fontSize: "20px",
                      textDecoration: "none",
                      color: "purple",
                      fontWeight: "bold",
                    }}
                  >
                    Books Details{" "}
                    <i
                      class="fa-solid fa-book-atlas"
                      style={{ color: "green" }}
                    ></i>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    to="/addBooks"
                    style={{
                      fontFamily: "cursive",
                      fontSize: "20px",
                      textDecoration: "none",
                      color: "purple",
                      fontWeight: "bold",
                    }}
                  >
                    Add Books{" "}
                    <i
                      class="fa-solid fa-circle-plus"
                      style={{ color: "green" }}
                    ></i>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
