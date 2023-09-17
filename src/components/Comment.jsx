import React from 'react'
import review from './review.svg';

const Comment = () => {
  
  return (
    <div className="flex justify-center items-center my-12">
        <div className='w-full sm:w-[86%] grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 rounded-lg overflow-hidden shadow-md '>
            <div className='rounded-lg overflow-hidden '>
                <img className='w-full object-cover' src={review} alt="Review" />
            </div>
            <div className='flex justify-center items-center px-8 pt-2 md:pt-6 rounded-lg overflow-hidden '>
                <div>
                    <h1 className='text-4xl text-center p-3 font-extrabold text-black'>Reviews and Comments</h1>
                    <div className='text-center'>Remember to give a positive feedback</div>
                    <input type="text" placeholder="Enter name" className="input input-bordered w-full mt-6 bg-white" />
                    <input type="email" placeholder="Enter email" className="input input-bordered w-full mt-6 bg-white" />
                    <select className="select select-bordered w-full bg-white mt-6">
                        <option disabled selected>Which course?</option>
                        <option>Mathematics</option>
                        <option>Health and Fitness</option>
                        <option>Computer Science</option>
                    </select>
                    
                    <textarea className="textarea textarea-bordered w-full h-32 mt-4 bg-white" placeholder="Enter your response"></textarea>
                    <div className='container text-center my-6'>
                        <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl'>Leave a comment</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Comment