import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import HomeImg from "../../assets/images/home_main.png";
import AboutUs from "../../components/home/AboutUs";
import GetCourses from "../../components/home/GetCourses";
import HomeAffiliate from "../../components/home/HomeAffiliate";
import HowItWorks from "../../components/home/HowItWorks";
import StudentsRemark from "../../components/home/StudentsRemark";
import WhyChooseUs from "../../components/home/WhyChooseUs";

function Home() {
  const [showDemo, setShowDemo] = useState(false);
  const imgRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  // Update the image height on load
  useEffect(() => {
    if (imgRef.current) {
      setImageHeight(imgRef.current.clientHeight); // Get the height of the image
    }
  }, [imgRef.current]);

  // Disable scrolling on the background when modal is open
  useEffect(() => {
    if (showDemo) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable background scrolling
    }

    // Cleanup when component unmounts or when modal closes
    return () => {
      document.body.style.overflow = "auto";
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

      <section className={`${showDemo ? "blur-sm" : ""}`}>
        {/* Hero Section */}
        <div
          className="relative font-nunito py-3 "
          style={{
            background: "linear-gradient(180deg, #B7ECD5 30%, #E7FFF5 70%)",
            minHeight: `${imageHeight}px`, // Ensure the section has at least the image height
          }}
        >
          <div className="lg-min:flex justify-between px-3 md-min:px-9 space-x-5 items-center h-full">
            {/* Left Content */}
            <div className="lg-min:w-[50%] pt-10 md-min:pt-20 text-center lg-min:text-left w-full">
              <h1 className="font-extrabold text-[#62677B] pb-4 hidden md-min:block">WELCOME TO EXPERTSKILLZ</h1>
              <h2 className="font-extrabold  text-2xl md-min:text-5xl md-min:leading-[70px] text-[#0E1133]">
                Discover limitless learning and earning possibilities{" "}
                <span className="text-[#33FFA8]"> Online</span>
              </h2>
              <p className="font-semibold text-sm md-min:text-lg md-min:leading-[28px] mt-6 text-[#62677B]">
                Unleash Your Potential: Explore a valuable online skill and
                learn how to develop it effectively to grow your finances with
                ExpertSkillz.
              </p>
              {/* Buttons */}
              <div className="mt-10 flex justify-center lg-min:justify-start space-x-4">
                <NavLink to={"/get-started"}>
                  <button className="rounded-md bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] hover:bg-[#0de1d1] text-sm text-black font-bold md-min:text-lg px-2 py-3  flex items-center">
                    Get Started Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </NavLink>
                <button
                  onClick={handleDemoClick}
                  className="rounded-md border border-[#33FFA8] text-[#33FFA8] font-bold md-min:text-lg text-sm px-2 py-3 hover:bg-[#e0fdf9] flex items-center"
                >
                  View Demo <FontAwesomeIcon icon={faPlay} className="ml-2" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg-min:w-[50%] lg-min:mt-0 flex justify-center relative">
              <img
                ref={imgRef}
                src={HomeImg}
                alt="person"
                className="w-full h-auto max-h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <WhyChooseUs />
        <AboutUs />
        <GetCourses />
        <HomeAffiliate />
        <StudentsRemark />
        <HowItWorks />
      </section>
    </>
  );
}

export default Home;
