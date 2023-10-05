import React, { useEffect } from 'react';
import image9 from "./images/i9.jpg"
import image10 from "./images/i10.avif"
import NavBar from '../NavBar/NavBar';
const ComputerScience = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <NavBar/>
      <div className='hero2'>
        <h1 className='z-10 text-4xl font-extrabold font-sans my-5 text-center'>Computer Science</h1>
      </div>

      <div className="container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={image9}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center mb-6">
            <h2 className='font-serif my-5 text-2xl text-black font-bold'>
                Computer Science
            </h2>
            <p className='font-serif font-semibold'>
                Arkshan is a coding prodigy who demystifies programming. His classes equip students with coding skills for the digital age.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full text-black">
            <div className="w-full md:w-[180px] mb-4 md:mb-0 md:mr-2 h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Instructor</h3>
              <p className='text-lg font-bold'>Arkshan Gupta</p>
            </div>
            <div className="w-full md:w-[180px] mb-4 md:mb-0 md:mx-2 h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Price</h3>
              <p className='text-xl font-bold'>20$</p>
            </div>
            <div className="w-full md:w-[180px] h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Duration</h3>
              <p className='text-xl font-bold'>3 Months</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-8 mt-4 flex flex-wrap' >
        <div className='w-[33%]'>
          <div className='mx-auto max-w-fit'>
            <div className='font-bold text-black px-2 w-full'>Chapters </div>
            <ul className='pb-2'>
              <li className='p-2'>Programming languages,</li>
              <li className='p-2'>Data Structures,</li>
              <li className='p-2'>Algorithms,</li>
              <li className='p-2'>Databases,</li>
              <li className='p-2'>Cybersecurity.</li>
            </ul>
          </div>
        </div>
        <div className='w-[33%]'>
          <div className='mx-auto max-w-fit'>
            <div className='font-bold text-black px-2 w-full'>Test Papers </div>
            <ul className=' pb-2'>
              <li className='p-2'>Programming quizzes,</li>
              <li className='p-2'>Algorithm challenges,</li>
              <li className='p-2'>Practical Exams.</li>
            </ul>
          </div>
        </div>
        <div className='w-[33%]'>
          <div className='mx-auto max-w-fit'>
            <div className='font-bold text-black px-2 w-full'>Assignments</div>
            <ul className=''>
              <li className='p-2'>Coding projects,</li>
              <li className='p-2'>debugging exercises,</li>
              <li className='p-2'>algorithm analysis.</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default ComputerScience;
