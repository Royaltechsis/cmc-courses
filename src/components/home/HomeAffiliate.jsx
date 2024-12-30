import React from "react";
import homeAffilaite from "../../assets/images/affiliate/home affiliate.png";
import background from "../../assets/images/background1.png";

const Affiliate2 = () => {
  return (
    <>
      <section className="relative">
      {/* Arrow and the spiral background image section */}
        <div className="hidden md-min:block w-[650px] absolute -z-30 -top-10 left-0 h-full">
          <img src={background} alt="line" className="w-full object-cover" />
        </div>
        <div className="lg-min:flex px-6 w-full  md-min:px-28 pb-10 pt-16">
          <div className="flex-1 flex-col pt-16 space-y-5 w-full">
            <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide md-min:text-sm text-xs">
              Learn and Earn
            </p>
            <h1 className="font-bold text-xl md-min:text-3xl leading-[1.5] max-w-3xl mx-auto md-min:pr-20">
            Learn Valuable Marketing Skills and Earn Profitable Income.
            </h1>
            <p className="md-min:mr-28 font-normal text-sm md-min:text-base text-[#4F4E55] lg-min:w-[450px] 3xl:w-[600px] 3xl:text-2xl">
              Our platform offers more than just learning opportunities; 
              we also gives you the chance to earn while you learn. Join our 
              affiliate program today and start earning weekly income from 
              the comfort of your home.
            </p>

             <div className="flex items-center justify-start">
                {/* Custom Button */}
                <button
                  onClick={() => window.location.href = "/pricing"}
                  className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border-black border-[1px] hover:background text-black font-bold py-2 mt-2 px-4 rounded-[10px]"
                >
                  Become an Affiliate
                </button>
              </div>
          </div>
          <div className="flex-1">
            <img
              src={homeAffilaite}
              alt="card image"
              className="w-[800px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Affiliate2;
