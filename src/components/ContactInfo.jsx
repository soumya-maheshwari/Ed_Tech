import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import { Footer } from "antd/es/layout/layout";

const ContactInfo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    fetch("https://hea-zg7o.onrender.com/contact/allContacts")
      .then((response) => response.json())
      .then((data) => {
        console.log("data  ", data);
        setPosts([...data.contacts]);
        setLoading(false);
      });
  }, []);
  console.log(posts);
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
          Contact Information
        </h1>
      </div>
    <div className="container mx-auto p-4 text-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-between">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-gray-200 p-4 mb-4 w-[49%]">
              <div>
                <div className="flex justify-center items-center">
                  <i className="fa-solid fa-user mr-2"></i>
                  <h2 className="text-xl font-bold">{post.name}</h2>
                </div>
                <div className="flex justify-center items-center"> 
                  <i class="fa-solid fa-envelope mr-2"></i>
                  <p>{post.email}</p>
                </div>
                <div className="flex justify-center items-center"> 
                  <i class="fa-solid fa-phone mr-2"></i>
                  <p>{post.phone}</p>
                </div>
                <div className="flex justify-center items-center"> 
                  <i class="fa-solid fa-message mr-2"></i>
                  <p>{post.message}</p>
                </div>
              </div>
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

export default ContactInfo;
