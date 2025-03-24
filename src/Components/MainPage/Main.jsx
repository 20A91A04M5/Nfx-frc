
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import "./Main.css";
import { Nfxui } from "../../assets";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../Firbase/Firebase_Config";

const GymApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showInfo, setShowInfo] = useState(false); // New state for info visibility
  const navigate = useNavigate();

 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  
  const userLetter =
    user && user.email ? user.email.charAt(0).toUpperCase() : null;

  return (
    <div className="gym-app">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-dark bg-dark p-3">
        <Container>
          <Navbar.Brand href="#home" className="text-primary fw-bold">
            NFX NUTRIFIT
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="basic-navbar-nav"
            className="text-white"
          >
            <GiHamburgerMenu size={24} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "show" : ""}>
            <Nav className="ms-auto">
              <Nav.Link className="text-white li">HOME</Nav.Link>
              <Nav.Link onClick={() => navigate("/Bmi")} className="text-white li">
                BMI
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/exercises")} className="text-white li">
                EXERCISES
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/diet")} className="text-white li">
                DIET
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/prices")} className="text-white li">
                PACKAGES
              </Nav.Link>
            </Nav>
            {/* Dropdown replacing Log Out button */}
            <Dropdown align="end" className="ms-2">
              <Dropdown.Toggle variant="primary" className="logout">
                {userLetter ? userLetter : <FaUser />}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/")}>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center text-white">
        <Container>
          <div id="mnd" className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <span className="badge bg-primary text-dark px-3 py-2">
                THE BEST FITNESS APP FOR U
              </span>
              <h1 className="mt-3">
                <span className="text-primary shape">SHAPE</span>{" "}
                <span id="your">YOUR</span> <br />{" "}
                <span className="idl"> IDEAL BODY</span>
              </h1>
              <p className="lead">
                "Push yourself, because no one else is going to do it for you."
              </p>
              <div className="mt-4">
                <Button id="mbut" variant="primary" className="me-2">
                  Get Started
                </Button>
                <br />
                <Button
                  id="mbut1"
                  variant="outline-primary"
                  onClick={() => setShowInfo(!showInfo)}
                >
                  Learn More
                </Button>
              </div>
              
              {showInfo && (
                <div className="mt-4 fs-5 d-flex gap-2">
                  <p style={{ color: "lightgreen" }}>+50 Coaches</p>
                  <p style={{ color: "lightorange" }}>+100 Members Joined</p>
                  <p style={{ color: "orange" }}>+50 Fitness Programs</p>
                </div>
              )}
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Nfxui}
                id="uiimg"
                alt="Trainer"
                className="img-fluid trainer-img"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default GymApp;
