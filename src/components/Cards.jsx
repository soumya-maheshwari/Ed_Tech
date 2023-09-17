import React from 'react'


const Cards = ({name, desc, img, instructor, instructorImg}) => {
  return (
      <div className=''>
          <div className="card h-[32rem] bg-white rounded-md my-4 border shadow-md hover:shadow-2xl transition-all duration-300 ease-out  ">
            <figure className='h-48 '><img className='h-48 w-full object-contain' src={img} alt="Subject" /></figure>
            <div className="card-body bg-white rounded-md p-4">
                <h2 className="card-title text-black mx-auto">
                  {name}
                </h2>
                <div className='rounded-lg overflow-hidden flex justify-center items-center mx-auto'>
                  <img src={instructorImg} className="object-cover h-10 w-10 rounded-full" />
                  <p className='pl-2'>{instructor}</p>
                </div>   
                <p className='my-3 text-center'>{desc}</p>
                <div className='text-center'>
                  <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>Enroll Now</div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Cards
