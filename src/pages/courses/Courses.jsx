import React from "react";
import CourseMission from "../../components/courses/CourseMission";
import FeaturedCourses from "../../components/courses/FeaturedCourses";
import CoursesPick from "../../components/courses/CoursesPick";
import CoursesChoice from "../../components/courses/CoursesChoice";
import CoursesFaq from "../../components/courses/CoursesFaq";
import AskQuestions from "../../components/main/Questions";

// import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <section className="py-10 pt-20 px-4">
        <div className="w-full items-center justify-center text-center pb-3 md-min:pb-1">
        <h1 className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-6xl pb-6">
            Our Courses
        </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 leading-[40px] max-w-3xl mx-auto lg-min:px-28">
            Learn Amazing Online Skills on ExpertSkillz
          </h1>
        </div>
        <CourseMission />
        <FeaturedCourses />
        <CoursesPick />
        <CoursesChoice />
        <CoursesFaq />
        <AskQuestions />
      </section>
    </>
  );
}

export default Courses;
