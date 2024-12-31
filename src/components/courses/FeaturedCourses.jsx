import React from "react";
import { CiLock } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdOutlineAccessTime, MdOutlineSchool } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Testimonials from "../home/Testimonial";
import { popular_Courses_Data, recommended_Courses_Data } from "./CoursesCard";

const FeaturedCourses = () => {
  const renderCourseCard = (course, index, isPopular = false) => {
    const {
      image,
      title,
      rating,
      reviews,
      description,
      modules,
      duration,
      instructor,
      price,
    } = course;

    return (
      <div
        key={index}
        className="shadow-2xl rounded-t-2xl rounded-b-lg bg-white pb-4 transition-all duration-700 cursor-pointer hover:scale-[1.03]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] max-h-full object-cover rounded-t-2xl transition-all duration-700 hover:filter hover:grayscale"
        />
        <div className="inner py-3 px-5">
          <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600 mb-4">
            <h3 className="flex items-center gap-1 bg-[#E7FFF5] px-2 py-1 rounded-lg text-sm font-semibold text-[#33FFA8]">{title}</h3>
            <p className="flex items-center gap-1 font-bold text-gray-400">
              <AiFillStar size={16} className="text-yellow-400" /> {rating} ({reviews})
            </p>
          </div>
          <p className="md-min:text-md text-sm text-gray-800 font-bold mb-5">{description}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
            <p className="flex items-center capitalize gap-1 font-bold text-gray-400">
              <MdOutlineSchool size={16} className="text-[#33FFA8]" /> {modules}
            </p>
            <p className="flex items-center gap-1 font-bold text-gray-400">
              <MdOutlineAccessTime size={16} className="text-[#33FFA8]" /> {duration}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <NavLink to={title.toLowerCase() === "affiliate marketing" ? "https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc" : "#"}>
              <p className="font-bold text-gray-800 md-min:text-base  text-sm">
                Course Status: {title.toLowerCase() === "affiliate marketing" ? "opened" : "locked"}
              </p>
            </NavLink>
            <NavLink to={title.toLowerCase() === "affiliate marketing" ? "https://expertskillz.pledre.school/course-details/complete-affiliate-mastery-course-cmc" : "#"}>
              <p>
                {title.toLowerCase() === "affiliate marketing" ? (
                  <HiArrowLongRight size={28} className="text-[#33FFA8] font-bold" />
                ) : (
                  <CiLock size={22} className="text-[#33FFA8] hover:animate-bounce" />
                )}
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-4 px-4 md-min:px-10">
      <h1 className="text-[#33FFA8] font-extrabold text-center uppercase tracking-wide text-xs md-min:text-sm pb-6">
        featured courses
      </h1>

      {/* Popular Courses Section */}
      <section className="Popular md-min:pt-10 md-min:pb-10">
        <h1 className="text-2xl capitalize md-min::text-4xl font-bold text-gray-800">popular courses</h1>
        <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col md-min:mt-14 mt-8">
          {popular_Courses_Data.map((course, index) => renderCourseCard(course, index, true))}
        </div>
      </section>

      <p className="text-xl capitalize text-center md-min:text-4xl font-bold text-gray-800 pt-10">
        Recent Courses Testimonials
      </p>
      <Testimonials />

      {/* Recommended Courses Section */}
      <section className="Recommended pt-10">
        <h1 className="text-xl capitalize md-min:text-4xl font-bold text-gray-800 text-center md-min:text-left">available recommended courses</h1>
        <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col mt-14">
          {recommended_Courses_Data.map((course, index) => renderCourseCard(course, index))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedCourses;
