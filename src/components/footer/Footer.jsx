import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import FooterSection1 from "./FooterSection1";
import FooterSection2 from "./FooterSection2";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupPrivacy, setIsPopupPrivacy] = useState(false);

  const openTermsPopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setIsPopupPrivacy(false); // Close privacy popup if it's open
  };

  const openPrivacyPopup = () => {
    setIsPopupPrivacy(!isPopupPrivacy);
    setIsPopupOpen(false); // Close terms popup if it's open
  };


  return (
    <>
      <section className="footer">
        <div className="font-nunito grid grid-cols-1 lg-min:grid-cols-2 gap-7 md-min:gap-14 justify-around items-center w-full h-full pt-20 pb-7 px-8 md-min:px-16">
          <FooterSection1 />
          <FooterSection2 />
        </div>
        <div className="w-full flex text-[#A6A6A6] justify-between items-center  md-min:row  flex-col md-min:px-20 pb-5 pt-10">
          <div>
            <p className='md-min:text-xl text-xs'>
              © {year} ExpertSkillz. All rights reserved.
            </p>
          </div>
          {/* Terms and policy buttons */}
          <div className=''>
            <NavLink to="/terms-and-conditions">
              <button className="text-white hover:text-[#33FFA8] transition-all duration-700 md-min:text-xl text-xs">
                Terms and Conditions
              </button>
            </NavLink>
            {" | "}
            <NavLink to="/privacy-policy">
              <button className="text-white hover:text-[#33FFA8] transition-all duration-700 md-min:text-xl text-xs">
                Privacy Policy
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
