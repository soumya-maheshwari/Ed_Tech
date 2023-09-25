import React from "react";
import Home from "./components/Home";
import Allcourses from "./components/Allcourses";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import "./components/style.css";
import About from "./components/About";
import Math from "./components/Section/Math";
import Science from "./components/Section/Science";
import Computer from "./components/Section/ComputerScience";
import Arts from "./components/Section/ArtsAndHumanities";
import Language from "./components/Section/Languages";
import Social from "./components/Section/SocialStudies";
import Health from "./components/Section/HealthAndFitness";
// import Signin2 from './components/Signin2'
// import Signup2 from './components/Signup2'

const App = () => {
  return (
    <div className="font-serif box-border bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/allcourses" element={<Allcourses />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/math" element={<Math />} />
        <Route path="/science" element={<Science />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/arts" element={<Arts />} />
        <Route path="/language" element={<Language />} />
        <Route path="/social" element={<Social />} />
        <Route path="/health" element={<Health />} />

        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
