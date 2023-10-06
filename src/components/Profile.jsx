import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editProfileThunk } from "../redux/profileSlice";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(false);
  const [name, setName] = useState(userData.user.name);
  const [email, setEmail] = useState(userData.user.email);
  const [phone, setPhone] = useState(userData.user.phone);
  const [address, setAddress] = useState("123 prayagraj Main St");
  const [enrolledCourses, setEnrolledCourses] = useState([
    { courseName: "Course A", courseCode: "ABC123" },
    { courseName: "Course B", courseCode: "DEF456" },
    { courseName: "Course C", courseCode: "GHI789" },
  ]);

  const handleEditClick = () => {
    setIsEditing(true);
    setNameEditing(true);
  };

  const userDataa = {
    name,
    email,
    phone,
    address,
  };

  const data = {
    name,
    email,
    phone,
  };

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
    // alert("Changes saved successfully");
  };

  const handleUploadClick = () => {
    console.log("Uploading profile picture...");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold mb-8">Your Profile</h1>
      <div className="flex">
        <div className="w-1/2 p-4 hidden lg:block">
          <img
            src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=2000"
            alt="Profile Photo"
            className="w-full h-auto rounded-full border-2 border-white"
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl mx-auto bg-blue rounded text-center mb-8 p-4">
          <div className="relative inline-block">
            <div className="profile-photo relative mb-4">
              <img
                src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                alt="Profile Photo"
                className="rounded-full w-32 h-32 border-2 border-white"
              />
              <button
                onClick={handleUploadClick}
                className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="text-left ml-4">
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
                <span>{name}</span>
              )}
            </h2>
            <div className="input-group mb-2">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                readOnly={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="input-group mb-2">
              <label>Phone Number:</label>
              <input
                type="text"
                value={phone}
                readOnly={!isEditing}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
            <div className="input-group mb-4">
              <label>Address:</label>
              <input
                type="text"
                value={address}
                readOnly={!isEditing}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded p-2"
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
  );
};

export default Profile;
