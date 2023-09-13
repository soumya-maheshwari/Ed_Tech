import React from "react";
import image from "./learning.svg";
import "./style.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./4.png";

const Benefits = () => {
  return (
    <>
      <div className="benfits-section">
        <div className="left-row">
          <img src={image} alt="" className="img-class" />
        </div>

        <div className="right-row">
          <p className="heading-benefits">Learn Anything</p>
          <p className="ben-desc">Benefits About Our Learning Expertise</p>
          <div className="items">
            <div className="item1">
              <img src={img2} alt="" className="icon-class" />

              <div className="textt">
                <p className="item-title">Expert Instructors.</p>

                <p className="item-desc">
                  We ensure that every student receives top-notch education,
                  guide students, providing quality education and mentorship to
                  reach their full potential.
                </p>
              </div>
            </div>

            <div className="item1">
              <img src={img1} alt="" className="icon-class" />

              <div className="textt">
                <p className="item-title">Study Material.</p>

                <p className="item-desc">
                  We provide our students with a wealth of high-quality study
                  materials to support their learning journey to image the
                  entire curriculum comprehensively.
                </p>
              </div>
            </div>

            <div className="item1">
              <img src={img3} alt="" className="icon-class" />

              <div className="textt">
                <p className="item-title">Doubt Clearing Sessions.</p>

                <p className="item-desc">
                  We offer dedicated doubt clearing sessions to ensure that no
                  query goes unanswered to empower you to gain a deeper
                  understanding of the subject matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
