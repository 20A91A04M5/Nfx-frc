import React, { useEffect } from "react";
import "./Land.css";
// import { logo,im1,im2,im3,im4,im5,im6,im7,im8,im9,im10,im11,im12 } from "./assets";

import 'bootstrap/dist/css/bootstrap.min.css';

// If you need the Bootstrap JS components:
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import LoginForm from "./Components/Login";
// import SignupPage from "./Components/Signup";
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
import SaturdayActiveRecoveryExercises from "./Nfxcomponents/Flexible/FLexibility";
import RestDaySunday from "./Nfxcomponents/RestDay/Rest";


const App = () => {
  return (
    <>
      {/* <Landingpage /> */}
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
        <Route path="/exercises/Flexible" element={<SaturdayActiveRecoveryExercises />} />
        <Route path="/exercises/Cardio" element={<Cardio />} />
        <Route path="/exercises/Rest" element={<RestDaySunday />} />
        <Route path="/diet" element={<DietPlanSection />} />
        <Route path="/prices" element={<Pricing />} />
        {/* <Route path="/Schedule" element={<GymSched />} /> */}
      </Routes>
    </>
  );
};

export default App;
