import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "../../assets/images/logo4.png";
import logo2 from "../../assets/images/logo2.png";

const SecondNavBar = () => {
  const location = useLocation();
  return (
    <>
     
        <nav
            className="absolute top-0 flex items-center justify-between md-min:px-16 md-min:py-5 p-2 w-full z-50">
            <div className="logo">
              {location.pathname === "/affiliate"?
              (   
                <Link
                to="/affiliate"
                className="text-fontSize1 md-min:font-[500] hover:font-[600] transition-opacity
                text-white hover:text-[wheat] hover:delay-[0.3s] ease-linear"
            >
                <img src={logo1} alt="Logo" className="md-min:w-[220px] w-[120px] 3xl:w-52" />
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
                  <button className={`${location.pathname === "/affiliate" ? "border-greenText  text-white border-2":"border-black  text-black bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border-[1px]"} rounded-3xl font-bold md-min:py-2 md-min:px-7 md-min:text-base text-md px-4 py-1`}>
                  FAQs
                  </button>
                </NavLink>
              </div>
        </nav>
    </>
  )
}

export default SecondNavBar