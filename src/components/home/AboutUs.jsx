import React from "react";
import background from "../../assets/images/background.png";
import HomeImg2 from "../../assets/images/person2.png";
import HomeButton from "./Button";

const AboutUs = () => {
  return (
    <>
      {/* About Us section */}
      <section className="relative py-10 px-6 h-full w-full">
        {/* Arrow and the spiral background image section */}
        <div className="hidden md-min:block w-[650px] absolute -z-30 -top-10 right-0 h-full">
          <img src={background} alt="line" className="w-full object-cover" />
        </div>
        {/* Header section */}
        <div className="relative text-center">
        </div>
        {/* About us body */}
        <div className="relative mt-10 lg-min:flex md-min:space-x-6 justify-evenly md:justify-center items-center xl:justify-between max-w-screen-lg h-full">
        <p className="text-[#33FFA8] text-center block md-min:hidden font-extrabold uppercase tracking-wide text-xs md-min:text-md pb-6 w-full">
            About Us
          </p>
          <div className="md-min:w-[1500px]  ml-10">
            <img src={HomeImg2} alt="person" className="w-full" />
          </div>
          <div className="w-full lg-min:w-40rem flex  flex-col justify-between py-8 md-min:pb-20 md-min:pl-20 md-min:pr-40">
          <p className="text-[#33FFA8] hidden md-min:block font-extrabold uppercase tracking-wide text-sm pb-6 w-full">
            About Us
          </p>
            <h1 className="font-bold  text-xl md-min:text-3xl leading-[1.5] w-full">
              High-Quality Trainings and Guidance to Achieve Great Results with
              Your Online Skill.
            </h1>

            <div>
              <p className="mt-8 font-normal md-min:text-base text-[#4F4E55] lg-min:w-[450px] 3xl:w-[600px] 3xl:text-2xl">
                Our premium training and tailored guidance empower you to
                succeed regardless of your prior experience.
              </p>
            </div>
            <HomeButton
              divclassName={"mt-10"}
              text={"Learn More"}
              OnClick={"/about"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
