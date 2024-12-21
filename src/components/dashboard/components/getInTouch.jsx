import React from "react";
import { NavLink } from "react-router-dom";

const GetInTouch = () => {
  return (
    <>
      {/* Report problem section */}
      <div className="mx-20 border-2 border-[#33FFA8] rounded-xl p-5 flex flex-col bg-[#f2fdf8] shadow-lg">
        <div>
          <div className="flex items-center py-5">
            <div>
              <p className="font-bold text-lg text-[#53686A]">
                Want to report a problem?
              </p>
              <p className="font-normal text-sm">
                Do you have any problem with your account? Please reach out to
                our support team.
              </p>
            </div>
            <div className="ml-auto">
              <NavLink to="/contact">
                {" "}
                {/* Update this path to your actual contact page path */}
                <button className="text-black bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] rounded-md border border-solid border-black px-7 py-2 font-bold text-sm text-center cursor-pointer">
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
