import React from "react";
import Testimonial from "./Testimonial";
const StudentsRemark = () => {
  return (
    <>
      {/* Students Remark */}
      <section className="relative w-full pt-32 md-min:pt-10 px-4 md-min:px-10 3xl:px-20 h-full">
        <div className="w-full">
          <div className="relative text-center">
          <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-xs md-min:text-sm md-min:pb-6 pb-3">
            Our Testimonials
          </p> 
          <h1 className="text-xl md-min:text-3xl font-bold relative">
            What Our{" "}
              <span>Students</span>
            <span className="block md-min:inline md-min:pt-6"> Say About Us</span>
          </h1>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default StudentsRemark;
