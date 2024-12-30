import React from "react";
import { NavLink } from "react-router-dom";

const GetInTouch = () => {
  return (
    <>
      {/* Report problem section */}
      <div className="md-min:mx-20 border-2 mx-3 border-[#33FFA8] rounded-xl md-min:p-5 p-3 flex flex-col bg-[#f2fdf8] shadow-lg">
        <div>
          <div className="flex items-center justify-between md-min:py-5">
            <div className=" w-4/6 ">
              <p className="font-bold md-min:text-lg text-sm text-[#53686A]">
                Want to report a problem?
              </p>
              <p className="font-normal md-min:text-sm text-xs">
                Do you have any problem with your account? Please reach out to
                our support team.
              </p>
            </div>
            <div className="md-min:ml-auto">
              <NavLink to="/contact">
                {" "}
                {/* Update this path to your actual contact page path */}
                <button className="text-black bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] rounded-md border border-solid border-black md-min:px-7 py-2 px-3 font-bold md-min:text-sm text-xs text-center cursor-pointer">
                  Get in touch
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
