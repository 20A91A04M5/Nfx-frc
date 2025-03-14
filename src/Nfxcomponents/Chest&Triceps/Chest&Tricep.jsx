
import { Flex } from 'antd';
import "./ChestAndTriceps.css";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Stopwatches from '../Stopwatch/Stop';

const buttonStyle = {
  background: 'blue',
  color: 'white',
  border: 'none',
  padding: '4px 12px',
  borderRadius: '4px',
  marginRight: '5px',
  cursor: 'pointer'
};

const API_URL = "https://nfx-back.onrender.com";

function ChestTricepsExercises() {
  const [exerciseGroups, setExerciseGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/week`)
      .then((res) => res.json())
      .then((data) => {
        let groups = [];
        data.forEach(day => {
          day.exercises.forEach(group => {
            if (group.category === "Chest" || group.category === "Triceps") {
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

  if (loading) return <div style={{ color: "orange", textAlign:"center", fontSize:"50px", alignContent:"center", height:"100vh",backgroundColor:"black" }}>Loading...</div>;

  return (
    <div style={{ padding: '20px',  color: '#fff' }}>
      <h1 style={{ color: "orange", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => navigate("/exercises")} style={{ ...buttonStyle, marginRight: "10px" }}>
          &larr;
        </button>
        <span>Chest & Triceps</span>
        <button onClick={() => navigate("/diet")} style={{ ...buttonStyle, marginLeft: "10px", backgroundColor:"orange", color:"black" }}>
          Diet
        </button>
      </h1>
      {exerciseGroups.map((group, index) => (
        <div
          key={index}
          style={{
            marginBottom: '30px',
            border: '1px solid #fff',
            padding: '30px',
            borderRadius: '10px'
          }}
        >
          <h2 style={{ color: "blue" }}>{group.category} Exercises ({group.day})</h2>
          {group.details.map((exercise, idx) => (
            <div
              key={idx}
              
            >
              <h3 style={{ color: "orange" }}>{exercise.name}</h3>
              <p style={{ color: "blue" }}>{exercise.description}</p>
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

export default ChestTricepsExercises;
