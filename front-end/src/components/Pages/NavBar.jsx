import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Avatar from "@mui/material/Avatar";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to={"/"}
            style={{ fontFamily: "cursive" }}
          >
            dribbble
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={""}
                  style={{ fontFamily: "alert-primary" }}
                >
                  Inspiration
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={""}
                  style={{ fontFamily: "alert-primary" }}
                >
                  Find Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={""}
                  style={{ fontFamily: "alert-primary" }}
                >
                  Learn Design
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={""}
                  style={{ fontFamily: "alert-primary" }}
                >
                  Go Pro
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={""}
                  style={{ fontFamily: "alert-primary" }}
                >
                  Hire Designers
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <SearchIcon />
              </button>
            </form>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-link">
                <LocalMallIcon style={{ fontSize: "2rem", margin: "auto" }} />
              </li>

              <li className="nav-link">
                <Link to={"/profile"}>
                  <Avatar />
                </Link>
              </li>

              <li className="nav-link">
                <button
                  className="btn text-light fw-bold"
                  style={{ backgroundColor: "#ff3484" }}
                >
                  Upload
                </button>
              </li>
              <li className="nav-link">
                <Link
                  to={"/"}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
