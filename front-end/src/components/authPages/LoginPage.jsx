import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Common.css";

const LoginPage = () => {
  const [aggred, setAgreed] = useState(false);

  return (
    <>
      <div className=" d-flex flex-row register justify-content-between">
        <div className="col-md-5 img1">
          <img
            src="https://images.unsplash.com/photo-1712086353403-54a24887e74f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="registartonLogo"
            style={{ width: "45rem", height: "51.2rem" }}
          />
        </div>

        <div className="col-md-6 p-5">
          <div>
            <p
              className="d-flex flex-row justify-content-end"
              sytyle={{ marginTop: "2rem" }}
            >
              Have not an Account? &nbsp;
              <span>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Sign up
                </Link>
              </span>
            </p>
          </div>
          <h1 className="fw-bold">Sign In to Dribble!...</h1>
          <hr />
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInput3" className="form-label fw-bold">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="premxxxx@gmail.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label fw-bold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="6+ charchters"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                <p>
                  Creating an account means you're oky with our{" "}
                  <Link style={{ textDecoration: "none" }}>
                    Terms of Service, Privacy Policy,
                  </Link>
                  and our default{" "}
                  <Link style={{ textDecoration: "none" }}>
                    Notification Settings
                  </Link>
                </p>
              </label>
            </div>

            {aggred && (
              <Link
                to={"/profile"}
                type="submit"
                className="btn text-light fw-bold"
                style={{ backgroundColor: "#ff3484" }}
              >
                Login Account
              </Link>
            )}
            <div
              className="col-md-6 text-body-secondary"
              style={{ fontSize: "0.7rem", marginTop: "2rem" }}
            >
              <p>
                This site is protected by reCAPTCHA and the Goggle{" "}
                <Link>Privacy Policy</Link> &nsbp; and
                <Link>&nbsp;Terms Service</Link>&nbsp; Apply
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
