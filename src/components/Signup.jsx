import React from 'react'
import signin_image from "./signup_image.svg"
import Footer from './Footer'
import NavBar from "../components/NavBar/NavBar";
import { NavLink } from 'react-router-dom';
import "./signin.css"


const Signin = () => {
    return (
        <>
              <NavBar/>
            <div className='hero2'>
              <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10'>Sign Up</h1>
           </div>
            <div className='page '>
            <div className="background-wrapper">
                {/* Background image with blur */}
                <div className="background-image"></div>
              </div>
              <div className="box border border-gray-300 shadow-md my-12 bg-white">
                <div className='left-box '>
                  <h1 className='heading text-4xl text-black font-extrabold'>Sign Up</h1>
                  <form  className="input-form">
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='text' name='name' placeholder='Enter your name' autoComplete='off'/>
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='email' name='email' placeholder='Enter your email' autoComplete='off'/>
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='password' name='password' placeholder='Enter password' autoComplete='off'/>
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='text' name='number' placeholder='Enter your phone number' autoComplete='off'/>
                    <div className='submit my-8'>
                        <div className='text-center'>
                            <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                                Sign Up
                            </div>
                        </div>
                        <br/>
                        <NavLink className="hover:text-primary hover:underline" to="/signin"> Alreaady Registered? Sign In </NavLink>
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