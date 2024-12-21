import React from "react";
import { NavLink } from "react-router-dom";

const HomeButton = ({ text, divclassName, OnClick }) => {
  return (
    <>
      <div className={divclassName}>
        <NavLink to={OnClick}>
          <button className="text-black  bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] rounded-md border border-solid border-black px-8 py-2 font-bold text-center 3xl:text-2xl outline-none">
            {text}
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default HomeButton;
