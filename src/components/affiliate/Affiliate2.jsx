import React from "react";
import affiliateDesignImage from "../../assets/images/affiliate/affiliate design.png";

const Affiliate2 = () => {
  return (
    <>
      <section>
        <div className="lg-min:flex px-6 md-min:px-12 lg-min:px-28 pb-10 pt-16">
          <div className="flex-1 flex-col py-10 space-y-5">
            <p className="text-[#33FFA8] font-extrabold uppercase tracking-wide text-sm">
              Our Valued Partner
            </p>
            <h1 className="font-bold text-3xl leading-[1.5]">
              What Difference does it make Affiliating for ExpertSkillz.
            </h1>
            <p className="mr-28 font-normal text-base text-[#4F4E55] lg-min:w-[450px] 3xl:w-[600px] 3xl:text-2xl">
             At ExpertSkillz, affiliates aren't just numbers—they're valued partners. 
             We prioritize collaboration, ensuring mutual success. Join us and experience 
             a partnership that sets you apart.
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
              src={affiliateDesignImage}
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
