import React, { useState, useEffect } from "react";
import { FaBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editProfileThunk, viewProfileThunk } from "../redux/profileSlice";
import { ToastContainer, toast } from "react-toastify";
import "../components/styles.css";
import NavBar from "./NavBar/NavBar";

const Profile = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(userData.user.email);
  const [phone, setPhone] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([
    { courseName: "Course A", courseCode: "ABC123" },
    { courseName: "Course B", courseCode: "DEF456" },
    { courseName: "Course C", courseCode: "GHI789" },
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
    setNameEditing(true);
  };

  const data = {
    name,
    phone,
  };

  useEffect(() => {
    dispatch(viewProfileThunk(email))
      .then((res) => {
        console.log(res);
        setPhone(res.payload.data.profile.phone);
        setName(res.payload.data.profile.name);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }, [email]);
  console.log(data);
  const handleSaveClick = (e) => {
    e.preventDefault();
    dispatch(editProfileThunk(data))
      .then((res) => {
        console.log(res);
        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          localStorage.setItem("userInfo2", JSON.stringify(res.payload.data));
        }
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
    setIsEditing(false);
    setNameEditing(false);
  };

  return (
    <>
      <NavBar />
      <div className="hero2">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-4xl text-center m-2 p-2 mt-8 font-bold text-white z-10"
        >
          Your Profile
        </h1>
      </div>
      <div className="flex flex-col items-center text-black">
      <div className="flex">
        <div className="w-1/2 p-4 hidden lg:block">
          <img
            src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=2000"
            alt="Profile Photo"
            className="w-full h-auto rounded-full border-2 border-white"
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl mx-auto bg-blue rounded text-center mb-8 p-4 mt-8">
          <div className="text-left ml-4 mt-20">
            <h2 className="text-xl font-bold mb-2">
              Name:
              {nameEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded p-2"
                />
              ) : (
                <span> {name}</span>
              )}
            </h2>
            <div className="input-group mb-2 items-center">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                isEditing="false"
                // readOnly={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-2 bg-white max-w-fit"
              />
            </div>
            <div className="input-group mb-2 items-center">
              <label>Phone Number:</label>
              <input
                type="text"
                value={phone}
                readOnly={!isEditing}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded p-2 bg-white max-w-fit"
              />
            </div>
          </div>

          <div className="flex justify-center">
            {isEditing ? (
              <button
                onClick={handleSaveClick}
                className="btn bg-green-500 p-2 rounded-lg text-white"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="btn bg-blue-500 p-2 rounded-lg text-white"
              >
                Edit Profile
              </button>
            )}
          </div>

          <div className="flex justify-start p-2 mb-4">
            <div className="mr-4">
              <h2 className="text-3xl mt-2 text-black font-bold mb-2">
                Enrolled Courses
              </h2>
              <ul className="list-none  mt-2">
                {enrolledCourses.map((course, index) => (
                  <li key={index} className="mb-2 text-black flex items-center">
                    <FaBook className="mr-2 text-blue-500" />
                    {course.courseName} - {course.courseCode}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
};

export default Profile;
