import React from 'react';
import mission from "./mission1.jpg"
import vision from "./vission.jpg"
const Mission = () => {
  return (
    <div>
      <div className='hero2'>
       <h1  data-aos="fade-up" data-aos-duration="1000" className='z-10 text-4xl font-extrabold font-sans my-5 text-center'><div className="pt-20 text-4xl font-extrabold font-sans my-5 text-center">About Us</div></h1>
      </div>
      <div className="flex flex-col md:flex-row text-black">
        <div className="w-full md:w-1/2">
          <img data-aos="fade-up" data-aos-duration="1000"
            src={mission}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center ">
            <h2 data-aos="fade-up" data-aos-duration="1000" className='font-serif my-5 text-2xl font-bold'>
              Our Mission
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" className='font-serif mx-4 font-semibold'> 
                Horizon Edge Academy is on a mission to empower individuals with the knowledge and skills they need to thrive in rapidly changing world. We believe that education should be accessible, flexible, and designed to meet the unique needs of each learner.
            </p>
          </div>
       </div>
      </div>
      <div className="flex flex-col md:flex-row text-black">
  <div className="flex justify-center items-center w-full md:w-1/2 p-4">
    <div className="text-center">
      <h2 data-aos="fade-up" data-aos-duration="1000" className='font-serif my-5 text-2xl font-bold'>
        Our Vision
      </h2>
      <p data-aos="fade-up" data-aos-duration="1000" className='font-serif mx-4 font-semibold'> 
        Our vision is to create a future where education knows no boundaries. We aspire to be the leading platform that transforms lives through innovative, personalized, and practical learning experiences.
      </p>
    </div>
  </div>
  <div className="w-full md:w-1/2">
    <img data-aos="fade-up" data-aos-duration="1000"
      src={vision}
      alt="Your Image"
      className="w-full h-auto"
    />
  </div>
</div>

    </div>
  )
}

export default Mission
