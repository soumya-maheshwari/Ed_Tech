import React, { useEffect, useState } from 'react'
import Carouselitem from './Carouselitem'
import NavBar from './NavBar/NavBar';
import ReactPaginate from 'react-paginate';

const AllTestimonials = () => {
  const [userData, setuserData] = useState([]);
  useEffect(() => {
    const feedbackData = async () => {
        console.log("hello");
        try {
            const res = await fetch("https://hea-zg7o.onrender.com/feedback/getFeedbacks", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            });
            console.log("feedback data called");
            const data = await res.json();
            console.log(data);
            if(res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            } 
            setuserData([...data.feedbacks]);
        } catch(err) {
            console.log(err);
        }
    }
    feedbackData();
  }, []);
  const items = userData;
  console.log(items);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
        <div>
            <NavBar/>
        </div>
        <div className='hero2'>
            <h1 data-aos="fade-up" data-aos-duration="1000" className='text-4xl text-center m-2 pt-20 mt-8 font-bold text-white z-10'>All Testimonials</h1>
        </div>
        <div className="flex">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:w-[86%] mx-auto w-full'>
                {currentItems.map((data, index) => (
                    <Carouselitem
                        key={index}
                        name={data.name}
                        desc={data.comment}
                        course={data.course}
                        rating={data.rating}
                    />
                ))}
            </div>
        </div>
        <div className='flex justify-center items-center m-4 mb-8'>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination flex space-x-3 text-xl"
                previousLinkClassName="prev font-extrabold bg-primary  rounded-full px-3 py-2"
                nextLinkClassName="next font-extrabold bg-primary text-white rounded-full px-3 py-2"
                pageLinkClassName="page-link text-primary py-1 px-2 border rounded-md hover:bg-blue-400 hover:text-white"
                activeLinkClassName="active bg-primary text-white hover:bg-primary"
                breakLinkClassName="text-primary"
            />
        </div>
    </>
  )
}

export default AllTestimonials