import { useState } from "react";
import {
  BsFileEarmarkText,
  BsPencil,
  BsBox,
  BsCheck,
  BsFillEnvelopePaperFill,
} from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { BiUserPin } from "react-icons/bi";

const steps = [
  {
    name: "Enrollment",
    description:
      "You can browse through the available courses, understand the course descriptions, and the enrollment process. ",
    icon: BsFillEnvelopePaperFill,
  },
  {
    name: "Experienced Instructors",
    description:
      "They play a crucial role in guiding students and providing quality education with teaching methodologies.",
    icon: BiUserPin,
  },
  {
    name: "Classroom Learning",
    description:
      "Well-equipped classrooms, libraries, study materials, and other resources that enhance the learning experience to give prospective students a visual idea.",
    icon: FaChalkboardTeacher,
  },
  {
    name: "Progress Tracking",
    description:
      "Our institute tracks the progress of each student and offers additional assistance when needed. Counseling or mentoring services are also available.",
    icon: GiProgression,
  },
];

const HowWeWork = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleCardHover = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className=" py-16 work-container">
      <h2 className=" work-head ">How We Work</h2>
      <div className="max-w-screen-lg mx-auto work-cont">
        <div className="relative h-2 bg-blue-300 mt-10 md:mt-0 mb-12 rounded-full progress">
          <div
            className="absolute left-0 top-0 h-2 bg-blue-700 rounded-full"
            style={{ width: `${25 * (currentStep + 1)}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              style={{
                textAlign: "center",
                alignItems: "center",
              }}
              key={step.name}
              className={`${
                index <= currentStep ? "bg-blue-400" : "bg-blue-600"
              } 
              rounded-md p-3 shadow-md text-white`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(currentStep)}
            >
              <step.icon
                className={`w-14 h-14  ${
                  index <= currentStep ? "text-white-400" : "text-white-500"
                }`}
                id="icon-work"
              />
              <h3 className="text-md md:text-lg font-bold text-center mb-6 step-class">
                {step.name}
              </h3>
              <p className="text-sm md:text-sm text-center mb-7 step-class2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
