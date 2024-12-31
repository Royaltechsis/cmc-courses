import React from "react";
import aboutimg3 from "../../assets/images/about/about3.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";

const About_3 = () => {
  return (
    <>
      <section className="px-3 pt-3">
        <div className="flex md-min:flex-col-reverse  flex-col lg-min:flex-row items-center justify-between md-min:px-5 pt-20 pb-10">
          <div className="flex-1 lg-min:px-20 mt-12 lg-min:mt-0">
            <p className="text-[#33FFA8] md-min:text-left text-center font-extrabold uppercase tracking-wide text-sm pb-4">
              Our Vision
            </p>
            <h2 className=" lg-min:block md-min:text-2xl text-xl  text-black font-bold mb-5">
              Cultivating a Brighter Learning and Earning Future For Everyone
            </h2>
            <p className="text-gray-500 text-base hidden md-min:block sm:text-sm md-min:pr-20">
              At ExpertSkillz, we envision a future where anyone can access the
              skills they need to succeed, regardless of their background or
              location. By continuously innovating and adapting to the changing
              needs of our users, we aim to create a world where learning and
              earning knows no bounds.
            </p>
          </div>

          <div className="relative md-min:inline-block flex items-center justify-center mt-4  md-min:mt-0 flex-col">
            {/* Main about image */} 
              <div className="relative md-min:inline-block flex  items-center justify-center">
            <img
              src={aboutimg3}
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
            <p className="text-gray-500 text-base block md-min:hidden sm:text-sm md-min:pr-20 md-min:pt-0 pt-14">
              At ExpertSkillz, we envision a future where anyone can access the
              skills they need to succeed, regardless of their background or
              location. By continuously innovating and adapting to the changing
              needs of our users, we aim to create a world where learning and
              earning knows no bounds.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_3;
