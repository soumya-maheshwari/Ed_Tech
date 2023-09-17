import React from 'react'
import logo from "../../public/images/logo2.png"
import NavBar from './NavBar/NavBar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Signin2 = () => {
  return (
    <>
        <NavBar/>
            <div className='hero2'>
              <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10'>Sign In</h1>
           </div>
        <div className=''>
            <div className='block md:flex'>
                <div className="flex w-full bg-no-repeat bg-cover" style={{
                        backgroundImage:"url('https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?size=626&ext=jpg&ga=GA1.1.1303567070.1693853838&semt=ais')"
                    }}>
                    <div className='h-98 text-white  p-4 bg-no-repeat bg-cover my-12'>
                        <img src={logo} alt="company-logo" className='h-40 w-64 mx-auto'/>
                        <h1 className='text-4xl font-extrabold text-center '>New Here?</h1>
                        <div className='my-4 text-center'>Join Horizon Edge Academy for accessible, flexible, and personalized education. Our mission is empowerment, and our vision is limitless learning. Experience innovative, practical education and become part of a caring community, all designed to prepare you for a rapidly changing world.</div>
                        <div className='container text-center my-6'>
                            <div className='btn bg-white text-primary border-none text-center hover:bg-primary hover:border-primary hover:text-white shadow-primary shadow-md hover:shadow-gray-400 hover:shadow-md'>
                                <NavLink to="/signup" className="">Sign Up </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className='p-4 my-12'>
                        <h1 className='text-4xl font-extrabold text-black text-center '>Login to Your Account!!</h1>
                        <div className='p-8'>
                            <input type="email" placeholder="Enter email" className="input input-bordered w-full mt-6 bg-white"/>
                            <input type="password" placeholder="Enter password" className="input input-bordered w-full mt-6 bg-white"/>
                        </div>
                        <div className='text-center my-6'>
                            <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>Sign In</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Signin2