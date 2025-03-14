import React, { useState, useEffect } from "react";
import "./Stop.css"; 
// import { ToastContainer,toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
const Stopwatches = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [inputTime, setInputTime] = useState(0);
  

  useEffect(() => {
    let interval;
    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    if (time === 0 && running) {
      setRunning(false);
      
      
    }
    return () => clearInterval(interval);
  }, [running, time]);

  return (
    <div className="stopwatch-container">
     
      <div className="stopwatch">
        <div className="watch-top"></div>
        <div className="watch-dot"></div>
        <div className="time-display">{time}</div>
      </div>
      
     
      <select
        className="time-input"
        onChange={(e) => setInputTime(Number(e.target.value))}
      >
        <option value="0">PLEASE ENTER SECONDS</option>
        {[ 20, 30,  45, 60].map((sec) => (
          <option key={sec} value={sec}>
            {sec} seconds
          </option>
        ))}
      </select>

      
      <div className="button-group">
        <button className="btn primary" onClick={() => setRunning(false)}>
          ⏸ STOP
        </button>
        <button className="btn primary" onClick={() => { setTime(inputTime); setRunning(false); }}>
          🔄 RESET
        </button>
        <button className="btn primary" onClick={() => setRunning(true)}>
          ⏱ START
        </button>

      </div>


    </div>
  );
};

export default Stopwatches;

