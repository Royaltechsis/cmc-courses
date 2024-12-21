import React from "react";
import { NavLink } from "react-router-dom";

const AffiliateButton = ({ text, divclassName, OnClick }) => {
  return (
    <>
      <div className={divclassName}>
        <NavLink to={OnClick}>
          <button className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border-black border-[1px] hover:background text-black font-bold py-2 px-4 rounded-[10px]">
            {text}
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default AffiliateButton;
