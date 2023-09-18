import React, {useEffect} from 'react'
import signin_image from "./Signin-img.svg"
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
              <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10'>Sign In</h1>
           </div>
            <div className='page ' >
              
              <div className="box border border-gray-300 shadow-md lg:w-4/5 my-20 bg-white max-h-[600px]">
                <div className='left-box '>
                  <h1 className='heading text-4xl font-extrabold text-black'>Sign In</h1>
                  <form  className="input-form">
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='email' name='email' placeholder='Enter your email' autoComplete='off'/>
                    <input className='signup-input input input-bordered w-full mt-3 bg-white' type='password' name='password' placeholder='Enter password' autoComplete='off'/>
                    <div className='submit mt-8'>
                        <div className='text-center'>
                            <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>
                                Sign In
                            </div>
                            <div className='p-2'>Forget Password!!</div>
                        </div>
                        <br/>
                    </div>
                  </form>
                  <div className='text-center'>
                    <div className='p-2 line'>OR</div>
                    <div className='h-full flex justify-center items-end z-10'>
                      <a href="#" className="hover:text-red-500">
                        <i class="m-2 text-xl fa-brands fa-google"></i>
                      </a>
                      <a href="#" className="hover:text-blue-500 z-10">
                        <i className="m-2 text-xl hover:text-blue-500 fab fa-facebook z-10"></i>
                      </a>
                      <a href="#" className="hover:text-black">
                        <i class="m-2 text-xl fa-brands fa-github"></i>
                      </a>
                      <a href="#" className="hover:text-blue-500">
                        <i className="m-2 text-xl fab fa-twitter"></i>
                      </a>
                      
                    </div>
                  </div>
                  <div className='text-center p-8'>
                    <NavLink to="/signup"> New Here? <span className="text-primary hover:underline">Register!! </span></NavLink>
                  </div>

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