import React from "react";
import { Link } from "react-router-dom";
import checkbadge from "../../assets/images/checkbadge.png";
import affiliateBg from "../../assets/images/affiliatebg.png";
import SecondNavBar from '../../components/navbar/SecondNavbar'
import Footer from '../../components/footer/Footer'

const Welcome = () => {
  return (
    <>
      <SecondNavBar />
      <section className="md-min:py-11 mt-28 w-full h-full">
        <div className="w-full h-full">
          <div className="mt-7 mb-20 relative w-full h-full flex justify-center">
            
            {/* Background Image Section */}
            <div className="hidden lg-min:block relative w-[350px] h-[600px] overflow-hidden">
              <div className="absolute w-full h-full inset-0 bg-cover bg-gradient-to-b from-[#11F1F182] to-[#33FFA882] backdrop-brightness-100 rounded-[30px] rounded-r-none"></div>
              <img
                src={affiliateBg}
                alt="form background"
                className="rounded-[30px] max-w-max h-full rounded-r-none w-[800px]"
              />
            </div>

            {/* Content Section */}
            <div className="px-4 py-10 h-[600px] md-min:px-28 z-40 shadow-blackShadow bg-white md-min:w-[670px] md-min:rounded-[30px] rounded-[8px] md-min:rounded-l-none">
              <div className="flex flex-col text-center justify-center h-full">
                <p className="font-semibold text-3xl">Welcome!</p>
                <p className="font-semibold text-lg text-gray-400 mt-3">
                  The registration was successful
                </p>
                <div className="flex justify-center py-10">
                  <img src={checkbadge} alt="Check Badge" size={110} />
                </div>
                <Link to="/dashboard" className="mt-5">
                  <button
                    type="submit"
                    className="block w-1/2 mx-auto py-2 justify-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg font-bold text-black my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]"
                  >
                    Proceed
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Welcome;