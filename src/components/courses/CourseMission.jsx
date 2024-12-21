import React from "react";
import missionBg from "../../assets/images/courses-main.png";
import background from "../../assets/images/background1.png";

const CourseMission = () => {
  return (
    <>
      <section className="relative">
        {/* Background image */}
        <div className="hidden md-min:block w-[650px] absolute -z-30 -top-10 left-0 h-full">
          <img src={background} alt="line" className="w-full object-cover" />
        </div>

        <div className="lg-min:flex md-min:px-10 lg-min:px-10 pb-10 pt-16">
          {/* Left Text Section */}
          <div className="flex-1 flex-col lg-min:pt-24 space-y-5 lg-min:pr-28">
            <h1 className="font-bold text-2xl leading-[1.5]">
              Everything you can do in a physical classroom,{" "}
              <span className="text-[#2afbbc]">you can do with ExpertSkillz</span>
            </h1>
            <p className="font-normal text-base text-[#4F4E55] 3xl:w-[600px] 3xl:text-2xl">
              Experience the versatility of ExpertSkillz. Our academy offers all
              the benefits of a physical classroom, from interactive learning to
              personalized support, in a convenient online environment. Explore
              endless possibilities today!
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Image Wrapper */}
            <div className="relative inline-block">
              {/* Top-left color block */}
              <div
                className="absolute top-0 left-0 -translate-x-4 -translate-y-4 w-[50px] h-[60px]
                sm:w-[70px] sm:h-[80px] md:w-[100px] md:h-[120px] lg:w-[120px] lg:h-[140px]
                bg-[#0FD2D2] rounded-xl z-0"
              ></div>

              {/* Main Image */}
              <img
                src={missionBg}
                alt="Card Image"
                className="relative z-10 rounded-xl w-full max-w-[530px] h-[350px] md:h-[350px] object-cover"
              />

              {/* Bottom-right color block */}
              <div
                className="absolute bottom-0 right-0 translate-x-4 translate-y-4 w-[50px] h-[60px]
                sm:w-[70px] sm:h-[80px] md:w-[100px] md:h-[120px] lg:w-[120px] lg:h-[140px]
                bg-[#33FFA8] rounded-xl z-0"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseMission;
