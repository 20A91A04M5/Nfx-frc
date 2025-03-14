import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Bmi.css"; 
import { IoNavigateCircleSharp } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  
  const calculateBMI = () => {
    if (height > 0 && weight > 0) {
      let bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(1);
      setBmi(bmiValue);
      determineCategory(bmiValue);

      document.getElementsByTagName("input")[0].value = '';
      document.getElementsByTagName("input")[1].value = '';
    }
  };

  const determineCategory = (bmiValue) => {
    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) setCategory("Normal");
    else if (bmiValue >= 25 && bmiValue <= 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  // Graph data
  const bmiData = [
    { category: "Underweight", value: 18.5 },
    { category: "Normal", value: 24.9 },
    { category: "Overweight", value: 29.9 },
    { category: "Obese", value: 35 },
    { category: category, value: bmi || 0 }, 
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="bmi-container">
        <button id="bckbmi" onClick={() => navigate("/Nfxapp")}>Back</button>
        <h2 className="text-center text-primary">BMI Calculator</h2>
        <div className="row">
          
          <div className="col-lg-6 col-md-6 col-sm-12 bmi-input">
            <label>Height (cm):</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height" />

            <label>Weight (kg):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" />

            <button className="btn btn-primary mt-3" id="bmibut" onClick={calculateBMI}>
              Calculate BMI
            </button>

            {bmi && (
              <div className="bmi-result mt-3">
                <h4 style={{ color: 'blue' }}>Your BMI: {bmi}</h4>
                <p className={`bmi-category ${category.toLowerCase()}`}>{category}</p>
              </div>
            )}
          </div>

          {/* BMI Graph */}
          <div className="col-lg-6 col-md-6 col-sm-12 bmi-graph">
            <h4>BMI Chart</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={bmiData}>
                <XAxis dataKey="category" stroke="white" tick={{ fill: "white" }} />
                <YAxis stroke="white" tick={{ fill: "white" }} />
                <Tooltip />
                <Bar dataKey="value" fill="#007bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BMICalculator;
