import React from 'react'
import Cards from './Cards'
import chemistry from './chemistry.svg'
import maths from './maths.svg'
import coding from './coding.svg'
import health from './health.svg'
import {NavLink} from 'react-router-dom'

const Courses = () => {
  
  const courses = [
    {
        img: health,
        name : "Health and Fitness",
        desc : "Transform your well-being with our holistic Total Wellness course. Achieve fitness goals, make informed nutritional choices, and embrace mindfulness for a healthier, happier life.",
        instructor : "Ritika Sharma",
        instructorImg : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      img: coding,
      name : "Computer Science",
      desc : "Master coding with our Full-Stack Coding course. Ideal for beginners and future software engineers, you'll learn programming fundamentals, tackle real-world projects, and kickstart a rewarding tech career.",
      instructor : "Arkshan Gupta",
      instructorImg : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    }, 
    {
      img: maths,
      name : "Mathematics",
      desc : "Explore the fascinating world of advanced mathematics with our expert-led course. From calculus to abstract algebra, master complex concepts and boost your math skills for academic or career success.",
      instructor : "Amit Chanija",
      instructorImg : "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
  ];
  return (
    
    <div className='m-4'>
      <h1 className='text-4xl font-extrabold text-center m-2 p-2 mt-8 text-black'>Explore Our Popular Courses</h1>
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[86%]'>
            {courses.map((course, index) => (
              <Cards key={index} name={course.name} desc={course.desc} img={course.img} instructor={course.instructor} instructorImg={course.instructorImg}/>
            ))}
        </div>
      </div>
      <div className='text-center my-8'>
          <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
              <NavLink to='/allcourses'>View All Courses!!</NavLink>
          </div>
      </div>
    </div>
  )
}

export default Courses