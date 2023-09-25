import React from 'react';
import image4 from "./images/i4.webp"
import image5 from "./images/i5.webp"
import image6 from "./images/i6.avif"
import NavBar from '../NavBar/NavBar';
const Science = () => {
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
                Physics
            </h2>
            <p className='font-serif font-semibold'>
            Dr. Manav is a physicist with a passion for teaching. He brings physics
            concepts to life with real-world examples and interactive experiments
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
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={image5}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center mb-6">
            <h2 className='font-serif my-5 text-2xl font-bold'>
                Chemistry
            </h2>
            <p className='font-serif font-semibold'>
                Meera is a chemistry expert who makes the periodic table come alive. Her
                engaging demonstrations and hands-on experiments make chemistry accessible to
                all.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-[180px] mb-4 md:mb-0 md:mr-2 h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Instructor</h3>
              <p className='text-xl font-bold'>Meera Sharma</p>
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
            src={image6}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center mb-6">
            <h2 className='font-serif my-5 text-2xl font-bold'>
             Biology
            </h2>
            <p className='font-serif font-semibold'>
            Dr. Aisha is a biologist and environmental scientist. Her lessons not only
            cover biology but also environmental science, fostering an appreciation for the
            natural world.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-[180px] mb-4 md:mb-0 md:mr-2 h-[100px] bg-white p-4 text-center border-l border-r transition duration-500 border-black hover:bg-[#0d6efd] hover:text-white">
              <h3 className='text-2xl font-extrabold'>Instructor</h3>
              <p className='text-lg font-bold'>Dr. Aisha Singh</p>
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

export default Science;
