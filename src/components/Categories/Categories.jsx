import React from 'react';
import "./Categories.css"
import maths from '../../../public/images/math.png';
import science from '../../../public/images/science.png';
import computer from '../../../public/images/cs.png';
import language from '../../../public/images/languages.png'
import health from '../../../public/images/health.png'
import social from '../../../public/images/ss.png'
import arts from '../../../public/images/ah.png'
import { NavLink } from 'react-router-dom';

const Categories = () => {

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
            <NavLink to="/math">
              <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" >
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={maths} className="rounded-full w-full h-48 object-cover" alt="maths"/>
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">Mathematics</h5>
              </div>
            </div>
            </NavLink>
            <NavLink to="/science">
              <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" >
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={science} className="rounded-full w-full h-48 object-cover" alt="maths"/>
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">Science</h5>
              </div>
            </div>
            </NavLink>
            <NavLink to="/computer">
              <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" >
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={computer} className="rounded-full w-full h-48 object-cover" alt="maths"/>
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">Computer Science</h5>
              </div>
            </div>
            </NavLink>
            <NavLink to="/arts">
              <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" >
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={arts} className="rounded-full w-full h-48 object-cover" alt="maths"/>
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">Arts and Humanities</h5>
              </div>
            </div>
            </NavLink>
            <NavLink to="/language">
              <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" >
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={language} className="rounded-full w-full h-48 object-cover" alt="maths"/>
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">Languages</h5>
              </div>
            </div>
            </NavLink>
            <NavLink to="/social">
              <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" >
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={social} className="rounded-full w-full h-48 object-cover" alt="maths"/>
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">Social Studies</h5>
              </div>
            </div>
            </NavLink>
            <NavLink to="/health">
              <div className="col-md-4 m-10 sm:col-6 md:col-4 lg:col-3 xl:col-3 flex flex-col justify-center items-center" >
              <div className="bg-white rounded-full flex flex-col items-center justify-center w-60 max-w-full h-full card-container">
                <div className="flex  rounded-full flex-col items-center justify-center w-full h-full p-4">
                  <div className="mb-4">
                    <img src={health} className="rounded-full w-full h-48 object-cover" alt="maths"/>
                  </div>
                </div>
              </div>
              <div className="text-center p-5 text-white">
                <h5 className="card-title ">Health and Fitness</h5>
              </div>
            </div>
            </NavLink>
        </div>
      </div>
    </div>
    
    

  );
}

export default Categories;

