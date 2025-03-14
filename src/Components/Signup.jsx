

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { logosignup } from "../assets";

const API_URL = "https://nfx-back.onrender.com";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNo: "",
    Password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { FirstName, LastName, Email, PhoneNo, Password, confirmPassword } = formData;

    if (!FirstName || !LastName || !Email || !PhoneNo || !Password || !confirmPassword) {
      alert("All fields are required.");
      return false;
    }
    if (!/^\d{10}$/.test(PhoneNo)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }
    if (Password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error || "Invalid credentials");
          });
        }
        return response.json();
      })
      .then((data) => {
        alert("Signup successful");
        console.log("Signup successful:", data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert(error.message || "An error occurred. Please try again later.");
      });
  };
  

  return (
    <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 vh-100 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card bg-body-tertiary shadow-lg p-5">
              <div className="card-body text-center">
                <h2 className="fw-bold text-primary text-center mb-4">Sign up now</h2>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                          type="text"
                          name="FirstName"
                          className="form-control"
                          placeholder="First Name"
                          value={formData.FirstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faUser} />
                        </span>
                        <input
                          type="text"
                          name="LastName"
                          className="form-control"
                          placeholder="Last Name"
                          value={formData.LastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <input
                      type="tel"
                      name="PhoneNo"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.PhoneNo}
                      onChange={handleChange}
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type="password"
                      name="Password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.Password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <span className="text-light">Already have an account? </span>
                  <Link to="/login" className="text-warning rounded-pill text-decoration-none">
                    Login
                  </Link>
                  <br />
                  <button type="submit" id="spbut" className="btn btn-primary btn-block mb-3">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src={logosignup} id="sgimg" height={400} className="w-100 rounded-4 shadow-4" alt="Signup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;



