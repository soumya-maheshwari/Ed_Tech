import { useState, useEffect } from "react";
import "./NavBar.css";
import defaultLogo from "../../../public/images/logo21.png";
import scrolledLogo from "../../../public/images/logo21.png";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(defaultLogo);

  const user = JSON.parse(localStorage.getItem("userInfo")) ? true : false;
  console.log(user);

  const user_name = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(user_name.user.name);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
        setSelectedLogo(scrolledLogo);
      } else {
        setScrolled(false);
        setSelectedLogo(defaultLogo);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`shadow-sm z-50 fixed top-0 left-0 right-0 ${
        scrolled ? "scrolled-bg" : ""
      }`}
    >
      <header>
        <div className="relative md:w-10/12 mx-auto">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="relative z-20">
                <a href="/">
                  <img
                    className="w-[17rem] h-[8rem] ml-[-33px]"
                    id="logo"
                    src={selectedLogo}
                    alt="Your Company"
                  />
                </a>
              </div>

              <div className="flex items-center justify-end">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className={`m-auto mt-2 h-0.5 w-6 rounded ${
                      scrolled ? "bg-[#fff]" : "bg-[#fff]"
                    } transition duration-300 `}
                  ></div>
                  <div
                    aria-hidden="true"
                    className={`m-auto mt-2 h-0.5 w-6 rounded ${
                      scrolled ? "bg-[#fff]" : "bg-[#fff]"
                    } transition duration-300 `}
                  ></div>
                  <div
                    aria-hidden="true"
                    className={`m-auto mt-2 h-0.5 w-6 rounded ${
                      scrolled ? "bg-[#fff]" : "bg-[#fff]"
                    } transition duration-300 `}
                  ></div>
                </label>
                <div
                  className={`z-10 peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-3.5rem)] md:w-[calc(100%-10rem)] translate-x-[-100%] shadow-xl transition duration-300 lg:w-auto lg:static lg:shadow-none lg:translate-x-0  ${
                    scrolled ? "scrolled-bg" : "bg-[#0D6EFD] md:bg-[#0D6EFD]"
                  }  lg:bg-transparent`}
                >
                  <div className="flex  flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul
                      className={`${
                        scrolled ? "scrolled-text" : "text-[#000]"
                      } pl-6 pt-32  text-[17px] space-y-8 md:pl-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0`}
                    >
                      <li>
                        <a
                          href="/"
                          className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#fff] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="relative">
                            <NavLink to="/">Home</NavLink>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#fff] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="relative ">
                            <NavLink to="/allcourses">Courses</NavLink>
                          </span>
                        </a>
                      </li>

                      <li>
                        <a
                          href="/"
                          className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#fff] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="relative ">
                            <NavLink to="/about">About Us</NavLink>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#fff] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="relative ">
                            <NavLink to="/contact">Contact Us</NavLink>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          // className="group relative before:absolute before:inset-x-0 before:top-6 before:h-1 before:origin-right before:scale-x-0 before:bg-[#fff] before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100"
                        >
                          <span className="k ">
                            {user ? (
                              <>
                                <AiOutlineUser
                                  style={{ width: "26px", height: "26px" }}
                                />
                                {user_name.user.name}
                              </>
                            ) : (
                              <NavLink to="/signin">Sign In</NavLink>
                            )}
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
