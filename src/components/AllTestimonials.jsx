import React, { useEffect, useState } from 'react'
import Carouselitem from './Carouselitem'
import NavBar from './NavBar/NavBar';

const AllTestimonials = () => {
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
  return (
    <>
        <div>
            <NavBar/>
        </div>
        <div className='hero2'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 pt-20 mt-8 font-bold text-white z-10'>All Testimonials</h1>
        </div>
        <div className="flex">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-[86%] mx-auto w-full'>
                {userData.map((data, index) => (
                    <Carouselitem
                    key={index}
                    name={data.name}
                    desc={data.comment}
                    course={data.course}
                    rating={data.rating}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default AllTestimonials