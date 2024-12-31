import React from "react";
import map from "../../assets/images/map.png";
const AffiliateMap = () => {
  return (
    <div className="md-min:text-center py-8 mt-3 px-4 ">
      <div className="map-img w-full -my-36 h-auto flex justify-center mt-3 ">
        <img src={map} alt="" className="w-300 h-250 object-cover mt-4" />
      </div>
      <div className="text-xl px-2 pt-40">
        <p className="text-xl md-min:text-4xl font-bold text-center text-gray-800 md-min:leading-[40px] max-w-3xl mx-auto md-min:px-28 md-min:mb-10">
          Join ExpertSkillz Affiliate Platform from Anywhere in the World
        </p>
        <p className="md-min:mt-4 mt-2 text-gray-600 md-min:text-lg text-sm leading-7 max-w-3xl mx-auto">
          Get paid in seven different currencies, including USD. Don't
          hesitate! Your affiliate account on ExpertSkillz is ready for
          you to start earning cash.
        </p>
        <p className="mt-4 text-gray-600 md-min:text-lg text-sm leading-7 max-w-3xl mx-auto md-min:px-20">
          Your opportunity to maximize your income is 
          waiting - activate your affiliate account now!
        </p>
      </div>
    </div>
  );
};

export default AffiliateMap;