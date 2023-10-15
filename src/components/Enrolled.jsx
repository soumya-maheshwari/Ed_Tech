import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import NavBar from "./NavBar/NavBar";
import { Footer } from "antd/es/layout/layout";

const Enrolled = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [course, setCourse] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    fetch("https://hea-zg7o.onrender.com/courses/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.courses);
        setPosts([...data.courses]);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = { course_name: course };
    console.log(course);
    try {
      const res = await fetch("https://hea-zg7o.onrender.com/courses/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(courseData)
      });
      const data = await res.json();
      console.log("data  ", data);
      if(!data) {
        console.log("course not added");
        toast.error("problem in adding course");
      } else {
        console.log("course added!!");
        setCourse("");
        toast.success("course added successfully!!");
      }
    } catch(error) {
      console.log(error);
    }
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <NavBar/>
    <div className="hero2">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10"
        >
          Enrolled courses
        </h1>
      </div>
    <div className="container mx-auto p-4 text-center text-black bg-white">
      <div className="flex my-4">
        <input
          type="text"
          name="name"
          value={course}
          className="input input-bordered w-[80%] mr-3 bg-white"
          onChange={(e) => setCourse(e.target.value)}
        />
        <div className="submit">
          <div className="text-center">
            <div
              className="btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl"
              onClick={handleSubmit}
            >
              Add Course
            </div>
          </div>
        </div>
      </div>
        {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-between">
          {currentPosts.map((post) => (
            <div key={post._id} className="bg-gray-200 p-4 mb-4 w-[40%]">
              <h2 className="text-xl font-bold mb-2">{post.course_name}</h2>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
    <ToastContainer/>
    <Footer/>
    </>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex list-none">
        {pageNumbers.map((number) => (
          <li key={number} className="mr-2">
            <button
              onClick={() => paginate(number)}
              className={`bg-gray-200 py-2 px-4 hover:bg-[#0d6efd] hover:text-white`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Enrolled;
