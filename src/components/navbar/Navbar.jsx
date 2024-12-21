import React, { useState, useContext } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTimes,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import avatar from "../../assets/images/avatar.png";
import logo from "../../assets/images/logo2.png";
import "../main/index";
import { navData } from "./NavLinks";
import { AuthContext } from "../auth/AuthContext";

function Navbar() {
  const { isLoggedIn, userName, setIsLoggedIn, setUserName } =
    useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(true);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setIsLoggedIn(false);
    setUserName("");
    toast.success("Logged out successfully", { autoClose: 2000 });
  };

  return (
    <>
      <nav
        className="relative flex items-center justify-between px-[3.5rem] py-5 w-full tablet:px-8"

        // className={`bg-white flex items-center justify-between px-[3.5rem] py-5 w-full fixed top-0 transition-all z-40 ${
        //   isScrolled ? "border-b-2 border-gray-200" : ""
        // }`}
      >
        <div className="logo">
          <Link
            to="/"
            className="text-fontSize1 font-[500] hover:font-[600] transition-opacity
             text-white hover:text-[wheat] hover:delay-[0.3s] ease-linear"
          >
            <img src={logo} alt="Logo" className="w-[220px] 3xl:w-52" />
          </Link>
        </div>
        {/* big screen */}
        <ul className="hidden lg-min:flex  3xl:text-2xl items-center gap-12  list-none">
          {navData.map(({ to, label }, index) => {
            return (
              <li className="text-gray-300" key={index}>
                <NavLink
                  to={to}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* login */}
        {!isLoggedIn && (
          <div className="flex items-center 3xl:text-2xl lg:hidden gap-9">
            <li className="text-gray-light list-none">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
              >
                Sign In
              </NavLink>
            </li>

            <NavLink to="/get-started">
              <button className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] text-sm text-bold border-black border-[1.6px] 3xl:text-2xl hover:bg-blue-700 font-bold py-2 px-4 rounded-[12px]">
                Get Started
              </button>
            </NavLink>
          </div>
        )}

        {isLoggedIn && (
          <div className="flex items-center sm:hidden">
            <a
              href="/"
              className="flex items-center mr-3 text-lightBlue pointer-events-none"
            >
              <img src={avatar} alt="user icon" className=" w-[25px] mr-1" />
              Hi, {userName}
            </a>
            <li className="text-white list-none">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                onClick={logoutUser}
              >
                Logout
              </NavLink>
            </li>
          </div>
        )}

        {/* mobile screen */}

        <ul
          className={`lg-min:hidden fixed top-0 left-0 z-50 w-full  h-screen font-semibold text-lg tracking-wide  flex-col justify-between items-center space-y-4  py-7 bg-white navbar list-none
      ${isMenuOpen ? "flex show" : "hidden"}`}
        >
          {isLoggedIn && (
            <li className="text-lightpurple flex justify-between">
              <a href="/" className="flex items-center">
                <img src={avatar} alt="user icon" className=" w-[30px] mr-2" />
                Hi, {userName}
              </a>
            </li>
          )}

          <li className="">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "active-mobile" : isPending ? "pending" : ""
              }
              onClick={toggle}
            >
              Home
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isActive ? "active-mobile" : isPending ? "pending" : ""
              }
              onClick={toggle}
            >
              About Us
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/courses"
              className={({ isActive, isPending }) =>
                isActive ? "active-mobile" : isPending ? "pending" : ""
              }
              onClick={toggle}
            >
              Our Courses
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to="/faqs"
              className={({ isActive, isPending }) =>
                isActive ? "active-mobile" : isPending ? "pending" : ""
              }
              onClick={toggle}
            >
              FAQ
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/affiliate"
              className={({ isActive, isPending }) =>
                isActive ? "active-mobile" : isPending ? "pending" : ""
              }
              onClick={toggle}
            >
              Affiliate
            </NavLink>
          </li>

          {!isLoggedIn && (
            <li className="">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                onClick={toggle}
              >
                Sign In
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li className=" background3 px-2 py-1 rounded-lg border-black border-[1px]">
              <NavLink
                to="/getstarted"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                onClick={toggle}
              >
                Get Started
              </NavLink>
            </li>
          )}

          {isLoggedIn && (
            <li className="">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : ""
                }
                onClick={() => {
                  logoutUser();
                  toggle();
                }}
              >
                Log out
              </NavLink>
            </li>
          )}

          <div className="flex items-center justify-center space-x-5 flex-row ">
            <Link
              to="/https://web.whatsapp.com"
              className="p-2 background3 rounded-lg text-white"
            >
              <FaWhatsapp
                className="
      delay-[0.3s] transition-all hover:font-[600] 
      hover:text-[wheat] hover:text-[2.5rem]"
                size={32}
              />
            </Link>
            <Link
              to="/https://web.whatsapp.com"
              className="p-2 background3 rounded-lg text-white"
            >
              <FaTwitter
                className="
      delay-[0.3s] transition-all hover:font-[600] 
      hover:text-[wheat] hover:text-[2.5rem]"
                size={32}
              />
            </Link>
            <Link
              to="/https://web.whatsapp.com"
              className="p-2 background3 rounded-lg text-white"
            >
              <FaInstagram
                className=" 
      delay-[0.3s] transition-all hover:font-[600] 
      hover:text-[wheat] hover:text-[2.5rem]"
                size={32}
              />
            </Link>
            <Link
              to="/https://web.whatsapp.com"
              className="p-2 background3 rounded-lg text-white"
            >
              <FaFacebook
                className=" 
      delay-[0.3s] transition-all hover:font-[600] 
      hover:text-[wheat] hover:text-[2.5rem]"
                size={32}
              />
            </Link>
          </div>
          <button onClick={toggle}>
            <FaTimes className="w-7 h-7 text-[#33FFA8] " />
          </button>
        </ul>
        <button className="cursor-pointer lg-min:hidden block" onClick={toggle}>
          {isMenuOpen ? (
            <FaTimes className="w-7 h-7 " />
          ) : (
            <FaBars className="w-7 h-7" />
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
