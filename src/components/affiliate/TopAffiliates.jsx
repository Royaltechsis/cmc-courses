import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import person1 from "../../assets/images/Ruth Chinoye.png";
import person2 from "../../assets/images/Victor Bassey.png";
import person3 from "../../assets/images/Hamzat Opeyemi.png";
import person4 from "../../assets/images/Hammed Afeez.png";
import person5 from "../../assets/images/Ademola Abraham.png";
import person6 from "../../assets/images/Praiz Bari.png";
import decor1 from "../../assets/images/decorative_images/Ornament 63.svg";
import decor2 from "../../assets/images/decorative_images/Ornament 64.png";
import decor3 from "../../assets/images/decorative_images/Ornament 65.svg";
import { IoIosArrowDown } from "react-icons/io";

// Custom arrow components that render nothing
const CustomPrevArrow = () => {
  return null;
};

const CustomNextArrow = () => {
  return null;
};

const TopAffiliates = () => {
  const benefits = [
    {
      Title: "High Commission Rate",
      quote:
        "ExpertSkillz offers some of the highest commission rates in the industry to ensure our affiliates are well-paid for their efforts. We consistently review and adjust our rates to stay competitive and provide maximum value to our affiliates.",
    },
    {
      Title: "Quality Marketing Resources",
      quote:
        "We equip our affiliates with a comprehensive library of marketing resources, including high-quality flyers and promotional videos. These tools are designed to help you effectively promote and drive sales.",
    },
    {
      Title: "Timely and Reliable Payment",
      quote:
        "At ExpertSkillz, we prioritize timely and reliable payments to our affiliates. Earnings are processed and paid out every week without fail, ensuring you receive your commissions promptly.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const topAffiliatesData = [
    {
      name: "Ruth Chinoye",
      role: "Digital Marketing Expert",
      quote:
        "Becoming a top affiliate with ExpertSkillz has been an incredible opportunity. Two years ago, I never imagined I’d earn a consistent weekly income in dollars.",
      personImage: person1,
    },
    {
      name: "Victor Bassey",
      role: "Ads/Marketing Expert",
      quote:
        "I can't thank God enough for coming across ExpertSkillz. Being a Top Affiliate has transformed my life, going from a broke undergraduate to earning six figures weekly.",
      personImage: person2,
    },
    {
      name: "Hamzat Opeyemi",
      role: "Digital Marketing Expert",
      quote:
        "Becoming a top affiliate with ExpertSkillz has been an incredible opportunity. Two years ago, I never imagined I’d earn a consistent weekly income in dollars.",
      personImage: person3,
    },
    {
      name: "Afeez Hammed",
      role: "Digital Marketing Expert",
      quote:
        "Before ExpertSkillz, I knew little about affiliate marketing. Now, after completing their academy, I proudly earn seven figures weekly through the opportunities provided by ExpertSkillz.",
      personImage: person4,
    },
    {
      name: "Ademola Abraham",
      role: "Digital Marketing Expert",
      quote:
        "Becoming a top affiliate with ExpertSkillz has been an incredible opportunity. Two years ago, I never imagined I’d earn a consistent weekly income in dollars.",
      personImage: person5,
    },
    {
      name: "Praiz Bari",
      role: "Branding/Marketing Expert",
      quote:
        "ExpertSkillz is a highly productive platform for learners who become experts and generate robust earnings. Anyone can succeed here, just like me and other top affiliates.",
      personImage: person6,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="overflow-hidden relative px-4">
      <div className="w-full items-center justify-center text-center mt-28">
      <div className="relative text-center">
        <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide md-min:text-sm text-xs md-min:pb-6 pb-3">
            Our Affiliates
        </p>  
        </div>
        <h1 className="text-xl md-min:text-4xl font-bold text-center text-gray-800 md-min:leading-[40px] max-w-3xl mx-auto md-min:px-28 mb-10">
          Hear from Our Top Affiliates: Real Success Stories
        </h1>
      </div>
      <>
        <img
          src={decor1}
          alt="Card Image"
          className="absolute -top-2 right-52 -z-50 sm:w-50 sm:-right-0"
        />
        <img
          src={decor2}
          alt="Card Image"
          className="absolute top-32 right-36 -z-50 sm:w-50 sm:-right-0"
        />
        <img
          src={decor3}
          alt="Card Image"
          className="absolute top-4 right-28 -z-50 sm:w-50 sm:-right-0"
        />
      </>
      <div className="flex flex-col lg-min:flex-row px-3 md-min:px-20 lg-min:space-x-36 space-y-5 lg-min:space-y-0">
        <div className="flex-1 reviews lg-min:my-8 rounded-[20px] z-0 px-2 md-min:px-16 bg-cover bg-[#23F8CB61]">
          <Slider {...settings}>
            {/* Iterate over topAffiliatesData to create slides */}
            {[...Array(Math.ceil(topAffiliatesData.length / 2)).keys()].map((_, slideIndex) => (
              <div key={slideIndex} className="flex flex-col space-y-4">
                {topAffiliatesData.slice(slideIndex * 2, slideIndex * 2 + 2).map(({ name, role, quote, personImage }, index) => (
                  <div
                    className={`each-speaker py-4 pt-10 ${index === 1 ? "border-t border-gray-300" : ""}`}
                    key={index}
                  >
                    <div className="person flex flex-col lg-min:flex-row space-x-2 items-center px-1">
                      <div className="image-con">
                        <img
                          src={personImage}
                          alt={name}
                          className="w-[80px] h-[70px] pr-3"
                        />
                      </div>
                      <div className="name text-center lg-min:text-left font-semibold">
                        <p className="text-xl font-bold">{name}</p>
                        <p className="text-lg">{role}</p>
                      </div>
                    </div>
                    <div className="message font-semibold text-sm 3xl:text-lg 3xl:font-bold text-[#464646] line-clamp-6 pt-4 px-2 tracking-wide">
                      <p>{quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>
        <div className="benefits flex-1 flex flex-col md-min:space-y-8 pt-14 justify-center">
          {benefits.map(({ Title, quote }, index) => {
            return (
              <div
                key={index}
                className="md-min:py-6 pt-3 border-b-2 border-b-gray-300 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between">
                  <p className="font-semibold md-min:text-2xl text-lg">{Title}</p>
                  <div>
                    <IoIosArrowDown
                      // size={40}
                      className={`${
                        openIndex === index ? "rotate-180 text-lg md-min:text-3xl" : "rotate-0"
                      } transition-all duration-500 ease-in-out text-lg md-min:text-3xl`}
                    />
                  </div>
                </div>
                <p
                  className={`mt-7 text-[#464646] font-semibold md-min:text-sm text-xs overflow-hidden transition-all duration-200 ease-in-out ${
                    openIndex === index ? "h-full" : "h-0"
                  }`}
                >
                  {quote}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopAffiliates;