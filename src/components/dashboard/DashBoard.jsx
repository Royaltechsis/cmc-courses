import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileSideBar from "./components/mobilesidebar"
import DashBoardCards from "../../components/dashboard/components/dashboard/DashBoardCards";
import { currencyOptions } from "./components/dashboard/DashBoardData";
import AffiliateIncomeChart from "./components/dashboard/AffiliateIncomeChart";
import SalesProgress from "./components/dashboard/SalesProgress";
import DailyTransactions from "./components/dashboard/DailyTransactions";
import AvailableCourses from "./components/dashboard/AvailableCourses";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faUser } from '@fortawesome/free-solid-svg-icons'; // Add the user icon
import GetInTouch from "./components/getInTouch";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0].label); // Default currency

  // Simulate the user's profile image status (replace with actual check)
  const profileImage = null; // Set this to the user's actual image URL if available

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      {/* Main Content */}
      <div className="md-min:w-3/4 md-min:px-16 px-3 w-full md-min:pt-14 pt-5 flex flex-col">

      {/* affilaite topper for desktop */}
        <div className="md-min:flex justify-between items-center hidden mb-6 px-7">
          <h2 className="font-semibold text-[25px] leading-[30px]">
            Affiliate Dashboard
          </h2>

          {/* Currency Dropdown and User Icon */}
          <div className="flex items-center gap-10">
            {/* Custom Currency Dropdown */}
            <div className="relative inline-block">
              <div
                className="flex items-center text-black px-5 py-2 pt-3 rounded-lg text-base cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  backgroundColor: "#F6FFFB",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.25)",
                }}
              >
                <span>{selectedCurrency}</span>
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faChevronUp : faChevronDown}
                  className="ml-4 transition-transform duration-200 ease-in-out"
                  style={{ fontSize: '12px', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              
              <div
                className={`absolute right-0 mt-1 bg-[#F6FFFB] rounded-lg shadow-lg z-10 transform transition-all duration-300 ease-in-out origin-top ${
                  isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
                style={{
                  transformOrigin: 'top',
                  backgroundColor: '#F6FFFB', 
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  maxHeight: isDropdownOpen ? '300px' : '0px',
                  overflow: 'hidden',
                }}
              >
                {currencyOptions.map((option, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-[#E7FFF5] cursor-pointer text-base transition-colors duration-150"
                    onClick={() => {
                      setSelectedCurrency(option.label);
                      setIsDropdownOpen(false);
                    }}
                    style={{
                      backgroundColor: selectedCurrency === option.label ? '#33FFA8' : 'white',
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>

            {/* User Icon */}
            <div className="border-2 border-[#33FFA8] p-1 rounded-full h-14 w-14 flex items-center justify-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUser} // Use the FontAwesome user icon as the default
                  className="text-[#33FFA8] text-2xl"
                />
              )}
            </div>
          </div>
        </div>
          
      {/* affilaitr topper for mobile   */}
      <div className="flex flex-col gap-3  md-min:hidden justify-between items-center mb-6">
          <div className="flex w-full items-center justify-between ">
            {/* user icon */}
            <div className="border-2 border-[#33FFA8] p-1 rounded-full h-10 w-10 flex items-center justify-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUser} // Use the FontAwesome user icon as the default
                  className="text-[#33FFA8] text-2xl"
                />
              )}
            </div>
            {/* user icon */}

            {/* hamburger menu */}
              <MobileSideBar/>
            {/* hamburger menu */}
          </div>

 {/* Currency Dropdown and and text*/}
          <div className="flex justify-between items-center w-full">

          <h2 className="font-semibold text-sm ">
            Affiliate Dashboard
          </h2>

          <div className="relative inline-block">
              <div
                className="flex items-center text-[#33FFA8]  rounded-lg text-xs cursor-pointer py-2 px-4"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{
                  backgroundColor: "#F6FFFB",
                  boxShadow: "inset 0 2px 5px rgba(0, 0, 0, 0.25)",
                }}
              >
                <span>{selectedCurrency}</span>
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faChevronUp : faChevronDown}
                  className="ml-4 transition-transform duration-200 ease-in-out"
                  style={{ fontSize: '12px', transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              
              <div
                className={`absolute right-0 mt-1 bg-[#F6FFFB] rounded-lg shadow-lg z-10 transform transition-all duration-300 ease-in-out origin-top ${
                  isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}
                style={{
                  transformOrigin: 'top',
                  backgroundColor: '#F6FFFB',
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  maxHeight: isDropdownOpen ? '300px' : '0px',
                  overflow: 'hidden',
                }}
              >
                {currencyOptions.map((option, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-[#E7FFF5] cursor-pointer text-base transition-colors duration-150"
                    onClick={() => {
                      setSelectedCurrency(option.label);
                      setIsDropdownOpen(false);
                    }}
                    style={{
                      backgroundColor: selectedCurrency === option.label ? '#33FFA8' : 'white',
                    }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>
            
          </div>


        </div>
        {/* Welcome Section */}
        <div
          style={{
            background: "linear-gradient(90deg, #10E7E7 0%, #33FFA8 100%)",
          }}
          className="md-min:py-3 py-2 px-2 md-min:px-6 md-min:mb-6 rounded-2xl"
        >
          <p className="font-bold md-min:text-2xl text-lg text-white">
            Welcome back, Ruth Chinoye
          </p>
        </div>

        {/* Scrollable section starts here */}
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <DashBoardCards />
          <AffiliateIncomeChart />

          {/* New Flex Container for the Three Sections */}
          <div className="flex md-min:flex-row  flex-col md-min:space-x-6 gap-8 mt-6 mb-20">
            <div className="flex flex-col  space-y-6 md-min:w-[500px]">
              <SalesProgress />
              <AvailableCourses />
            </div>

            <div className="md-min:w-[400px] w-full ">
              <DailyTransactions />
            </div>
          </div>
          
          {/* Get in touch section */}
          <div className="mb-8">
            <GetInTouch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
