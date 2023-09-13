import React from 'react';
import mission from "./mission1.jpg"
import vision from "./vission.jpg"
const Mission = () => {
  return (
    <div>
      <div className='hero2'>
       <h1  data-aos="fade-up" data-aos-duration="1000" className='z-10 text-4xl font-extrabold font-sans my-5 text-center'>About Us</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img data-aos="fade-up" data-aos-duration="1000"
            src={mission}
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 p-4">
          <div className="text-center">
            <h2 data-aos="fade-up" data-aos-duration="1000" className='font-serif my-5 text-2xl font-bold'>
              Our Mission
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" className='font-serif mr-24 font-semibold'> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
       </div>
      </div>
      <div className="flex flex-col md:flex-row">
  <div className="flex justify-center items-center w-full md:w-1/2 p-4">
    <div className="text-center">
      <h2 data-aos="fade-up" data-aos-duration="1000" className='font-serif my-5 text-2xl font-bold'>
        Our Vision
      </h2>
      <p data-aos="fade-up" data-aos-duration="1000" className='font-serif ml-24 font-semibold'> 
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
