
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Diet.css';

const API_URL = "https://nfx-back.onrender.com";

const DietPlanSection = () => {
  const navigate = useNavigate();
  const [weeklyData, setWeeklyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/week`)
      .then((res) => res.json())
      .then((data) => {
        setWeeklyData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: "orange", textAlign:"center", fontSize:"50px", alignContent:"center", height:"100vh",backgroundColor:"black" }}>Loading...</div>;

  return (
    <section id="diet-plan" className="diet-plan-section">
      <div className="container">
        <button id="bckbmi" onClick={() => navigate("/Nfxapp")}>Back</button>
        <h2 className="section-title">Weekly Diet Plan & Exercise Guide</h2>
        {weeklyData.map((dayPlan, index) => {
          // Combine exercise categories for the day
          const exerciseCategories = dayPlan.exercises
            .map((group) => group.category)
            .join(', ');
          return (
            <div key={index} className="day-card">
              <h3 className="day-title">
                {dayPlan.day} - {exerciseCategories}
              </h3>
              <div className="meal-container">
                {Object.keys(dayPlan.dietPlan).map((mealType, idx) => (
                  <div key={idx} className="meal-card">
                    <div className="meal-content">
                      <h5 style={{color:"blue",fontSize:"30px"}} className="meal-title">
                        {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                      </h5>
                      {dayPlan.dietPlan[mealType].map((meal, i) => (
                        <div key={i} className="meal-info">
                          <p><strong style={{color:"orange"}}>Item:</strong> {meal.item}</p>
                          <img
                            src={
                              meal.image
                                ? meal.image
                                : "https://via.placeholder.com/280x180?text=No+Image"
                            }
                            alt={meal.item}
                            className="meal-img"
                          />
                          <p>
                            <strong style={{color:"blue"}}>Description:</strong>{" "}
                            {meal.description ? meal.description : "No description provided."}
                          </p>
                          <p className="nutrients">
                            <strong>Nutrients:</strong> Calories: {meal.nutrients.calories}, Protein: {meal.nutrients.protein}g, Fat: {meal.nutrients.fat}g, Carbs: {meal.nutrients.carbohydrates}g
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DietPlanSection;

