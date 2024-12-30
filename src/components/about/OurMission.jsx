import React from "react";
import aboutimg2 from "../../assets/images/about/about2.png";
import about from "../../assets/images/decorative_images/decorativeImage.svg";

const about_2 = () => {
  return (
    <>
      <section>
        <div className="flex md-min:flex-col flex-col-reverse lg-min:flex-row items-center justify-between px-16 py-20 sm:p-3">
         <div className="relative">
            {/* Main about image */}
            <div className="relative md-min:inline-block flex items-center justify-center mt-4  md-min:mt-0">
            <img
              src={aboutimg2}
              alt="About Image"
              className="relative z-10  md-min:ml-6 md-min:w-[80%] w-[80%] md-min:max-w-[400px] h-auto"
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

          <div className="flex-1 md-min:mx-10 pt-12">
            <p className="text-[#33FFA8] text-center md-min:text-left font-extrabold uppercase tracking-wide text-sm pb-4">
              Our Mission
            </p>
            <h2 className="hidden lg-min:block text-2xl text-black font-bold mb-5">
              Our Mission at ExpertSkillz is Simple yet Impactful
            </h2>
            <p className="text-gray-500 text-base sm:text-sm">
              Our mission is to empower individuals with the tools and knowledge
              they need to thrive in the digital economy. Through our platform,
              we strive to make learning accessible, affordable, and engaging
              for people around the world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default about_2;
