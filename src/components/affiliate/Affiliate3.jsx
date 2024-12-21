import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import AffiliateButton from "./AffiliateButton";
import wallpaper from "../../assets/images/affiliate/b3.jpg";

const Affiliate3 = () => {
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

      <section className="my-16 mb-40">
        <div
          className="hero bg-cover bg-center h-[600px] w-full relative z-10 grid items-center"
          style={{ backgroundImage: `url(${wallpaper})` }}
        >
          <div className="overlay bg-black opacity-70 lg-min:opacity-65 absolute top-0 h-[600px] w-full -z-10"></div>
          <div className="flex flex-col justify-start space-y-5 py-5 pr-56 ml-10 md-min:pl-11">
            <h1 className="font-nunito font-bold text-[30px] leading-[54px] text-white sm:text-xl">
              Creating a passive income stream has never been simpler.
            </h1>
            <p className="font-medium text-[20px] leading-[35px] text-white lg-min:pr-20">
              Imagine earning passive income daily by affiliating for ExpertSkillz
              from home, using just your smartphone or laptop. Unfamiliar with
              affiliate marketing? No problem! Enroll in our training program to learn
              the ropes. Register below for a head start.
            </p>

            <NavLink to={"/courses"}>
              <button className="rounded-lg bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] hover:bg-[#0de1d1] text-white font-bold text-lg px-6 py-2 items-center">
                Get Started
              </button>
            </NavLink>
          </div>
        </div>

        <div className="px-5 md-min:px-16 mt-36">
          <div className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] py-16 mx-20 rounded-[20px] relative z-[1]">
            <div className="overlay bg-black rounded-[20px] opacity-10 absolute top-0 h-full w-full -z-[1]"></div>
            <div className="flex flex-col text-center items-center justify-start space-y-5 py-5 px-2 md-min:px-4 md-min:pl-11">
              <h1 className="font-nunito font-semibold text-[40px] leading-[54px] text-white sm:text-xl">
                It’s never been easier
              </h1>
              <p className="font-medium font-semibold text-[20px] pt-15 pb-16 leading-[40px] tracking-wide text-white max-w-3xl mx-auto lg-min:px-20">
                Becoming a recognized affiliate partner has never 
                been easier. Join ExpertSkillz and start today!
              </p>
              <div className="flex flex-col-reverse md-min:flex-row justify-center md-min:space-x-6 space-y-7 md-min:space-y-0">
                <div>
                  <NavLink to={"/pricing"}>
                    <button className="bg-white border-white border-2 text-[#33FFA8] font-bold py-2 px-4 rounded-[10px]">
                      Become an Affiliate
                    </button>
                  </NavLink>
                </div>
                <div>
                  <button
                    onClick={handleDemoClick}
                    className="border-white border-2 text-white font-bold py-2 px-4 rounded-[10px]"
                  >
                    View Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
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

export default Affiliate3;