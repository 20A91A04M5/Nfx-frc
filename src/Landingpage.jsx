

import React, { useEffect } from "react";
import "./Land.css";
import { logo, im1, im2, im3, im4, im5, im6, im7, im8, im9, im10, im11, im12 } from "./assets";

import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, signInAnonymously } from "./Firbase/Firebase_Config"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LoginForm from "./Components/Login";
import SignupPage from "./Components/Signup";
import { Link, useNavigate } from "react-router-dom";


const Landingpage = () => {
  useEffect(() => {

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    const handleMenuClick = () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    };

    menuBtn.addEventListener("click", handleMenuClick);

    const handleNavClick = () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    };

    navLinks.addEventListener("click", handleNavClick);


    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };


    if (window.ScrollReveal) {
      window.ScrollReveal().reveal(".header__image img", {
        ...scrollRevealOption,
        origin: "right",
      });
      window.ScrollReveal().reveal(".header__content h2", {
        ...scrollRevealOption,
        delay: 500,
      });
      window.ScrollReveal().reveal(".header__content h1", {
        ...scrollRevealOption,
        delay: 1000,
      });
      window.ScrollReveal().reveal(".header__content p", {
        ...scrollRevealOption,
        delay: 1500,
      });
      window.ScrollReveal().reveal(".header__content .header__btn", {
        ...scrollRevealOption,
        delay: 2000,
      });
      window.ScrollReveal().reveal(".header__content .socials", {
        ...scrollRevealOption,
        delay: 2500,
      });
      window.ScrollReveal().reveal(".header__bar", {
        ...scrollRevealOption,
        delay: 3000,
      });
    }




    return () => {
      menuBtn.removeEventListener("click", handleMenuClick);
      navLinks.removeEventListener("click", handleNavClick);
    };
  }, []);



  const navigate = useNavigate();

  const handleGuestLogin = async () => {
    await signInAnonymously(auth)
      .then(() => {
        // alert("Guest Account Logged in successfull")
        Swal.fire("Guest Account Logged in successfully!")
        toast.success("Guest Account Logged in successfully!", {
          position: "top-right", 
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "Light" 
        });
        navigate("/Nfxapp")
      })
      .catch((err) => {
        alert(err)
      })
  }

  const styles = {
    button: {
      padding: '10px 20px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background 0.3s ease'
    }
  };


  return (
    <>
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src={logo} alt="logo" />
              <span id="gym">GYM</span>
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links">
          <li>
            <a href="#hm">HOME</a>
          </li>
          <li>
            <a href="#fti">ABOUT</a>
          </li>
          <li>
            <a href="#ex">EXERCISES</a>
          </li>
          <li>
            <a href="#dt">DIET</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          <li>
            <a href="#Foot">PACKAGES</a>
          </li>
          <div>
          <button  className="btn btn-secondary"
            onClick={handleGuestLogin} style={styles.button}
          >Guest Mode</button>
          <ToastContainer />
          </div>
          <Link to={"/login"}>
            <button id="jn" className="btn btn-dark">Join Us</button>
          </Link>


        </ul>
      </nav>

      <header id="hm" className="header__container">
        <div className="header__image">
          <img src={im5} alt="header" />
        </div>
        <div className="header__content">
          <h2>WELCOME TO NFX GYM</h2>
          <h1>
            Train Hard
            <br />
            <span className="h1__span-1">Never Quit</span>
            <span className="h1__span-2">Stay Strong</span>
          </h1>
          <p id="p1">
            "Push past your limits, break the sweat, and rewrite your strength-one rep at a time"
          </p>
          <div className="header__btn">
            <button className="btn">Learn More</button>&emsp;
            <button className="btn btn-secondary" onClick={handleGuestLogin}>Guest Mode</button>
          </div>
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/login/">
                <i className="ri-facebook-circle-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-instagram-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-youtube-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>


      {/* Exercises Section */}
      <section id="ex" className="exercises-section">
        <div className="container">
          <h2 className="text-center">Exercises</h2>
          <div className="exercise-cards-container">
            {/* Exercise Card 1 */}
            <div className="exercise-card">
              <img src={im1} alt="Exercise 1" />
              <div className="exercise-content">
                <h5>Chest & Triceps</h5>
                <p>
                  A great exercise for upper body strength, targeting the chest and triceps.
                </p>
              </div>
            </div>
            {/* Exercise Card 2 */}
            <div className="exercise-card">
              <img src={im2} alt="Exercise 2" />
              <div className="exercise-content">
                <h5>Back & Biceps</h5>
                <p>
                  A great exercise for upper body strength, targeting the Back and Biceps.
                </p>
              </div>
            </div>
            {/* Exercise Card 3 */}
            <div className="exercise-card">
              <img src={im3} alt="Exercise 3" />
              <div className="exercise-content">
                <h5>Leg Day</h5>
                <p>Excellent for building leg strength, focusing on quadriceps, hamstrings, and glutes</p>
              </div>
            </div>
            {/* Exercise Card 4 */}
            <div className="exercise-card">
              <img src={im4} alt="Exercise 3" />
              <div className="exercise-content">
                <h5>Shoulders & Core</h5>
                <p>Perfect for building Core strength, focusing on Shoulders and Core.</p>
              </div>
            </div>
            {/* Exercise Card 5 */}
            <div className="exercise-card">
              <img src={im6} alt="Exercise 3" />
              <div className="exercise-content">
                <h5>Full Body / Cardio & HIIT</h5>
                <p>Perfect for improving core strength and overall stability.</p>
              </div>
            </div>
            {/* Exercise Card 6 */}
            <div className="exercise-card">
              <img src={im7} alt="Exercise 3" />
              <div className="exercise-content">
                <h5>Active Recovery & Flexibility</h5>
                <p>Perfect for improving core strength and overall stability.</p>
              </div>
            </div>
            {/* Exercise Card 7 */}
            <div className="exercise-card">
              <img src={im8} alt="Exercise 3" />
              <div className="exercise-content">
                <h5> Rest Day </h5>
                <p>Rest day or enjoy a 20–30 minute leisurely walk to stay active</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Diet Section */}

      <section id="diet">
        <section id="dt" className="diet-section">
          <div className="container">
            <h2 className="text-center">Food Diet</h2>
            <div className="diet-cards-container">
              {/* Diet Card 1 */}
              <div className="diet-card">
                <img src={im9} alt="Healthy Breakfast" />
                <div className="diet-content">
                  <h5>Healthy Breakfast</h5>
                  <p>
                    A healthy, appetizing gym breakfast Oatmeal with berries and almond milk, plus a boiled egg
                    Image below represents a nutritious start to your day.
                  </p>
                </div>
              </div>
              {/* Diet Card 2 */}
              <div className="diet-card">
                <img src={im10} alt="Protein Lunch" />
                <div className="diet-content">
                  <h5>Protein Lunch</h5>
                  <p>
                    A protein-packed lunch featuringGrilled chicken salad (mixed greens, cherry tomatoes, avocado, olive oil dressing) with whole-grain bread.
                    Perfect for fueling your workout sessions.
                  </p>
                </div>
              </div>
              {/* Diet Card 3 */}
              <div className="diet-card">
                <img src={im11} alt="Light Dinner" />
                <div className="diet-content">
                  <h5>Light Snacks</h5>
                  <p>
                    A selection of healthy snacks including Greek yogurt with a drizzle of honey and a sprinkle of walnuts.
                    Ideal for keeping your energy up between meals.
                  </p>
                </div>
              </div>
              {/* Diet Card 4 */}
              <div className="diet-card">
                <img src={im12} alt="Light Dinner" />
                <div className="diet-content">
                  <h5>Light Dinner</h5>
                  <p>
                    A light, balanced dinner with a Baked salmon with quinoa and steamed broccoli.
                    An optimal end to a day of fitness and training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Contact Section */}
      <section id="cnt">
        <br />
        <br />
        <br />
        <section id="contact" className="container py-5">
          <div className="row align-items-center">
            {/* Contact Form */}
            <div className="col-lg-6">
              <h2 className="mb-4 text-dark text-center">Contact Us</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  document.getElementById("email").value = "";
                }}
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your contact number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    How can we help you?
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button type="submit" id="frmsub" className="btn btn-primary submit-btn">
                  Submit
                </button>
                <br />
              </form>
            </div>
            <br /><br />

            {/* Google Map */}
            <div className="col-lg-6">
              <iframe
                className="w-100 h-200 map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.95373531590498!3d-37.816279742021664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c7f17cd02d6d2b!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1646999935190!5m2!1sen!2sau"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
      </section>

      {/* Packages*/}

      <section id="Foot">
        <section className="container">
          <div className="pricing-header">
            <h1 id="pgh1">Pricing</h1>
            <p id="pgh1">
              Quickly Choose the best membership plan to match your fitness goals.
            </p>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <div className="card p-4">
                <h4 className="card-title">Free</h4>
                <p className="card-price">₹0/mo</p>
                <p>Access to 500+ workout types</p>
                <p>Customized Workout options</p>
                <p>Timer Based Workouts</p>
                <p>Personal coach Guidance</p>
                <p>24/7 customer support</p>
                <p>One to one trainer interaction</p>
                <button className="btn btn-outline-primary w-100">
                  Sign up for free
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 shadow">
                <h4 className="card-title">Pro</h4>
                <p className="card-price">200₹/mo</p>
                <p>Access to 1300+ workout types</p>
                <p>Customized Workout options</p>
                <p>Timer Based Workouts</p>
                <p>Personal coach Guidance</p>
                <p>24/7 customer support</p>
                <p>One to one trainer interaction</p>
                <button id="frmsub" className="btn btn-primary w-100">Get started</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4">
                <h4 className="card-title text-dark  p-2">Ultra Pro</h4>
                <p className="card-price">500₹/mo</p>
                <p>Access to 1300+ workout types</p>
                <p>Customized Workout options</p>
                <p>Timer Based Workouts</p>
                <p>Personal coach Guidance</p>
                <p>24/7 customer support</p>
                <p>One to one trainer interaction</p>
                <button id="frmsub"className="btn btn-primary w-100">Contact us</button>
              </div>
            </div>
          </div>
        </section>
        <br />
        <footer className="footer">
          <div>
            <span id="fti">
              <a href="#">
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a href="#">
                <i className="ri-instagram-fill"></i>
              </a>
              <a href="#">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#">
                <i className="ri-youtube-fill"></i>
              </a>
            </span>
          </div>
          <h6>
            © 2025 NFX  | All Rights Reserved. This website uses Cookies. Disclaimer & Privacy Policy.
            All of the materials on this website are unique, copyrighted and are exclusive to NFX.com
          </h6>
          <div>
            <div>
              <span>
                Workout | VideosCustom | WorkoutsWorkout | ProgramsMeal | PlansPilot | ProgramsRoutines
              </span>
            </div>
            <br />
            <div>
              <span>
                Help | CenterAbout | UsAccount | LoginReturns & ExchangesContact Us
              </span>
            </div>
            <br />
            <div>
              <span>
                Privacy | Non-Discrimination Statement | Civil Rights Policy | Information | Quality | Policies and Links
              </span>
            </div>
          </div>
          <h6>
            Please Contact us @ for an Queries <b>"nfxtransformation@gmail.com"</b>
          </h6>
        </footer>
      </section>

    </>
  );
};

export default Landingpage;
