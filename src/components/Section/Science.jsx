import React, { useEffect } from 'react';
import image4 from "./images/i4.webp"
import image5 from "./images/i5.webp"
import image6 from "./images/i6.avif"
import NavBar from '../NavBar/NavBar';
const Science = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <NavBar/>
      <div className='hero2'>
        <h1 className='z-10 text-4xl font-extrabold font-sans my-5 text-center'>Science</h1>
      </div>

      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={image4}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center mb-6">
            <h2 className='font-serif my-5 text-2xl font-bold'>
                Science
            </h2>
            <p className='font-serif font-semibold'>
            Dr. Manav is a science enthusiast with a passion for teaching. He brings different science
            concepts to life with real-world examples and interactive experiments.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-[180px] mb-4 md:mb-0 md:mr-2 h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Instructor</h3>
              <p className='text-lg font-bold'>Dr.Manav Gupta</p>
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
              <li className='p-2'>Physics</li>
              <li className='p-2'>Chemistry</li>
              <li className='p-2'>Biology</li>
              <li className='p-2'>Earth Science</li>
              <li className='p-2'>Astronomy.</li>
            </ul>
          </div>
        </div>
        <div className='w-[33%]'>
          <div className='mx-auto max-w-fit'>
            <div className='font-bold text-black px-2 w-full'>Test Papers </div>
            <ul className=' pb-2'>
              <li className='p-2'>Science quizzes,</li>
              <li className='p-2'>Unit Tests</li>
              <li className='p-2'>Comprehensive Exams</li>
            </ul>
          </div>
        </div>
        <div className='w-[33%]'>
          <div className='mx-auto max-w-fit'>
            <div className='font-bold text-black px-2 w-full'>Assignments</div>
            <ul className=''>
              <li className='p-2'>Lab Reports</li>
              <li className='p-2'>Experiments</li>
              <li className='p-2'>Research Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Science;
