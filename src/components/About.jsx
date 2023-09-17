import React, {useEffect} from 'react'
import NavBar from './NavBar/NavBar'
import Mission from './Mission And Vission/Mission'
import HowWeWork from './soumya/HowWeWork'
import Instructors from './Instructors'
import Footer from './Footer'

const About = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
  return (
    <>
        <NavBar/>
        <Mission/>
        <HowWeWork/>
        <Instructors/>
        <Footer/>
    </>
  )
}

export default About