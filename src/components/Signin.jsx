import React from 'react'
import signin_image from "./Signin-img.svg"
import Footer from './Footer'
import NavBar from "../components/NavBar/NavBar";
import { NavLink } from 'react-router-dom';
import "./signin.css"

const Signin = () => {
    return (
        <>
            <NavBar/>
            <div className='hero2'>
              <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10'>Sign In</h1>
           </div>
            <div className='page ' >
              <div className="background-wrapper">
                <div className="background-image"></div>
              </div>
              <div className="box border border-gray-300 shadow-md lg:w-4/5 my-20 bg-white">
                <div className='left-box '>
                  <h1 className='heading text-4xl font-extrabold text-black'>Sign In</h1>
                  <form  className="input-form">
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='email' name='email' placeholder='Enter your email' autoComplete='off'/>
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='password' name='password' placeholder='Enter password' autoComplete='off'/>
                    <div className='submit my-8'>
                        <div className='text-center'>
                            <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                                Sign In
                            </div>
                        </div>
                        <br/>
                        <NavLink to="/signup" className="hover:text-primary hover:underline"> New Here? Register!! </NavLink>
                    </div>
                  </form>
                </div>
                <div className='right-box'>
                  <img className='signup-image' src={signin_image} alt='Person Avatar'/>
                </div>
                
              </div>
            </div>
            <Footer/>
        </>
      )
}

export default Signin