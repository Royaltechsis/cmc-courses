import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logout from "../../../assets/images/affiliate/affiliatelogout.png";
import logo from "../../../assets/images/logo2.png";
import { communityItems, sidebarItems } from "./dashboard/DashBoardData";

const MobileSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname.startsWith(path);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="fixed block md-min:hidden top-4 right-4 z-50">
        {isOpen ? (
          <FiX size={28} color={'#33FFA8'} onClick={toggleMenu} className="cursor-pointer text-[#33FFA8]"  />
        ) : (
          <FiMenu size={28} color='#33FFA8' onClick={toggleMenu} className="cursor-pointer text-[#33FFA8]" />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-[#F6FFFB] shadow-2xl flex flex-col transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="ml-5 mt-10">
          <Link
            to="/affiliate"
            className="text-fontSize1 font-[500] hover:font-[600] transition-opacity text-white hover:text-[wheat] hover:delay-[0.3s] ease-linear"
          >
            <img src={logo} alt="Affiliate Logo" className="w-[120px] mr-2" />
          </Link>
        </div>

        {/* Shadow Effect */}
        <div className="h-6 shadow-lg mb-4"></div>

        {/* Scrollable Content Section */}
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <div className="mb-10">
            <h2 className="font-bold text-lg ml-10 mb-4 mt-8">Affiliate</h2>
            <ul>
              {sidebarItems.map((item, index) => (
                <li
                  className={`flex pl-10 items-center gap-2 mb-6 w-full h-12 ${
                    isActive(item.path)
                      ? "bg-gradient from-gradient-start to-gradient-end text-black"
                      : "hover:bg-gradient hover:from-gradient-start hover:to-gradient-end text-gray-500"
                  }`}
                  key={index}
                >
                  <img
                    src={item.icon}
                    alt={`${item.text} Icon`}
                    className="w-4"
                  />
                  <Link
                    to={item.path}
                    className={`font-medium text-sm w-full ${
                      isActive(item.path) ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg ml-10 mb-4 mt-16">Community</h2>
            <ul>
              {communityItems.map((item, index) => (
                <li
                  className={`flex pl-10 items-center gap-2 mb-6 w-full h-12 ${
                    isActive(item.path)
                      ? "bg-gradient from-gradient-start to-gradient-end text-black"
                      : "hover:bg-gradient hover:from-gradient-start hover:to-gradient-end text-gray-500"
                  }`}
                  key={index}
                >
                  <img
                    src={item.icon}
                    alt={`${item.text} Icon`}
                    className="w-4"
                  />
                  <Link
                    to={item.path}
                    className={`font-medium text-sm w-full ${
                      isActive(item.path) ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Log out section */}
        <div className="ml-10 mt-4 mb-8">
          <Link
            to="/affiliate-login"
            className="font-medium text-sm text-[#33FFA8] flex items-center gap-2"
          >
            <img src={logout} alt="Logout" className="h-6 w-auto" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default MobileSidebar;
