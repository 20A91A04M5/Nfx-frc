
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Exercises.css";
import { im1,im2,im3,im4,im5,im6,im7 } from "../../assets";

import { Navigate, useNavigate } from "react-router-dom";


const exercises = [
    {
        id: 1,
        title: "Chest & Triceps",
        day: "Monday",
        description: "Chest & Triceps workouts focus on building upper body strength by targeting your chest muscles (pectorals) and triceps (back of the arms). These exercises help in improving muscle definition, boosting push strength, and enhancing overall upper-body power.",
        letsStart: "Let's Start",
        route:"/exercises/chest-triceps",
        img: im1,
    },
    {
        id: 2,
        title: "Back & Biceps",
        day: "Tuesday",
        description: "Back & Biceps workouts focus on building a strong and well-defined upper body by targeting your back muscles (lats, traps, and lower back) and biceps (front of the arms). These exercises improve pulling strength, posture, and muscle endurance.",
        letsStart: "Let's Start",
        route:"/exercises/back-biceps",
        img: im2,
    },
    {
        id: 3,
        title: "Leg Day",
        day: "Wednesday",
        description: "Leg Day workouts focus on strengthening and building lower body muscles, including your quadriceps, hamstrings, glutes, and calves. These exercises improve balance, endurance, and overall lower-body power.",
        letsStart: "Let's Start",
        route:"/exercises/legs",
        img: im3,
    },
    {
        id: 4,
        title: "Shoulders & Core",
        day: "Thursday",
        description: "Shoulders & Core workouts focus on building upper body stability, strength, and endurance by targeting your deltoid (shoulder) muscles and core (abs, obliques, lower back). These exercises help with better posture, improved balance, and overall body strength.",
        letsStart: "Let's Start",
        route:"/exercises/shoulders",
        img: im4,
    },
    {
        id: 5,
        title: "Full Body / Cardio & HIIT",
        day : "Friday",
        description: "Full Body & Cardio workouts focus on engaging multiple muscle groups while improving heart health, endurance, and overall fitness. These exercises help in burning calories, increasing stamina, and enhancing full-body strength.",
        letsStart: "Let's Start",
        route:"/exercises/Cardio",
        img: im7,
    },
    {
        id: 6,
        title: "Active Recovery & Flexibility",
        day: "Saturday",
        description: "Active Recovery & Flexibility exercises help your muscles recover, reduce stiffness, and improve mobility while keeping your body moving. These workouts promote faster recovery, prevent injuries, and enhance overall flexibility.",
        letsStart: "Let's Start",
        route:"/exercises/Flexible",
        img: im6,
    },
    {
        id: 7,
        title: "Rest Day",
        day: "Sunday",
        description: "Sunday is all about giving your body a break while staying lightly active! It’s the perfect day to focus on relaxation, mobility, and light movement to keep your body fresh and ready for the week ahead. Rest day or enjoy a 20–30 minute leisurely walk to stay active.",
        letsStart: "Let's Start",
        route:"/exercises/rest",
        img: im5,
    },
];

const ExerciseSection = () => {
    const navigate = useNavigate();
    return (

        <section id="exercises" className="ex-section">
        <div className="container">
            <button id="bckbmi" onClick={() => navigate("/Nfxapp")}>Back</button>
            <h2 className="text-center text-white mb-4">Exercises</h2>
            <div className="ex-cards-container">
                {exercises.map((exercise) => (
                    <div key={exercise.id} className="ex-card">
                        <div className="exercise-item d-flex flex-wrap align-items-center">
                            <div className="ex-image">
                                <img src={exercise.img} alt={exercise.title} className="img-fluid" />
                            </div>
                            <div className="ex-content">
                                <h5>{exercise.title} - {exercise.day}</h5>
                                <p>{exercise.description}</p>
                                <button onClick={() => navigate(exercise.route)}>{exercise.letsStart}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default ExerciseSection;
