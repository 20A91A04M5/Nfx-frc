import React, { useState, useEffect } from "react";
import Stopwatches from "../Stopwatch/Stop";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading/Loading";


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

function SaturdayFullBodyExercises() {
  const [exerciseGroups, setExerciseGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/week`)
      .then((res) => res.json())
      .then((data) => {
        // Find Saturday's data by ensuring day exists and comparing in lowercase.
        const saturdayData = data.find(
          (item) =>
            item.day && item.day.toLowerCase() === "Saturday"
        );
        if (saturdayData && saturdayData.exercises) {
          // Filter for FullBody category exercises
          const fullBodyExercises = saturdayData.exercises.filter(
            (group) => group.category === "FullBody"
          );
          setExerciseGroups(fullBodyExercises);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  if (exerciseGroups.length === 0) {
    return (
      <div style={{ color: "red", textAlign: "center", padding: "20px" }}>
        No FullBody exercises found for Saturday.
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", background: "#000", color: "#fff" }}>
      <h1
        style={{
          color: "orange",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => navigate("/exercises")}
          style={{ ...buttonStyle, marginRight: "10px" }}
        >
          &larr;
        </button>
        <span>Saturday - Full Body Exercises</span>
        <button
          onClick={() => navigate("/diet/saturday")}
          style={{
            ...buttonStyle,
            marginLeft: "10px",
            backgroundColor: "orange",
            color: "black",
          }}
        >
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
          <h2 style={{ color: "blue" }}>
            {group.category} Exercises (Saturday)
          </h2>
          {group.details && group.details.length > 0 ? (
            group.details.map((exercise, idx) => (
              <div key={idx} style={{ marginBottom: "20px" }}>
                <h3 style={{ color: "orange" }}>{exercise.name}</h3>
                <p style={{ color: "blue" }}>{exercise.description}</p>
                <div className="video-container">
                  <div className="video-wrapper">
                    {exercise.videoUrl && (
                      <video controls>
                        <source src={exercise.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {exercise.videoUrl1 && (
                      <video controls>
                        <source src={exercise.videoUrl1} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {exercise.videoUrl2 && (
                      <video controls>
                        <source src={exercise.videoUrl2} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  <Stopwatches />
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: "red" }}>No exercise details available.</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default SaturdayFullBodyExercises;
