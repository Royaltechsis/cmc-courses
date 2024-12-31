import React from "react";
import aboutimg1 from "../../assets/images/about/about1.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";

const about_1 = () => {
  return (
    <>
      <section>
        <div className="flex md-min:flex-col-reverse lg-min:flex-row flex-col items-center justify-between md-min:px-8 py-20 sm:p-3">
          <div className="flex-1 sm:m-3 lg-min:px-24">
            <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm text-center md-min:text-left pb-4">
              About Us
            </p>
            <h1 className=" lg-min:block md-min:text-2xl text-lg text-black font-bold mb-5">
              High Quality Trainings and Guidance to Achieve Great Results with
              Your Online Skill
            </h1>
            <p className="text-gray-500 text-base md-min:text-left hidden md-min:flex   text-center sm:text-sm md-min:pt-10 pt-2 lg-min:pt-0">
              Welcome to ExpertSkillz academy, your premier destination for 
              top-notch online training and resources. Explore our platform to discover
              a wide range of courses and learning opportunities designed to help
              you unlock your full potential. Our premium training and tailored
              guidance empower you to succeed regardless of your prior
              experience.
            </p>
          </div>

          <div className="relative flex items-center justify-center mt-4 flex-col md-min:flew-row  md-min:mt-0">
            {/* Main about image */}
            <div className="relative md-min:inline-block flex  items-center justify-center">
            <img
              src={aboutimg1}
              alt="About Image"
              className="relative z-10   md-min:ml-6 sm:m-0 md-min:w-[80%] w-[80%] md-min:max-w-[400px] h-auto"
            />

            {/* Top-right decorative image */}
            <img
              src={about}
              alt="Decorative Image"
              className="absolute top-0 right-0 md-min:-translate-x-3 md-min:-translate-y-4 w-[70px] h-[70px] -translate-y-7
                sm:w-[70px] sm:h-[80px] md:w-[100px] md:h-[120px] lg:w-[120px] lg:h-[140px]
                rounded-xl z-0"
            />

            {/* Bottom-left decorative image */}
            <img
              src={about}
              alt="Decorative Image"
              className="absolute bottom-0 left-0 md-min:-translate-x-4  md-min:translate-y-4 translate-y-8 w-[70px] h-[70px]
                sm:w-[70px] sm:h-[80px] md:w-[100px] md:h-[120px] lg:w-[120px] lg:h-[140px]
                rounded-xl z-0"
            />
            </div>
             <p className="text-gray-500 text-base md-min:text-left flex md-min:hidden  sm:text-sm md-min:pt-10 pt-14 lg-min:pt-0">
              Welcome to ExpertSkillz academy, your premier destination for 
              top-notch online training and resources. Explore our platform to discover
              a wide range of courses and learning opportunities designed to help
              you unlock your full potential. Our premium training and tailored
              guidance empower you to succeed regardless of your prior
              experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default about_1;
