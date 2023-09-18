import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center h-screen">
        <h1 data-aos="fade-up" data-aos-duration="1000">HORIZON EDGE ACADEMY</h1>
        <p data-aos="fade-up" data-aos-duration="1000">Unlock Your Potential with Horizon Edge Academy.</p>
        <button data-aos="fade-up" data-aos-duration="1000" className="hero-button">
          <NavLink to="/about">Learn More</NavLink>
        </button>
    </div>
  )
}

export default Hero;
