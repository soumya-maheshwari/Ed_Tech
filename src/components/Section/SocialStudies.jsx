import React, { useEffect } from 'react';
import image7 from "./images/i7.avif"
import image8 from "./images/i8.jpg"
import NavBar from '../NavBar/NavBar';

const SocialStudies = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <NavBar/>
      <div className='hero2'>
        <h1 className='z-10 text-4xl font-extrabold font-sans my-5 text-center'>Social Studies</h1>
      </div>

      <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={image7}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center mb-6">
            <h2 className='font-serif my-5 text-2xl font-bold'>
                History, Geography
            </h2>
            <p className='font-serif font-semibold'>
                Dr. Shravan is a historian and geographer. He guides students through
                fascinating historical events and helps them explore the world through geography.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-[180px] mb-4 md:mb-0 md:mr-2 h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Instructor</h3>
              <p className='text-md font-bold'>Dr.Shravan Verma</p>
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
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={image8}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center mb-6">
            <h2 className='font-serif my-5 text-2xl font-bold'>
                Civics, Economic
            </h2>
            <p className='font-serif font-semibold'>
                Sunaina brings civics and economics to life with discussions on
                governance, politics, and the global economy. Her classes empower students to be
                informed citizens.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-[180px] mb-4 md:mb-0 md:mr-2 h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Instructor</h3>
              <p className='text-md font-bold'>Sunaina Dholakia</p>
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
    </div>
    </>
  )
}

export default SocialStudies
