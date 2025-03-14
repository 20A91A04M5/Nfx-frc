
// RestDaySunday.js
import React, { useState, useEffect } from 'react';
import Stopwatches from '../Stopwatch/Stop';
import "./Rest.css"
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
  background: 'blue',
  color: 'white',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  marginRight: '5px',
  cursor: 'pointer'
};

const API_URL = "https://nfx-back.onrender.com";

function RestDaySunday() {
  const [sundayData, setSundayData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()

  useEffect(() => {
    fetch(`${API_URL}/week`)
      .then(res => res.json())
      .then(data => {
        // Find the day "Sunday" (case insensitive)
        const sunday = data.find(day => day.day.toLowerCase() === 'sunday');
        setSundayData(sunday);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: '#fff' }}>Loading...</div>;
  if (!sundayData) return <div style={{ color: '#fff' }}>No data for Sunday found.</div>;

  return (
    <div style={{ padding: '20px', background: '#000', color: '#fff' }}>
      
      <h1 style={{ color: "orange", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <button onClick={() => navigate("/exercises")} style={{ ...buttonStyle, marginRight: "10px" }}>
          &larr;
        </button>
        <span>Rest Day - Sunday</span>
        <button onClick={() => navigate("/diet")} style={{ ...buttonStyle, marginLeft: "10px", backgroundColor:"orange", color:"black" }}>
          Diet
        </button>
      </h1>
      
      {sundayData.exercises.map((group, index) => (
        <div
          key={index}
          style={{
            marginBottom: '30px',
            border: '1px solid #fff',
            padding: '30px',
            borderRadius: '10px'
          }}
        >
          <h2 style={{color:"blue"}}>{group.category} Exercises ({sundayData.day})</h2>
          {group.details.map((exercise, idx) => (
            <div
              key={idx}
              
            >
              <h3 style={{color:"orange"}}>{exercise.name}</h3>
              <p>{exercise.description}</p>
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

export default RestDaySunday;
