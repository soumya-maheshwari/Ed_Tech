import React from "react";
import profile from "./profile-img.svg";
import { Rate } from "antd";

const Carouselitem = ({ name, desc, img, course, rating }) => {
  return (
    <div className="border h-[25rem] xl:h-[22rem] mx-3 p-2 rounded-md m-8 shadow-md hover:shadow-2xl transition-all duration-300 ease-out">
      <div className="flex p-3">
        <img
          src={img ? img : profile}
          className="object-cover h-20 w-20 rounded-full"
        />
        <div className="p-2">
          <div>{name}</div>
          <Rate className="text-primary" disabled={true} value={rating} />
        </div>
      </div>
      <div className="p-3">
        <div className="text-xl text-black font-bold">{course}</div>
        {desc}
      </div>
    </div>
  );
};

export default Carouselitem;
