import React from 'react'
import Carousel from 'react-multi-carousel';
import Carouselitem from './Carouselitem';
import { NavLink } from 'react-router-dom';

const Testimonials = () => {
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
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const testimonialsData = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Priyanka Chaurasia",
      desc : "I recently completed the Advanced Mathematics course on this platform, and it was nothing short of outstanding. The instructors' depth of knowledge and teaching skills made complex concepts easy to grasp. I'm now more confident in my math abilities and can apply what I've learned in both my academic and professional life."
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Shivam Mahto",
      desc : "The Health and Fitness course I took here was a game-changer for my well-being. The course not only covered exercise routines but also focused on nutrition and overall wellness. It's not just about getting fit; it's about leading a healthier life. I've lost weight, gained muscle, and improved my overall health, all thanks to this fantastic program."
    }, 
    {
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Vikram Malik",
      desc : "I can't say enough good things about the Computer Science courses on this platform. As a beginner, I was worried about diving into coding, but the introductory courses were so well-structured and beginner-friendly. The practical coding exercises, real-world projects, and supportive community made the learning process enjoyable. "
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Priyanka Chaurasia",
      desc : "I recently completed the Advanced Mathematics course on this platform, and it was nothing short of outstanding. The instructors' depth of knowledge and teaching skills made complex concepts easy to grasp. I'm now more confident in my math abilities and can apply what I've learned in both my academic and professional life."
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Shivam Mahto",
      desc : "The Health and Fitness course I took here was a game-changer for my well-being. The course not only covered exercise routines but also focused on nutrition and overall wellness. It's not just about getting fit; it's about leading a healthier life. I've lost weight, gained muscle, and improved my overall health, all thanks to this fantastic program."
    }, 
    {
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Vikram Malik",
      desc : "I can't say enough good things about the Computer Science courses on this platform. As a beginner, I was worried about diving into coding, but the introductory courses were so well-structured and beginner-friendly. The practical coding exercises, real-world projects, and supportive community made the learning process enjoyable. "
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Priyanka Chaurasia",
      desc : "I recently completed the Advanced Mathematics course on this platform, and it was nothing short of outstanding. The instructors' depth of knowledge and teaching skills made complex concepts easy to grasp. I'm now more confident in my math abilities and can apply what I've learned in both my academic and professional life."
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Shivam Mahto",
      desc : "The Health and Fitness course I took here was a game-changer for my well-being. The course not only covered exercise routines but also focused on nutrition and overall wellness. It's not just about getting fit; it's about leading a healthier life. I've lost weight, gained muscle, and improved my overall health, all thanks to this fantastic program."
    }, 
    {
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Vikram Malik",
      desc : "I can't say enough good things about the Computer Science courses on this platform. As a beginner, I was worried about diving into coding, but the introductory courses were so well-structured and beginner-friendly. The practical coding exercises, real-world projects, and supportive community made the learning process enjoyable. "
    },
  ];
  return (
    <div className='flex justify-center items-center'>
      <div className='mb-12 m-4 w-[86%]'>
        <h1 className='text-4xl text-center m-2 p-2 mt-8 font-bold text-black'>Testimonials</h1>
        <Carousel className=''
            responsive={responsive} 
            showDots={true}
        >
            {testimonialsData.map((testimonial, index) => (
                <Carouselitem
                key={index}
                img={testimonial.img}
                name={testimonial.name}
                desc={testimonial.desc}
                />
            ))}
        </Carousel>
        <div className='text-center my-6'>
            <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                <NavLink to="/contact">Load More Comments!!</NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials