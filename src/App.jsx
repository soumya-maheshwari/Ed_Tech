import React from 'react'
import Home from './components/Home'
import Allcourses from './components/Allcourses'
import {Routes, Route} from 'react-router-dom'
import ContactUs from './components/soumya/ContactUs'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Signup2 from './components/Signup2'
import "./App.css"
import "react-multi-carousel/lib/styles.css";
import "./components/style.css"
import About from './components/About'
import Signin2 from './components/Signin2'

const App = () => {
  return (
    <div className='font-serif box-border bg-white'>
      <Routes>
        <Route path='/' element={
          <>
            <Home/>
          </>
        }/>
        <Route path='/allcourses' element={<Allcourses/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="/signin" element={<Signin2/>}/>
        <Route path="/signup" element={<Signup2/>}/>
        <Route path='/about' element={
          <>
            <About/>
          </>
        }/>
      </Routes>
    </div>
  )
}

export default App