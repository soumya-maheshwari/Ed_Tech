import React, { useEffect, useState } from "react";
import signin_image from "./Signin-img.svg";
import Footer from "./Footer";
import NavBar from "../components/NavBar/NavBar";
import { NavLink } from "react-router-dom";
import "./signin.css";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/redux/authSlice";
import { ToastContainer, toast } from "react-toastify";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const userData = {
    email,
    password,
  };

  console.log(userData);

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

  const handleLogin = () => {
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
    dispatch(loginUserThunk(userData))
      .then((res) => {
        console.log(res);
        setLoading(res.payload.data.isLoading);
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
        }
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
          Sign In
        </h1>
      </div>
      <div className="page ">
        <div className="box border border-gray-300 shadow-md lg:w-4/5 my-20 bg-white max-h-[600px]">
          <div className="left-box ">
            <h1 className="heading text-4xl font-extrabold text-black">
              Sign In
            </h1>
            <form className="input-form">
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
              <div className="submit mt-8">
                <div className="text-center">
                  <div
                    className="btn bg-primary hover:bg-white text-white border-primary hover:text-primary hover:border-primary text-center shadow-gray-300 shadow-md hover:shadow-2xl"
                    onClick={handleLogin}
                  >
                    Sign In
                  </div>
                  <div className="p-2">Forget Password!!</div>
                </div>
                <br />
              </div>
            </form>
            <div className="text-center">
              <div className="p-2 line">OR</div>
              <div className="h-full flex justify-center items-end z-10">
                <a href="#" className="hover:text-red-500">
                  <i class="m-2 text-xl fa-brands fa-google"></i>
                </a>
                <a href="#" className="hover:text-blue-500 z-10">
                  <i className="m-2 text-xl hover:text-blue-500 fab fa-facebook z-10"></i>
                </a>
                <a href="#" className="hover:text-black">
                  <i class="m-2 text-xl fa-brands fa-github"></i>
                </a>
                <a href="#" className="hover:text-blue-500">
                  <i className="m-2 text-xl fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="text-center p-8">
              <NavLink to="/signup">
                {" "}
                New Here?{" "}
                <span className="text-primary hover:underline">
                  Register!!{" "}
                </span>
              </NavLink>
            </div>
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

export default Signin;