import React from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuBookOpenCheck } from "react-icons/lu";
import { FaBookAtlas } from "react-icons/fa6";
import { BiListCheck } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
const CoursesChoice = () => {
  return (
    <>
      <div>
        {/* {" "} */}

        <div className="choices-container pt-20 md-min:pt-32 md-min:px-10 px-4 py-8">
        <p className="text-[#33FFA8] font-extrabold text-center uppercase tracking-wide text-xs m-min:text-sm pb-6">
            Why Choose Us
        </p> 
          <h1 className="md-min:text-2xl md-min:text-4xl font-bold text-center text-gray-800 md-min:leading-[40px] max-w-3xl mx-auto md-min:px-28 text-xl">
            Why You should Choose ExpertSkillz
          </h1>
          <div className="courses-inner grid  grid-cols-1  md-min:grid-cols-2 lg-min:grid-cols-3 gap-x-8 gap-y-10 pt-12 font-semibold text-center">
            <div className="each-course p-14 shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6 left-auto   background3">
                <HiOutlineUsers size={34} className="" />
              </div>

              <p>
                Experienced
                <br /> Instructors
              </p>
            </div>
            <div className="each-course  p-14  shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6  left-auto  background3">
                <LuBookOpenCheck size={34} className="" />
              </div>

              <p>
                Practical and hands-
                <br />
                learning approach
              </p>
            </div>
            <div className="each-course  p-14   shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6  left-auto background3">
                <FaBookAtlas size={34} className="" />
              </div>

              <p>
                Comprehensive course
                <br />
                materials
              </p>
            </div>
            <div className="each-course lg-min:hidden  p-14   shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6  left-auto  background3">
                <BiListCheck size={34} className="" />
              </div>

              <p>
                Flexibility in
                <br /> learning options
              </p>
            </div>
            <div className="each-course lg-min:hidden  p-14   shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6  left-auto  background3">
                <BsPersonCheck size={34} className="" />
              </div>

              <p>
                Success stories
                <br />
                from past students
              </p>
            </div>
          </div>

          <div className="courses-inner hidden lg-min:flex justify-center space-x-7 pt-12 font-semibold text-center">
            <div className="each-course  py-16 px-24   shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6  left-auto  background3">
                <BiListCheck size={34} className="" />
              </div>

              <p>
                Flexibility in
                <br /> learning options
              </p>
            </div>
            <div className="each-course  py-16 px-24  shadow-md rounded-3xl bg-white border relative flex items-center justify-center">
              <div className="p-2 rounded-full absolute  -top-6  left-auto background3">
                <BsPersonCheck size={34} className="" />
              </div>

              <p>
                Success stories
                <br />
                from past students
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesChoice;
