import React, { useEffect } from "react";
import "./Land.css";

import 'bootstrap/dist/css/bootstrap.min.css';

// If you need the Bootstrap JS components:
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Landingpage from "./Landingpage";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./Components/Login";
import SignupPage from "./Components/Signup";
import Nfxapp from "./Nfxapp";
import BMICalculator from "./Nfxcomponents/BmiCalci/Bmi";
import ExerciseSection from "./Nfxcomponents/Exercises/Exercises";
import DietPlanSection from "./Nfxcomponents/Dietplan/Diet";
import Pricing from "./Nfxcomponents/Packages/Package";
import ChestAndTriceps from "./Nfxcomponents/Chest&Triceps/Chest&Tricep";
import Exercises from "./Nfxcomponents/Chest&Triceps/Chest&Tricep";
import BackAndBiceps from "./Nfxcomponents/BackAndBiceps/BackAndBiceps";
import Legs from "./Nfxcomponents/Legs/Legs";
import Shoulders from "./Nfxcomponents/Shoulders/Shoulders";
import Cardio from "./Nfxcomponents/CardioAndHiit/Cardio";
import RestDaySunday from "./Nfxcomponents/RestDay/Rest";
import SaturdayExercises from "./Nfxcomponents/Flexible/FLexibility";

import Monday from "./Nfxcomponents/Dietplan/MonDiet";
import Tuesday from "./Nfxcomponents/Dietplan/TuesDiet";
import Wednesday from "./Nfxcomponents/Dietplan/WedDiet";
import Thursday from "./Nfxcomponents/Dietplan/ThurDiet";
import Friday from "./Nfxcomponents/Dietplan/FriDiet";
import Saturday from "./Nfxcomponents/Dietplan/SatDiet";
import Sunday from "./Nfxcomponents/Dietplan/SunDiet";




const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Nfxapp" element={<Nfxapp />} />
        <Route path="/Bmi" element={<BMICalculator />} />
        <Route path="/exercises" element={<ExerciseSection />} />
        <Route path="/exercises/chest-triceps" element={<Exercises />} />
        <Route path="/exercises/back-biceps" element={<BackAndBiceps />} />
        <Route path="/exercises/legs" element={<Legs />} />
        <Route path="/exercises/shoulders" element={<Shoulders />} />
       
        <Route path="/exercises/Flexible" element={<SaturdayExercises />} />
        <Route path="/exercises/Cardio" element={<Cardio />} />
        <Route path="/exercises/Rest" element={<RestDaySunday />} />

        <Route path="/diet" element={<DietPlanSection />} />
        <Route path="/diet/monday" element={<Monday />} />
        <Route path="/diet/tuesday" element={<Tuesday />} />
        <Route path="/diet/wednesday" element={<Wednesday />} />
        <Route path="/diet/thursday" element={<Thursday />} />
        <Route path="/diet/friday" element={<Friday />} />
        <Route path="/diet/saturday" element={<Saturday />} />
        <Route path="/diet/sunday" element={<Sunday />} />
        
        <Route path="/prices" element={<Pricing />} />
      </Routes>
    </>
  );
};

export default App;

