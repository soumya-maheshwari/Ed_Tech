import React from 'react'
import Courses from './components/Courses'
import Comment from './components/Comment'
import Allcourses from './components/Allcourses'
import {Routes, Route} from 'react-router-dom'
import Testimonials from './components/Testimonials'
import Instructors from './components/Instructors'
import Footer from './components/Footer'
import Benefits from "./components/soumya/Benefits"
import Gallery from "./components/soumya/Gallery"
import ContactUs from './components/soumya/ContactUs'
import Signin from './components/Signin'
import Signup from './components/Signup'
import HowWeWork from "./components/soumya/HowWeWork"
import Count from "./components/Count/Count"
import Mission from "./components/Mission And Vission/Mission"
import NavBar from "./components/NavBar/NavBar"
import Categories from "./components/Categories/Categories"
import Hero from "./components/Hero/Hero"
import "./App.css"
import "react-multi-carousel/lib/styles.css";
import "./components/style.css"

const App = () => {
  return (
    <div className='font-serif box-border bg-white'>
      <Routes>
        <Route path='/' element={
          <>
            <NavBar/>
            <Hero/>
            <Categories/>
            <Benefits/>
            <Gallery/>
            <Courses/>
            <Count/>
            <Instructors/>
            <Testimonials/>
            <Comment/>
            <Footer/>
          </>
        }/>
        <Route path='/allcourses' element={<Allcourses/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/about' element={
          <>
            <NavBar/>
            <Mission/>
            <HowWeWork/>
            <Instructors/>
            <Footer/>
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App