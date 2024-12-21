import React from "react";
import aboutimg1 from "../../assets/images/about/about1.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";

const about_1 = () => {
  return (
    <>
      <section>
        <div className="flex flex-col-reverse lg-min:flex-row items-center justify-between px-8 py-20 sm:p-3">
          <div className="flex-1 sm:m-3 lg-min:px-24">
            <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm pb-4">
              About Us
            </p>
            <h1 className="hidden lg-min:block text-2xl text-black font-bold mb-5">
              High Quality Trainings and Guidance to Achieve Great Results with
              Your Online Skill
            </h1>
            <p className="text-gray-500 text-base sm:text-sm pt-10 lg-min:pt-0">
              Welcome to ExpertSkillz academy, your premier destination for 
              top-notch online training and resources. Explore our platform to discover
              a wide range of courses and learning opportunities designed to help
              you unlock your full potential. Our premium training and tailored
              guidance empower you to succeed regardless of your prior
              experience.
            </p>
          </div>

          <div className="relative">
            {/* Main about image */}
            <div className="relative inline-block">
            <img
              src={aboutimg1}
              alt="About Image"
              className="relative z-10 ml-6 sm:m-0 w-[80%] sm:w-[90%] lg:w-[70%] max-w-[400px] h-auto"
            />

            {/* Top-right decorative image */}
            <img
              src={about}
              alt="Decorative Image"
              className="absolute top-0 right-0 -translate-x-4 -translate-y-4 w-[100px] h-[100px]
                sm:w-[70px] sm:h-[80px] md:w-[100px] md:h-[120px] lg:w-[120px] lg:h-[140px]
                rounded-xl z-0"
            />

            {/* Bottom-left decorative image */}
            <img
              src={about}
              alt="Decorative Image"
              className="absolute bottom-0 left-0 -translate-x-4 translate-y-4 w-[100px] h-[100px]
                sm:w-[70px] sm:h-[80px] md:w-[100px] md:h-[120px] lg:w-[120px] lg:h-[140px]
                rounded-xl z-0"
            />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default about_1;
