import React, {useState} from 'react'
import Cards from './Cards';
import chemistry from './chemistry.svg'
import maths from './maths.svg'
import coding from './coding.svg'
import health from './health.svg'
import { NavLink } from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Footer from './Footer';

const Allcourses = () => {
  const [query, setQuery] = useState("");

  const handleQuery = (value) => {
    setQuery(value);
  }
  const courses = [
    {
        img: health,
        name : "Health and fitness",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    },
    {
        img: coding,
        name : "Computer Science",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    }, 
    {
        img: maths,
        name : "Mathematics",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    },
    {
        img: chemistry,
        name : "Chemistry",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    },
    {
        img: health,
        name : "Health and fitness",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    },
    {
        img: coding,
        name : "Computer Science",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    }, 
    {
        img: maths,
        name : "Mathematics",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    },
    {
        img: chemistry,
        name : "Chemistry",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nesciunt!"
    },
  ];

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div className='flex justify-center items-center'>
        <div className=' w-[90%]'>
          <div className='hero2'>
            <h1 className='text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10'>Our Courses</h1>
          </div>
          <div className='flex justify-end mt-3 items-center'> 
            <input type="text" placeholder="Search" className="input input-bordered w-full bg-white max-w-xs rounded-r-none p-2" onChange={(e) => handleQuery(e.target.value)}/>
            <i className="fa-solid fa-magnifying-glass p-4 text-extrabold p-3 cursor-pointer bg-primary text-white hover:text-primary rounded-r-md hover:bg-white hover:border"></i>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {courses.filter((course) => course.name.toLowerCase().includes(query)).map((course, index) => (
                <Cards key={index} name={course.name} desc={course.desc} img={course.img}/>
              ))}
          </div>
          <div className='text-center my-8'>
              <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                  <NavLink to='/'>Go back</NavLink>
              </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Allcourses