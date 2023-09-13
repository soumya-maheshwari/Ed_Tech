import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center h-screen">
        <h1 data-aos="fade-up" data-aos-duration="1000">HORIZON EDGE ACADEMY</h1>
        <p data-aos="fade-up" data-aos-duration="1000">Unlock Your Potential with Horizon Edge Academy.</p>
        <button data-aos="fade-up" data-aos-duration="1000" className="hero-button">Learn More</button>
    </div>
  )
}

export default Hero;
