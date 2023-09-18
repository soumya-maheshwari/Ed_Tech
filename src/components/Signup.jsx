import React, {useEffect} from 'react'
import signin_image from "./signup-img.svg"
import Footer from './Footer'
import NavBar from "../components/NavBar/NavBar";
import { NavLink } from 'react-router-dom';
import "./signin.css"


const Signin = () => {
    useEffect(()=>{
      window.scroll(0,0)
    },[])
    return (
        <>
              <NavBar/>
            <div className='hero2'>
              <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10'>Sign Up</h1>
           </div>
            <div className='page'>
            
              <div className="box border border-gray-300  lg:w-4/5  shadow-md my-20 bg-white max-h-[650px]">
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
                        <NavLink to="/signin"> Alreaady Registered? <span className='text-primary hover:underline'>Sign In</span> </NavLink>
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