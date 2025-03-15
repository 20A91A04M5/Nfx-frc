
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { loginlogo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, auth } from "../Firbase/Firebase_Config";
import { LiaLinkedin } from "react-icons/lia";

import Swal from 'sweetalert2';

const API_URL = "https://nfx-back.onrender.com";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Submit for Backend Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    const loginData = { email, password };
    console.log("Login data to be sent:", loginData);

    try {
      // Save to Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in with Firebase");
      Swal.fire("LogIn successfull..!")
      navigate("/Nfxapp");

      // Save to backend 
      const response = await axios.post(`${API_URL}/login`, loginData);
      console.log("Response from server:", response.data);

      if (response.data.message === "Login successful.") {
        navigate("/Nfxapp");
      }
    } catch (err) {
      console.error("Error during login:", err.message);
      setError("Login failed. Please check your credentials.");
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Logged in with Google");
      navigate("/Nfxapp");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src={loginlogo} className="img-fluid" alt="Phone image" />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <h2 className="fw-bold text-warning text-center mb-4">Sign In now</h2>
            <form onSubmit={handleSubmit}>
              {/* Email input with icon */}
              <div className="form-outline mb-4 position-relative">
                <span className="input-icon">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="Enter Email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label text-primary" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              {/* Password input with icon */}
              <div className="form-outline mb-4 position-relative">
                <span className="input-icon">
                  <FaLock />
                </span>
                <input
                  type="password"
                  placeholder="Enter Password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label text-primary" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              {error && <p className="text-danger">{error}</p>}

              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    defaultChecked
                  />
                  <label className="form-check-label text-light" htmlFor="form1Example3">
                    Remember me
                  </label>
                </div>
                <a style={{ textDecoration: "none" }} href="#!">
                  Forgot password?
                </a>
              </div>

              {/* Submit button */}
              <div className="signup-link text-center mt-1">
                <span className="text-light">Don't have an account? </span>
                <Link to={"/signup"} className="text-primary text-decoration-none">
                  Sign Up
                </Link>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  id="loginbtn"
                >
                  Log in
                </button>
              </div>
            </form>

            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>

            <button
              className="btn btn-danger btn-lg btn-block"
              style={{ backgroundColor: "red" }}
              onClick={handleGoogleLogin}
            >
              <i className="fab fa-google me-2"></i> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;


