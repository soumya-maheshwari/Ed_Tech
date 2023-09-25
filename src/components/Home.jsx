import React, { useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import Categories from "./Categories/Categories";
import Benefits from "./Benefits";
import Gallery from "./Gallery";
import Courses from "./Courses";
import Count from "./Count/Count";
import Instructors from "./Instructors";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Comment from "./Comment";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Categories />
      <Benefits />
      <Gallery />
      <Courses />
      <Count />
      <Instructors />
      <Testimonials />
      <Comment />
      <Footer />
    </>
  );
};

export default Home;
