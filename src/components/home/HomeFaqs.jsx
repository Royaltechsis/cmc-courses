import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ChooseLine from "../../assets/images/ChooseLine.png";
import vector from "../../assets/images/Vector5.png";
import { data } from "./HomeFaqsData";

const HomeFaqs = () => {
  const [openStates, setOpenStates] = useState(Array(data.length).fill(false));
  const [moreInfo, setMoreInfo] = useState(Array(data.length).fill(false));

  const toggleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };
  const toggleInfo = (index) => {
    moreInfo[index] = !moreInfo[index];
    setMoreInfo([...moreInfo]);
  };

  return (
    <>
      <section className="px-2 md-min:px-10 pb-20">
        <div className="mt-28 z-0 w-full">
          <div className="relative w-full items-center justify-center text-center">
            <h1 className="pt-8 text-2xl md-min:text-3xl font-bold relative">
            Frequently Asked{" "}
              <span>Questions</span>
            </h1>
          </div>
          <div className="faq pb-2 lg-min:px-10">
            <div
              className="faq-inner text-sm bg-[#F7F7FB] mt-24 p-6 lg-min:p-16 rounded-[20px]  flex justify-center items-center 
             flex-col space-y-8"
            >
              {data.slice(0, 4).map(({ id, question, answer }, index) => (
                <div
                  className={`faq-each bg-white text-black 
            lg-min:max-w-full w-full h-auto lg-min:p-11 py-2 px-4 lg-min:rounded-2xl 
            rounded-[18px] ${
              openStates[index] ? "border-[#11F1F1] border-4" : ""
            }`}
                  key={index}
                >
                  <div
                    className="question-section flex justify-between items-center"
                    key={id}
                    onClick={() => toggleOpen(index)}
                  >
                    <h2 className="text-[13px] md-min:text-base font-semibold ">
                      {question}
                    </h2>
                    <div
                      className={`arrow p-2  text-[#33FFA8] shadow-lg rounded-full transition-all duration-500 ease-in-out   ${
                        openStates[index]
                          ? "rotate-90 background3 text-white"
                          : ""
                      }`}
                    >
                      <IoIosArrowForward
                        size={25}
                        className="cursor-pointer text-[4px] scale-75 md-min:scale-100"
                      />
                    </div>
                  </div>
                  <div
                    className={`mt-4 transition-all duration-500 ease-in-out  ${
                      openStates[index]
                        ? "opacity-1 flex  h-full"
                        : "h-0 opacity-0"
                    }`}
                  >
                    <p
                      className={`  text-[#6F6C90] `}
                      // ${
                      //   moreInfo[index] ? "line-clamp-none" : "line-clamp-2"
                      // }
                    >
                      {answer}
                    </p>
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        toggleInfo(index);
                      }}
                    >
                      {/* {moreInfo[index] ? "See less" : "See more"} */}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex justify-center w-full">
                <NavLink to="/faqs">
                  <button className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border-black border-[1px] hover:background text-black w-[200px] font-bold py-2 px-4 rounded-[10px]">
                    See More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFaqs;
