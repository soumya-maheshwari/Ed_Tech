import React, { useState, useEffect } from "react";

const ContactInfo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-extrabold mb-4">Contact Information</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-between">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-gray-200 p-4 mb-4 w-full">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p>{post.body}</p>
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
