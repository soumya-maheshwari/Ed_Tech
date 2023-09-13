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
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Shivam Mahto",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
    }, 
    {
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Vikram Malik",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
    },
    {
      img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Shashwat",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Priyanka Chaurasia",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Shivam Mahto",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
    }, 
    {
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Vikram Malik",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
    },
    {
      img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Shashwat",
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi id ipsam, eveniet numquam placeat quae consequuntur ducimus at nulla ratione!"
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