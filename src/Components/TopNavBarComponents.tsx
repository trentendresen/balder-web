/* eslint-disable no-loop-func */
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { List } from "../ComponentsStyles/TopNavBarStyles";
import "../ComponentsStyles/TopNavBar.css";

export const TopNavBarComponent = () => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#343A40",
      }}
    >
      <nav>
        <ul style={{ justifyContent: "space-evenly" }}>
          <List className="link">
            <Link
              className={location === "/aboutus" ? "active" : "link"}
              to="/aboutus"
            >
              About us
            </Link>
          </List>
          <List className="link">
            <Link
              className={location === "/support" ? "active" : "link"}
              to="/support"
            >
              Support
            </Link>
          </List>
          <List className="link">
            <Link
              className={location === "/testimonials" ? "active" : "link"}
              to="/testimonials"
            >
              Testimonials
            </Link>
          </List>
          <List>
            <Link className="home" to="/">
              Balder
            </Link>
          </List>
          <div className="login-signup-container">
            <Link className="login-signup" to="/login">
              Login
            </Link>
            <Link className="login-signup" to="/signup">
              Sign up
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};
