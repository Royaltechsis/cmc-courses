import React, { useState } from "react";
import onlineImg from "../../assets/images/OnlineMarket.jfif";
import digital from "../../assets/images/digital.png";
import designImg from "../../assets/images/design.jfif";
import HomeButton from "./Button";

const GetCourses = () => {
  const [switcher, setSwitcher] = useState(0);

  const coursesData = [
    {
      image: digital,
      title: "Digital Marketing",
      description:
        "Explore our diverse digital marketing skills and models, such as Affiliate Marketing, Facebook Advertising, Copywriting, Email Marketing, Freelancing and more. In this class you’ll discover how to establish a lucrative online income from the comfort of your home.",
    },
    {
      image: onlineImg,
      title: "Online Investment",
      description:
        "Discover our range of finance skills, including various investment skills like Crypto Trading, Forex Trading, Crypto Arbitrage, and more. In this class you’ll learn how to generate substantial income through these investment skills, all from the comfort of your home.",
    },
    {
      image: designImg,
      title: "Designing Skills",
      description:
        "Discover lucrative design opportunities. Explore fields such as Marketing design, Product design, UI/UX Design and more. In this class, you’ll learn how to master design techniques and monetize your skills by offering professional services to companies and business owners.",
    },
  ];
  const generateSwitch = (setSwitch, switcher) => {
    return Array.from({ length: 3 }).map((_, index) => {
      return (
        <div
          key={index}
          className={` ${
            index === switcher ? " w-10 bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]" : "w-3"
          }  h-3 bg-[#D9D9D9] cursor-pointer rounded-full transition-all duration-700`}
          onClick={() => {
            setSwitch(index);
          }}
        ></div>
      );
    });
  };
  return (
    <>
      {/* Get Courses */}

      <div className="relative w-full mt-16 md-min:pt-0 px-4 md-min:px-10 3xl:px-20 h-full">
        {/* Header section */}
        <div className="relative text-center">
        <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm pb-6">
            Get Courses
        </p>  
        </div>
        <div className="tracking-tight">
          {/* TODO  */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-[40px]">
            Explore Our Popular Classes
          </h2>
          <p className="mt-5 font-semibold leading-7 text-[#4F4E55] text-left md-min:text-center max-w-3xl mx-auto px-4">
          Unlock success with our done-for-you blueprints. Explore a variety of trending online courses and choose the one that best suits your interest and financial goals.
          </p>
        </div>
        <section className="Recommended pb-6">
          <div className="grid grid-cols-3 tablet:grid-cols-2 gap-8 sm:flex sm:flex-col mt-14 mx-8">
            {coursesData.map(({ image, title, description }, index) => {
              return (
                <div
                  key={index}
                  className={`shadow-2xl rounded-lg rounded-t-2xl bg-white transition-all duration-700 cursor-pointer hover:scale-[1.05] ${
                    index === switcher ? "bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]" : "bg-white"
                  }`}
                  onClick={() => {
                    setSwitcher(index);
                  }}
                >
                  <div className="">
                    <div className="w-full h-[250px] 3xl:h-72 ">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full rounded-t-2xl  hover:mb-3 transition-all object-cover"
                      />
                    </div>
                    <div className="in py-6 px-4">
                      <h3
                        className={` mb-2 rounded-lg py-2 px-4 w-fit text-base 3xl:text-xl font-normal
                        ${
                          index === switcher ? "bg-white" : "bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]"
                        } " bg-white transition-all duration-700`}
                      >
                        {title}
                      </h3>
                      <p className="text-xs 3xl:text-lg text-[#4F4E55] font-normal tracking-wide">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pickers flex justify-center gap-2 mt-10">
            {generateSwitch(setSwitcher, switcher)}
          </div>
        </section>
        <HomeButton
          divclassName={"flex justify-center items-center "}
          text={"Explore"}
          OnClick={"/courses"}
        />
      </div>
    </>
  );
};

export default GetCourses;