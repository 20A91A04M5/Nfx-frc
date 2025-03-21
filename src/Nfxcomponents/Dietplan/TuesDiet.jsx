import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";
import "./Diet.css";

const API_URL = "https://nfx-back.onrender.com";

const Tuesday = () => {
  const navigate = useNavigate();
  const [dayData, setDayData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all weekly data and then filter for Monday
    fetch(`${API_URL}/week`)
      .then((res) => res.json())
      .then((data) => {
        const tuesData = data.find(
          (dayPlan) => dayPlan.day.toLowerCase() === "tuesday"
        );
        setDayData(tuesData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (!dayData)
    return <div className="container"><p>No data available for Monday.</p></div>;

  // Render UI similar to your original DietPlanSection component
  return (
    <section id="diet-plan" className="diet-plan-section">
      <div className="container">
        <button id="bckbmi" onClick={() => navigate("/exercises/back-biceps")}>
          Back
        </button>
        <h2 className="section-title">Tuesday Diet Plan</h2>
        <div className="day-card">
          <h3 className="day-title">
            {dayData.day} -{" "}
            {dayData.exercises
              .map((group) => group.category)
              .join(", ")}
          </h3>
          <div className="meal-container">
            {Object.keys(dayData.dietPlan).map((mealType, idx) => (
              <div key={idx} className="meal-card">
                <div className="meal-content">
                  <h5
                    className="meal-title"
                    style={{ color: "blue", fontSize: "30px" }}
                  >
                    {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                  </h5>
                  {dayData.dietPlan[mealType].map((meal, i) => (
                    <div key={i} className="meal-info">
                      <p>
                        <strong style={{ color: "orange" }}>Item:</strong>{" "}
                        {meal.item}
                      </p>
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
                        <strong style={{ color: "blue" }}>
                          Description:
                        </strong>{" "}
                        {meal.description
                          ? meal.description
                          : "No description provided."}
                      </p>
                      <p className="nutrients">
                        <strong>Nutrients:</strong> Calories: {meal.nutrients.calories}, 
                        Protein: {meal.nutrients.protein}g, 
                        Fat: {meal.nutrients.fat}g, 
                        Carbs: {meal.nutrients.carbohydrates}g
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tuesday;
