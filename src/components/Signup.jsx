import React, { useEffect, useState } from "react";
import signin_image from "./signup-img.svg";
import Footer from "./Footer";
import NavBar from "../components/NavBar/NavBar";
import { NavLink, useNavigate } from "react-router-dom";
import "./signin.css";
import { useDispatch } from "react-redux";
import { registerUserThunk } from "../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  function validatepassword(password) {
    let regexPasswod =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    let result = regexPasswod.test(password);
    return result;
  }

  function validatemail(email) {
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let result = regexMail.test(email);
    return result;
  }

  const userData = {
    name,
    email,
    password,
    phone,
  };

  const handleSignup = () => {
    console.log(validatemail(email));
    if (!validatemail(email)) {
      toast.error(`Invalid email format`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!validatepassword(password)) {
      toast.error(
        `Invalid password format, Use capital ,small letters, numbers and special characters`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      return;
    }

    dispatch(registerUserThunk(userData))
      .then((res) => {
        console.log(res);

        if (res.payload.data.success) {
          toast.success(`${res.payload.data.msg}`, {
            position: "top-right",
            // theme: "dark",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setName("");
          setEmail("");
          setPassword("");
          setPhone("");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
        localStorage.setItem("userInfo", JSON.stringify(res.payload.data));

        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
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
          Sign Up
        </h1>
      </div>
      <div className="page">
        <div className="box border border-gray-300  lg:w-4/5  shadow-md my-20 bg-white max-h-[650px]">
          <div className="left-box ">
            <h1 className="heading text-4xl text-black font-extrabold">
              Sign Up
            </h1>
            <form className="input-form">
              <input
                className="signup-input input input-bordered w-full mt-3 bg-white"
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="signup-input input input-bordered w-full mt-3 bg-white"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="signup-input input input-bordered w-full mt-3 bg-white"
                type="password"
                name="password"
                placeholder="Enter password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="signup-input input input-bordered w-full mt-3 bg-white"
                type="text"
                name="number"
                placeholder="Enter your phone number"
                autoComplete="off"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="submit my-8">
                <div className="text-center">
                  <div
                    className="btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl"
                    onClick={handleSignup}
                  >
                    Sign Up
                  </div>
                </div>
                <br />
                <NavLink to="/signin">
                  {" "}
                  Alreaady Registered?{" "}
                  <span className="text-primary hover:underline">
                    Sign In
                  </span>{" "}
                </NavLink>
              </div>
            </form>
          </div>
          <div className="right-box">
            <img
              className="signup-image"
              src={signin_image}
              alt="Person Avatar"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default SignUp;
