import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import person1 from "../../assets/images/Testimonial1.png";
import person2 from "../../assets/images/Testimonial2.png";
import person3 from "../../assets/images/Testimonial3.png";
import person4 from "../../assets/images/Ruth Chinoye.png";
import person5 from "../../assets/images/Hamzat Opeyemi.png";
import person6 from "../../assets/images/Hammed Afeez.png";
import logo4 from "../../assets/images/logo4.png";
import { useLocation } from "react-router-dom";

const FooterSection1 = () => {
  const location = useLocation();
  const affilFooter = [
    "/affiliate",
    "/pricing",
    "/affiliate-signup",
    "/affiliate-login",
    "/affiliate-forgot-password",
    "/affiliate-verify-code",
    "/affiliate-reset-password",
    "/affiliate-faq",
    "/welcome"
  ]
  const [isDiff] = useState(affilFooter.some(item => location.pathname == item))
  return (
    <>
      <div className="flex flex-col space-y-11 lg-min:space-y-0 justify-between w-full h-full">
        {/* <div className="w-1/2 gap-5"> */}
        <div className="md-min:pr-28">
        <div>
          <h1 className="md-min:text-3xl text-2xl font-sans font-semibold text-white">
            {isDiff ? "See what our Affiliates are Saying About": "See what People are Saying About"} {" "}
            <span className="text-[#33FFA8]">ExpertSkillz</span>
          </h1>
        </div>
        <div className="message mt-10">
          <div className="relative md-min:pb-5">
            <FaQuoteLeft size={30} className="text-[#33FFA8]" />
            <p className="mt-2 text-base font-bold text-white ">
            {isDiff ? "Becoming a top affiliate with ExpertSkillz has been an incredible opportunity. Two years ago, I never imagined I’d earn a consistent weekly income in dollars."
            : "ExpertSkillz has been a total game-changer in my online journey! Their flagship course, CMC, brought fast results even as a newbie. The mentorship is also extremely beginner-friendly and supportive."}
              
              <FaQuoteRight size={30} className="ml-3 text-[#33FFA8] inline" />
            </p>
          </div>
          <p className="text-lg font-semibold text-white py-4">
            {isDiff? "- Ruth Chinoye" : "- Adejumo Eniola"}
          </p>
          <p className="text-lg font-semibold text-white pb-4">
            {isDiff? "Copy Writing/Marketing Expert" : ""}
          </p>
          
          {isDiff ? (

         
            <div className="flex gap-3 ">
            <div className="w-14 h-14">
              <img src={person4} alt="card image" className="w-full" />
             
            </div>
            <div className="w-14 h-14">
              <img src={person5} alt="card image" className="w-full" />
            </div>
            <div className="w-14 h-14">
              <img src={person6} alt="card image" className="w-full" /> 
            </div>
          </div>
          ): (
          <div className="flex gap-3 ">
            <div className="w-14 h-14">
              <img src={person1} alt="card image" className="w-full" />
            </div>
            <div className="w-14 h-14">
              <img src={person2} alt="card image" className="w-full" />
            </div>
            <div className="w-14 h-14">
              <img src={person3} alt="card image" className="w-full" />
            </div>
          </div>
          )}
          
        </div>
        </div>
        {/* Email section */}
        <div className="hidden md-min:flex flex-col space-y-8 justify-around">
          <div className="pt-20">
            <img src={logo4} alt="logo" className="w-[400px]" />
          </div>
          <div className="text-white text-xl pt-5">
            <p>Join Our Newsletter</p>
          </div>
          <div className="relative flex border-white rounded-full border-2 p-2 pl-5 mr-20">
            <input
              type="text"
              placeholder="Enter your email here"
              className="outline-none text-white  w-full bg-transparent"
            />
            <button
              type="submit"
              className=" text-white text-fontSize2 cursor-pointer border border-background3 bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] rounded-full p-2 "
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default FooterSection1;
