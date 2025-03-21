
// ShouldersCoreExercises.js
import React, { useState, useEffect } from "react";
import Stopwatches from "../Stopwatch/Stop";
import Loading from '../../Loading/Loading';
import "./Shoulders.css"
import { useNavigate } from "react-router-dom";

import process from "process";
window.process=process

const buttonStyle = {
  background: "blue",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "4px",
  marginRight: "5px",
  cursor: "pointer",
};


const API_URL = "https://nfx-back.onrender.com";
// const API_URL = process.env.REACT_APP_API_URL;

function ShouldersCoreExercises() {
  const [exerciseGroups, setExerciseGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()

  useEffect(() => {
    fetch(`${API_URL}/week`)
      .then((res) => res.json())
      .then((data) => {
        let groups = [];
        data.forEach((day) => {
          day.exercises.forEach((group) => {
            if (group.category === "Shoulders" || group.category === "Core") {
              groups.push({ ...group, day: day.day });
            }
          });
        });
        setExerciseGroups(groups);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <div style={{ padding: "20px", background: "#000", color: "#fff" }}>

      <h1 style={{ color: "orange", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => navigate("/exercises")} style={{ ...buttonStyle, marginRight: "10px" }}>
          &larr;
        </button>
        <span>Shoulders & Core Exercises</span>
        <button onClick={() => navigate("/diet/thursday")} style={{ ...buttonStyle, marginLeft: "10px", backgroundColor:"orange", color:"black" }}>
          Diet
        </button>
      </h1>
      {exerciseGroups.map((group, index) => (
        <div
          key={index}
          style={{
            marginBottom: "30px",
            border: "1px solid #fff",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h2 style={{color:"blue"}}>
            {group.category} Exercises ({group.day})
          </h2>
          {group.details.map((exercise, idx) => (
            <div
              key={idx}
              
            >
              <h3 style={{color:"orange"}}>{exercise.name}</h3>
              <p style={{color:"blue"}}>{exercise.description}</p>
              <div className="video-container">
      <div className="video-wrapper">
        <video controls>
          <source src={exercise.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src={exercise.videoUrl1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src={exercise.videoUrl2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Stopwatches />
      </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ShouldersCoreExercises;
