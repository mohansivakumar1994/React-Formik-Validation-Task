import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        className="text-center m-5 p-5"
        style={{
          fontFamily: "Protest Riot, sans-serif",
          fontSize: "3rem",
          color: "green",
          fontStyle: "normal",
        }}
      >
        <h1>WELCOME TO FORMIK LIBRARY </h1>

        <h1>MANAGEMENT SYSTEM</h1>

        <br />
        <button
          style={{
            border: "none",
            margin: "0",
            padding: "0",
            backgroundColor: "white",
          }}
        >
          <Link
            to="/books"
            style={{
              textDecoration: "none",
              fontFamily: "serif",
              backgroundColor: "black",
              border: "none",
              borderRadius: "5px",
              fontSize: "20px",
              margin: "5px",
              padding: "10px",
              color: "yellow",
            }}
          >
            Click Me
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
