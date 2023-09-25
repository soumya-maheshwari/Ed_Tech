import React, { useState } from 'react'
import review from './review.svg';

const Comment = () => {
  const [commentMsg, setCommentMsg] = useState({
    name: "", email:"", course:"", comment:""
  });
  console.log(commentMsg);
  
  const handleInput = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setCommentMsg({...commentMsg, [name]:value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://hea-zg7o.onrender.com/feedback/submitFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(commentMsg)
      });
      console.log("data sent!!");
      const data = await res.json();
      console.log("hello", data);
      if(!data) {
        console.log("comment not sent");
      } else {
        console.log("comment sent successfully");
        setCommentMsg({name:"", email:"", course:"", comment:""});
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center my-12">
        <form method="POST" className='w-full sm:w-[86%] grid grid-cols-1 lg:grid-cols-2 gap-4 border-2 rounded-lg overflow-hidden shadow-md '>
            <div className='rounded-lg overflow-hidden '>
                <img className='w-full object-cover' src={review} alt="Review" />
            </div>
            <div className='flex justify-center items-center px-8 pt-2 md:pt-6 rounded-lg overflow-hidden '>
                <div>
                    <h1 className='text-4xl text-center p-3 font-extrabold text-black'>Reviews and Comments</h1>
                    <div className='text-center'>Remember to give a positive feedback</div>
                    <input type="text" name="name" value={commentMsg.name} placeholder="Enter name" className="input input-bordered w-full mt-6 bg-white" onChange={handleInput}/>
                    <input type="email" name="email" value={commentMsg.email} placeholder="Enter email" className="input input-bordered w-full mt-6 bg-white" onChange={handleInput}/>
                    <select name="course" value={commentMsg.course} className="select select-bordered w-full bg-white mt-6" onChange={handleInput}>
                        <option disabled selected value="">Which course?</option>
                        <option value="Health and Fitness">Health and Fitness</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Science">Science</option>
                        <option value="Language">Language</option>
                        <option value="Social Studies">Social Studies</option>
                        <option value="Arts and Humanities">Arts and Humanities</option>
                    </select>
                    
                    <textarea name="comment" value={commentMsg.comment} className="textarea textarea-bordered w-full h-32 mt-4 bg-white" placeholder="Enter your response" onChange={handleInput}></textarea>
                    <div className='container text-center my-6'>
                        <div className='btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl' onClick={handleSubmit}>Leave a comment</div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Comment