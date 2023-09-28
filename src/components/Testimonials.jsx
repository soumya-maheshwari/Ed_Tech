import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import Carouselitem from './Carouselitem';
import { NavLink } from 'react-router-dom';

const Testimonials = () => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    const feedbackData = async () => {
        console.log("hello");
        try {
            const res = await fetch("https://hea-zg7o.onrender.com/feedback/getFeedbacks", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            });
            console.log("feedback data called");
            const data = await res.json();
            console.log(data);
            if(res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            } 
            setuserData([...data.feedbacks]);
        } catch(err) {
            console.log(err);
        }
    }
    feedbackData();
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1
    }
  };
  return (
    <div className='flex justify-center items-center'>
      <div className='mb-12 m-4 w-[86%]'>
        <h1 className='text-4xl text-center m-2 p-2 mt-8 font-bold text-black'>Testimonials</h1>
        <Carousel className=''
            responsive={responsive} 
            showDots={true}
        >
            {userData.map((data, index) => (
                <Carouselitem
                key={index}
                name={data.name}
                desc={data.comment}
                course={data.course}
                rating={data.rating}
                />
            ))}
        </Carousel>
        <div className='text-center my-6'>
            <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                <NavLink to="/alltestimonials">Load More Comments!!</NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials