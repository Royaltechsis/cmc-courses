import React from "react";
import { Link, useLocation } from "react-router-dom";
import logout from "../../../assets/images/affiliate/affiliatelogout.png";
import logo from "../../../assets/images/logo2.png";
import { communityItems, sidebarItems } from "./dashboard/DashBoardData";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="w-1/4 h-full bg-[#F6FFFB] shadow-2xl flex flex-col">
      {/* Logo Section */}
      <div className="ml-5 mt-10">
        <Link
          to="/affiliate"
          className="text-fontSize1 font-[500] hover:font-[600] transition-opacity text-white hover:text-[wheat] hover:delay-[0.3s] ease-linear"
        >
          <img
            src={logo}
            alt="Affiliate Logo"
            className="w-[260px] mr-2"
          />
        </Link>
      </div>

      {/* Shadow Effect */}
      <div className="h-10 shadow-lg mb-4"></div>

      {/* Scrollable Content Section */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="mb-10">
          <h2 className="font-extrabold text-xl ml-14 mb-6 mt-10">Affiliate</h2>
          <ul>
            {sidebarItems.map((item, index) => (
              <li
                className={`flex pl-20 items-center gap-2 mb-10 w-full h-14 ${
                  isActive(item.path)
                    ? "bg-gradient from-gradient-start to-gradient-end text-black"
                    : "hover:bg-gradient hover:from-gradient-start hover:to-gradient-end text-gray-500"
                }`}
                key={index}
              >
                <img
                  src={item.icon}
                  alt={`${item.text} Icon`}
                  className="w-5"
                />
                <Link
                  to={item.path}
                  className={`font-bold text-base w-full ${
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
          <h2 className="font-extrabold text-xl ml-14 mb-6 mt-20">Community</h2>
          <ul>
            {communityItems.map((item, index) => (
              <li
                className={`flex pl-20 items-center gap-2 mb-10 w-full h-14 ${
                  isActive(item.path)
                    ? "bg-gradient from-gradient-start to-gradient-end text-black"
                    : "hover:bg-gradient hover:from-gradient-start hover:to-gradient-end text-gray-500"
                }`}
                key={index}
              >
                <img
                  src={item.icon}
                  alt={`${item.text} Icon`}
                  className="w-5"
                />
                <Link
                  to={item.path}
                  className={`font-bold text-base w-full ${
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
      <div className="ml-20 mt-4 mb-10">
        <Link
          to="/affiliate-login"
          className="font-bold text-xl text-[#33FFA8] flex items-center gap-2"
        >
          <img src={logout} alt="Logout" className="h-8 w-auto" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
