import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "../../assets/images/logo4.png";
import logo2 from "../../assets/images/logo2.png";

const SecondNavBar = () => {
  const location = useLocation();
  return (
    <>
     
        <nav
            className="absolute top-0 flex items-center justify-between px-16 py-5 w-full z-50">
            <div className="logo">
              {location.pathname === "/affiliate"?
              (
                <Link
                to="/affiliate"
                className="text-fontSize1 font-[500] hover:font-[600] transition-opacity
                text-white hover:text-[wheat] hover:delay-[0.3s] ease-linear"
            >
                <img src={logo1} alt="Logo" className="w-[220px] 3xl:w-52" />
            </Link>
              ):(
                <Link
                to="/affiliate"
                className="text-fontSize1 font-[500] hover:font-[600] transition-opacity
                text-white hover:text-[wheat] hover:delay-[0.3s] ease-linear"
            >
                <img src={logo2} alt="Logo" className="w-[220px] 3xl:w-52" />
            </Link>
              )}
               
            </div>
            <div className='affiliate_link'>
                <NavLink to={"/affiliate-faq"}>
                  <button className={`${location.pathname === "/affiliate" ? "border-greenText  text-white border-2":"border-black  text-black bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border-[1px]"} rounded-3xl font-bold py-2 px-7`}>
                  FAQs
                  </button>
                </NavLink>
              </div>
        </nav>
    </>
  )
}

export default SecondNavBar