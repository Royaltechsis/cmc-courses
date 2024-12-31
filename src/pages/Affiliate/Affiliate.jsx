import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import AffiliateMap from "../../components/affiliate/AffiliateMap";
import Affiliate2 from "../../components/affiliate/Affiliate2";
import Affiliate3 from "../../components/affiliate/Affiliate3";
import TopAffiliates from "../../components/affiliate/TopAffiliates";
import HowItWorks from "../../components/affiliate/HowItWorks";
import SecondNavBar from "../../components/navbar/SecondNavbar";
import Hero from "../../assets/images/affiliate/b1.jpg"
import Footer from "../../components/footer/Footer";
const Affiliate = () => {
  const [showDemo, setShowDemo] = useState(false);

  // Disable scrolling on the background when modal is open
  useEffect(() => {
    if (showDemo) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable background scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup
    };
  }, [showDemo]);

  const handleDemoClick = () => {
    setShowDemo(true);
  };

  const closeDemo = () => {
    setShowDemo(false); // Close the video modal
  };
  return (
    <>
    <SecondNavBar />
          {/* Modal */}
          {showDemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={closeDemo} // Close modal when background is clicked
        >
          <div
            className="relative w-[80%] md-min:w-[60%] lg-min:w-[40%] aspect-video bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the video
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YwJf2oD_RZA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    <section
          className="hero bg-cover bg-center py-10 md-min:mb-40 pt-28 h-[680px] w-full relative z-10 grid items-center"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <div className="overlay bg-black opacity-[50%] absolute top-0 h-[680px] w-full -z-10"></div>
          <div className="outer pb-6 text-white item-center text-center">
          <div className="flex flex-col lg-min:flex-row items-center justify-between sm:p-3 pt-5">
            <div className="flex-1 flex-col space-y-8 leading-tight">
              <h2 className=" text-[32px]  md-min:text-[64px] font-bold md-min:pb-6 leading-[1.3]">
                Earn Working from Home
              </h2>
              <p className="md-min:text-2xl  text-lg font-semibold">
                Work from home as an affiliate on ExpertSkillz and receive weekly payments.
              </p>
              <p className="md-min:text-xl text-md font-bold">
                Don’t waste time; register as an affiliate now!
              </p>
              <div className="flex items-center justify-center gap-3 text-center ">
                {/* Custom Button */}
                <NavLink to={"/pricing"}>
                  <button className="rounded-md bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] hover:bg-[#0de1d1] text-white  md-min:text-lg text-sm  px-4 py-2 font-bold md-min:px-6 md-min:py-3 md-min:mt-4 items-center">
                  Become an Affiliate <FontAwesomeIcon icon={faArrowRight} className="hidden md-min:block ml-2" />
                  </button>
                </NavLink>
                <button
                  onClick={handleDemoClick}
                  className="rounded-md border border-[#33FFA8] text-[#33FFA8] font-bold md-min:text-lg text-sm md-min:px-6 md-min:py-3 px-4 py-2 hover:bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] hover:text-white transition-all duration-500 ease-in-out items-center"
                >
                  View Demo <FontAwesomeIcon icon={faPlay} className="hidden md-min:block ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
        <AffiliateMap />
        <TopAffiliates />

        <Affiliate2 />
        <HowItWorks />
        
        <Affiliate3 />
        <Footer />
    </>
  );
};

export default Affiliate;