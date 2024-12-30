import React from "react";
import illustration from "../../assets/images/questions.png";
import { PiPaperPlaneTilt } from "react-icons/pi";

const Questions = () => {
  return (
    <>
      <section className="pt-5 pb-14 md-min:pb-24">
        <div className="text-center mb-3 px-6">
        <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-xs md-min:text-sm md-min:pb-4 pb-2">
            Ask Question
          </p>
          <h1 className="text-2xl text-black font-bold">Do You have any Question?</h1>
          <p className="mt-4 text-gray-600 md-min:text-lg text-sm leading-7 max-w-3xl mx-auto lg-min:px-28">
            Have questions or need assistance? Contact us today. We’re here to 
            help you on your learning journey, so don’t hesitate to reach out!
          </p>
        </div>
        <div className="flex py-10 px-28 flex-col lg-min:flex-row sm:p-10 ">
          <div className="flex-1 hidden lg-min:block">
            <img
              src={illustration}
              alt="Card Image"
              className="z-50 mx-10 sm:m-0"
            />
          </div>
          <div className="flex-1">
            <div className="block border border-none my-0 md-min:my-10">
              <div className="flex flex-col gap-7">
                <div className="lg-min:flex gap-5">
                  <div className="w-full">
                    <input
                      type="text"
                      id="fullname"
                      className="w-full 
                      md-min:h-14 text-xs md-min:text-base h-8 bg-gray-200 placeholder-gray-400 border border-gray-300 px-3 rounded-lg"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="w-full mt-4 lg-min:mt-0">
                    <input
                      type="email"
                      id="email"
                      className="w-full md-min:h-14 text-xs md-min:text-base h-8 bg-gray-200 placeholder-gray-400 border border-gray-300 px-3 rounded-lg"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    id="message"
                    className="w-full h-60 bg-gray-200 text-sm md-min:te`xt-base placeholder-gray-400 border border-gray-300 px-3 py-2 rounded-lg resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div className="btn flex justify-center">
                  <button
                    href="#"
                    className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] text-black md-min:text-fontSize3 md-min:py-3 py-1 px-2  md-min:px-4 w-fit rounded-[10px] border border-black flex justify-center items-center gap-3"
                  >
                    Send Message{" "}
                    <PiPaperPlaneTilt className=" md-min:text-fontSize2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Questions;
