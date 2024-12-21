import React from "react";
import AboutSection1 from "../../components/about/About1";
import AboutSection2 from "../../components/about/OurMission";
import OurValues from "../../components/about/OurValues";
import AboutSection3 from "../../components/about/OurVisions";
import AskQuestions from "../../components/main/Questions";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="py-10 pt-20">
        <div className="w-full items-center justify-center text-center pb-3 md-min:pb-1">
        <h1 className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-6xl pb-6">
            About
        </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 leading-[40px] max-w-3xl mx-auto lg-min:px-28">
            Everything You Need To Know About ExpertSkillz
          </h1>
        </div>
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <OurValues />
        <AskQuestions />
      </section>
    </>
  );
};

export default About;
