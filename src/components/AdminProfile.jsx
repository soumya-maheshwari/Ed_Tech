import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nameEditing, setNameEditing] = useState(false);
  const [name, setName] = useState("Anuj Mishra");
  const [email, setEmail] = useState("anuj@example.com");
  const [phone, setPhone] = useState("555-555-9555");

  const handleEditClick = () => {
    setIsEditing(true);
    setNameEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setNameEditing(false);
    alert("Changes saved successfully");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-center font-extrabold mb-8">
        Admin Profile
      </h1>
      <div className="flex">
        <div className="w-1/2 p-4 hidden lg:block">
          <img
            src="https://img.freepik.com/free-vector/profile-interface-concept-illustration_114360-2850.jpg?w=2000"
            alt="Profile Photo"
            className="w-full h-auto rounded-full border-2 border-white"
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl mx-auto bg-blue rounded text-center mb-8 p-4">
          <div className="text-left ml-4 mt-10">
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
        </div>
      </div>
      <div className="w-full sm:w-8/12 p-4 flex flex-wrap justify-between">
        <div className="flex justify-between w-full p-4">
          <div className="w-6/12">
            <Link to="/Enrolled">
              <button className="w-full p-4 rounded-lg bg-blue-600 mb-4 text-white border">
                Enrolled Courses
              </button>
            </Link>
          </div>
          <div className="w-6/12">
            <button className="w-full p-4 rounded-lg bg-blue-600 mb-4 text-white border">
              Review
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full p-4">
          <div className="w-6/12">
            <Link to="/ContactInfo">
              <button className="w-full p-4 rounded-lg bg-blue-600 mb-4 text-white border">
                Contact Information
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center w-full align-center">
          <div>
            <button className="bg-blue-600 text-white p-2 rounded">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
