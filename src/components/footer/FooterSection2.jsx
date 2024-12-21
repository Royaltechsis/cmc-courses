import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import facebook from "../../assets/images/footer/facebook.png";
import instagram from "../../assets/images/footer/instagram.png";
import whatsapp from "../../assets/images/footer/whatsapp.png";
import x from "../../assets/images/footer/x.png";
import { FaChevronRight } from "react-icons/fa";
import logo4 from "../../assets/images/logo2.png";
import "../../index.css";
const FooterSection2 = () => {
  useEffect(() => {
    const handleNavLinkClick = () => {
      window.scrollTo(0, 0);
    };

    document.querySelectorAll("a.nav-link").forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      document.querySelectorAll("a.nav-link").forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <>
      {/* Send message second row */}
      <div className="">
        <div className="rounded-xl md-min: md-min:bg-[#222938] py-20 md-min:px-20">
          <div className="flex flex-col gap-7">
            <div className="flex justify-center text-white">
              <h1 className="text-2xl">Send a Message</h1>
            </div>
            {/* Email box */}
            <div>
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full h-10 bg-white placeholder-gray-200 border border-gray-300 px-3 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            {/* Message Box */}
            <div>
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                className="w-full h-20 bg-white placeholder-gray-200 border border-gray-300 px-3 py-2 rounded-md resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              href="#"
              className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] text-black font-semibold text-base py-2 px-4 rounded hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </div>

        <div className="md-min:hidden flex flex-col space-y-8 justify-around">
          <div className="w-full h-auto">
            <img src={logo4} alt="logo" className="w-1/2" />
          </div>
          <div className="text-white">
            <p>Join Our Newsletter</p>
          </div>
          <div className="relative flex border-white rounded-full border-2 p-2 ">
            <input
              type="text"
              placeholder="Enter your email here"
              className="outline-none text-white  w-full bg-transparent"
            />
            <button
              type="submit"
              className=" text-white text-fontSize2 cursor-pointer border border-background3 background3 rounded-full p-2 "
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        {/* Send message section 2 */}
        <div className="flex flex-wrap justify-between mt-10">
          <div className="text-white">
            <h1 className="text-3xl text-[#33FFA8] mb-6">Company</h1>
            <NavLink to="/" className="nav-link">
              <p className="mb-6 font-medium text-xl text-white">Home</p>
            </NavLink>
            <NavLink to="/about" className="nav-link">
              <p className="mb-6 font-medium text-xl  text-white">About</p>
            </NavLink>
            <NavLink to="/courses" className="nav-link">
              <p className="mb-6 font-medium text-xl  text-white">
                Our Courses
              </p>
            </NavLink>
            <NavLink to="/affiliate" className="nav-link">
              <p className="mb-6 font-medium text-xl  text-white">Affiliate</p>
            </NavLink>
          </div>
          <div className="text-white">
            <h1 className="text-3xl text-[#33FFA8] mb-6">Contact Us</h1>
            <p className="mb-6 font-medium text-xl">
              wearexpertskillz@gmail.com
            </p>
            <p className="mb-2 font-bold text-base">Social Media</p>
            <div className="flex items-center space-x-3">
              <a href="https://www.instagram.com/wearexpertskillz?igsh=dWZlMnp5NTZzMnRq&utm_source=qr">
                <div className=" rounded-lg border border-white p-2 bg-white">
                  <img src={instagram} alt="Instagram" className="w-6 h-6" />
                </div>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61554737001770&mibextid=LQQJ4d">
                <div className="rounded-lg border border-white p-2 bg-white ml-2">
                  <img src={facebook} alt="Facebook" className="w-6 h-6" />
                </div>
              </a>
              <a href="https://wa.link/cf2uth">
                <div className="rounded-lg border border-white p-2 bg-white ml-2">
                  <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
                </div>
              </a>
              <a href="https://twitter.com/@expert_skillz">
                <div className="rounded-lg border border-white p-2 bg-white ml-2">
                  <img src={x} alt="X" className="w-6 h-6" />
                </div>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FooterSection2;
