import React from 'react'
import Carousel from 'react-multi-carousel';

const Instructors = () => {
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
  const instructorsData = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Ritika Sharma",
      profession : "Lorem ipsum dolor sit amet."
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Arkshan Gupta",
      profession : "Lorem ipsum dolor sit amet."
    }, 
    {
      img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Vikram Malik",
      profession : "Lorem ipsum dolor sit amet."
    },
    {
      img: "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      name : "Amit Chanija",
      profession : "Lorem ipsum dolor sit amet."
    },
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        name : "Mikasa Ackerman",
        profession : "Lorem ipsum dolor sit amet."
    },
    {
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Eren",
      profession : "Lorem ipsum dolor sit amet."
    }, 
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Levi",
      profession : "Lorem ipsum dolor sit amet."
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      name : "Erwin Smith",
      profession : "Lorem ipsum dolor sit amet."
    },
  ];
  return (
    <div className='flex justify-center items-center '>
      <div className='m-4 my-12 w-[86%]'>
          <h1 className='text-4xl text-center m-2 p-2 mt-8 font-extrabold text-black'>Our Top Instructors</h1>
          <Carousel className=''
              responsive={responsive}
              swipeable={true}
              showDots={true}
          >
            {
              instructorsData.map((instructors, index) => (
                <>
                <div className='m-3'>
                  <div className='hover:bg-gradient-to-b from-gray-500 to-gray-800 h-64 w-full relative hover:transition-all duration-1000 ease-out overflow-hidden'>
                    <img className="object-cover h-full w-full rounded-md absolute mix-blend-overlay" src={instructors.img} alt="instructor" />
                    <div className='h-full flex justify-center items-end'>
                    <a href="#" className="hover:text-blue-500 ">
                      <i className="m-2 text-xl hover:text-blue-500 fab fa-facebook"></i>
                    </a>
                    <a href="#" className="hover:text-blue-500">
                      <i className="m-2 text-xl fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="hover:text-blue-500">
                      <i className="m-2 text-xl fab fa-twitter"></i>
                    </a>
                    <a href="#" className="hover:text-red-500">
                      <i className="m-2 text-xl fab fa-youtube"></i>
                    </a>
                    <a href="#" className="hover:text-pink-500">
                      <i className="m-2 text-xl fab fa-instagram"></i>
                    </a>
                    </div>
                  </div>
                  <div className='text-center p-2'>
                    <div className='text-primary font-bold'>{instructors.name}</div>
                    <div>{instructors.profession}</div>
                  </div>
                </div>
                </>
              ))
            }
          </Carousel>
          {/* <div className='text-center my-6'>
              <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                  Load More Comments!!
              </div>
          </div> */}
      </div>
    </div>
  )
}

export default Instructors