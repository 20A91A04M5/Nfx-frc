import React from "react";
import "./Package.css";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
    const navigate = useNavigate();
  return (
    <section id="Foot" className="pricing-container">
      <div className="pricing-header">
    <button id="bckbmi" onClick={()=>navigate("/Nfxapp")}>Back</button>
        <h1 >Pricing</h1>
        <p>Quickly Choose the best membership plan to match your fitness goals.</p>
      </div>

      <div className="pricing-cards">
        <div className="card free">
          <h4 className="card-title">Free</h4>
          <p className="card-price">₹0/mo</p>
          <p>Access to 500+ workout types</p>
          <p>Customized Workout options</p>
          <p>Timer Based Workouts</p>
          <p>Personal coach Guidance</p>
          <p>24/7 customer support</p>
          <p>One to one trainer interaction</p>
          <button className="btn btn-outline-primary w-100" onClick={()=>navigate("/Nfxapp")}>Sign up for free</button>
        </div>

        <div className="card pro">
          <div className="lock-overlay">
            <FaLock size={30} className="lock-icon" />
          </div>
          <h4 className="card-title">Pro</h4>
          <p className="card-price">₹200/mo</p>
          <p>Access to 1300+ workout types</p>
          <p>Customized Workout options</p>
          <p>Timer Based Workouts</p>
          <p>Personal coach Guidance</p>
          <p>24/7 customer support</p>
          <p>One to one trainer interaction</p>
          <button id="frmsub" className="btn btn-primary w-100">Get started</button>
        </div>

        <div className="card ultra-pro">
          <div className="lock-overlay">
            <FaLock size={30} className="lock-icon" />
          </div>
          <h4 className="card-title">Ultra Pro</h4>
          <p className="card-price">₹500/mo</p>
          <p>Access to 1300+ workout types</p>
          <p>Customized Workout options</p>
          <p>Timer Based Workouts</p>
          <p>Personal coach Guidance</p>
          <p>24/7 customer support</p>
          <p>One to one trainer interaction</p>
          <button id="frmsub" className="btn btn-primary w-100">Contact us</button>
        </div>
      </div>
    </section>
    
  );
};

export default Pricing;
