import React from "react";
import Img from "../../assets/images/person3.png";
import HomeButton from "../home/Button";
const CoursesPick = () => {
  return (
    <>
      <section className="relative pt-10 md-min:px-6 h-full w-full ">
        {/* Header section */}
        <div className="relative text-center">
        </div>
        {/* About us body */}
        <div className="relative mt-10 lg-min:flex space-x-6 justify-evenly md:justify-center items-center xl:justify-between max-w-screen-lg h-full w-full md-min:block flex flex-col ">
          <div className="md-min:w-[1500px] ml-10">
            <img src={Img} alt="person" className="w-full" />
          </div>
          <div className="w-full lg-min:w-40rem flex flex-col justify-between py-8 pb-20 md-min:pl-20 md-min:pr-40">
          <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm pb-4">
            Pick a Course
          </p>
            <h1 className="font-bold text-xl md-min:text-3xl leading-[1.5]">
              Pick a Course to Get Started in the Academy
            </h1>

            <div>
              <p className="mt-8 font-normal text-base text-[#4F4E55] lg-min:w-[450px] 3xl:w-[600px] 3xl:text-2xl">
                Explore our diverse range of courses covering various online
                skills. For example, you can choose affiliate marketing and
                register for the course as a student in our academy to begin your
                training journey.
              </p>
            </div>
            <HomeButton
              divclassName={"mt-10"}
              text={"Start Now"}
              OnClick={"/"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPick;
