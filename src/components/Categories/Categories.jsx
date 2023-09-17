import React from 'react';
import "./Categories.css"

const Categories = () => {
  const Courses = [
    {
      name: 'Math',
      image: './images/math.png'
    },
    {
      name: 'Science',
      image: './images/science.png'
    },
    {
      name: 'Computer Science',
      image: './images/cs.png'
    },
    {
      name: 'Social Studies',
      image: './images/ss.png'
    },
    {
      name: 'Languages',
      image: './images/languages.png'
    },
    {
      name: 'Arts and Humanities',
      image: './images/ah.png'
    },
    {
      name: 'Health and Fitness',
      image: './images/health.png'
    }
  ];

  return (
    <div className=' hero1 gradient flex justify-center items-center' style={{
      // backgroundImage: 'url("./images/bge1.jpg")',
      backgroundSize: 'cover',
      backgroundAttachment:'fixed',
      backgroundPosition: 'center',
      minHeight: '100vh',
      position: 'relative',
      // textShadow: '3px 4px 7px rgba(81,67,21,0.8)',
    }}>
      <div className='z-10'>
        <h2 style={{ fontFamily: 'Gill sans, Georgia'}} className='text-center text-4xl font-bold  my-10 text-white'>Our Course Categories</h2>
        <div className="flex flex-wrap justify-center">
          {Courses.map(course => (
            <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" key={course.name}>
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={course.image} className="rounded-full w-full h-48 object-cover" alt={course.name} />
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">{course.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    

  );
}

export default Categories;

