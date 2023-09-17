import React from "react";
import "./style.css";
import london from "./class1.jpg";
import newyork from "./class2.jpg";
import wash from "./class3.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery-section pt-2">
        <h1 className="gallery-head text-black">Infrastructure Gallery</h1>
        <p className="gallery-para text-black">Insights of our classrooms</p>

        <div class="row-campus">
          <div class="campus-col">
            <img src={london} alt="" className="gallery-img" />
            <div class="layer">
              <h3>COMPUTER</h3>
            </div>
          </div>
          <div class="campus-col">
            <img src={newyork} alt="" className="gallery-img" />
            <div class="layer">
              <h3>MATHS</h3>
            </div>
          </div>
          <div class="campus-col">
            <img src={wash} alt="" className="gallery-img" />
            <div class="layer">
              <h3>PHYSICS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
