import React, {useState, useEffect} from 'react'
import maths from './maths.svg'
import coding from './coding.svg'
import health from './health.svg'
import { NavLink } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Footer from './Footer';
import FullCards from './FullCards';

const Allcourses = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (value) => {
    setQuery(value);
  }
  useEffect(()=>{
    window.scroll(0,0)
  },[])
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
      desc : "Explore the fascinating world of advanced mathematics with our expert-led course. From calculus to abstract algebra, master complex concepts and boost your math skills.",
      instructor : "Amit Chanija",
      instructorImg : "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
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
      desc : "Explore the fascinating world of advanced mathematics with our expert-led course. From calculus to abstract algebra, master complex concepts and boost your math skills.",
      instructor : "Amit Chanija",
      instructorImg : "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      img: maths,
      name : "Arts and Humanities",
      desc : "Shruti is a music maestro who introduces students to the world of melody, rhythm, and harmony. Her classes inspire a love for music",
      instructor : "Shruti Sharma",
      instructorImg : "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
  ];

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className='hero2'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 pt-20 mt-8 font-bold text-white z-10'>Our Courses</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className=' w-[86%]'>
          <div className='flex justify-end mt-3 items-center'> 
            <input type="text" placeholder="Search Course" className="outline-0 input border border-gray-200 w-full bg-white max-w-xs rounded-r-none pl-3 focus:outline-0" onChange={(e) => handleQuery(e.target.value)}/>
            <i className="fa-solid fa-magnifying-glass text-extrabold p-4 cursor-pointer bg-primary text-white hover:text-primary rounded-r-md hover:bg-white border box-content"></i>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {courses.filter((course) => course.name.toLowerCase().includes(query)).map((course, index) => (
                <FullCards key={index} name={course.name} desc={course.desc} img={course.img} instructor={course.instructor} instructorImg={course.instructorImg}/>
              ))}
          </div>
          <div className='text-center my-8'>
              <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                  <NavLink to='/'>Back to Home</NavLink>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Allcourses