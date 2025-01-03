import React from "react";
import { IoArrowBack } from "react-icons/io5"; // Back arrow icon
import { Link, useLocation } from "react-router-dom";
import withdrawalsIcon from "../../assets/images/checkbadge.png";
import Sidebar from "./components/Sidebar"; // Ensure Sidebar component path is correct
import MobileSideBar from './components/mobilesidebar'

const WithdrawalDetails = () => {
  const location = useLocation();
  const withdrawal = location.state ? location.state.withdrawal : {}; // Safely extract withdrawal object

  return (
    <div className="flex h-screen flex-col md-min:flex-row overflow-hidden ">
      <Sidebar />
      <MobileSideBar/>

      <div className='w-full py-7 h-7 md-min:hidden'> </div>


      <div className="md-min:w-3/4 w-full flex-1  scrollbar-hidden py-2 md-min:px-16 p-3 overflow-y-auto relative">
       {/* Main white background container with custom shadow */}
       <div className="bg-[#F6FFFB] mx-3 mb-16 md-min:mt-14  p-3 md-min:p-8 pb-16 rounded-2xl shadow-custom relative">
        
         {/* Back Button now inside the white container */}
         <Link
          to="/withdrawals"
          className="absolute top-4 left-4 text-lg text-gray-500 hover:text-gray-700 flex items-center transition-all duration-300 "
        >
          <IoArrowBack className="mr-1 text-xl transition-all duration-300" />
          <span className="text-sm font-bold transition-all duration-300">
            Back
          </span>
        </Link>

        <h1 className="md-min:text-2xl text-xl  text-center font-bold mt-12 mb-10">Withdrawal Details</h1>

        {/* Success message */}
        <div className="bg-gray-50 border border-[#33ffa8] p-8 rounded-2xl mb-5 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={withdrawalsIcon}
              alt="Withdrawal Icon"
              className="md-min:h-20 md-min:w-20 h-10 w-10  mb-4"
            />
            <p className="text-[#33FFA8] mb-6 text-sm md-min:text-lg font-bold md-min:text-left text-center">
              Withdrawal Successful
            </p>
            <h2 className="md-min:text-4xl text-2xl font-bold text-black mt-2 md-min:mb-10 mb-5">
              {withdrawal.amount || "1200.00"}
            </h2>
          </div>
          <div className="border-b md-min:mb-10 mb-5"></div>

          <div className="md-min:space-y-5 space-y-2 text-gray-600 md-min:text-base text-xs">
            <div className="flex justify-between">
              <p>Amount Withdrawn:</p>
              <p>{withdrawal.amount || "1200.00"}</p>
            </div>
            <div className="flex justify-between">
              <p>Fee Charged:</p>
              <p>{withdrawal.fee || "0.00"}</p>
            </div>
            <div className="flex justify-between">
              <p>Amount Paid:</p>
              <p>{withdrawal.amountPaid || "1200.00"}</p>
            </div>
          </div>
        </div>

        {/* Withdrawal details */}
        <div className="bg-gray-50 border border-[#33ffa8] p-8 rounded-2xl max-w-3xl mx-auto">
          <h3 className="md-min:text-lg text-sm font-bold mb-4">Withdrawal Details</h3>
          <div className="md-min:space-y-5 space-y-2 text-gray-600 md-min:text-base text-xs">
            <div className="flex justify-between">
              <p>Recipient Name:</p>
              <p className="text-black font-bold">{withdrawal.recipient || "Ruth Chinoye"}</p>
            </div>
            <div className="flex justify-between">
              <p>Transaction Type:</p>
              <p className="text-black">{withdrawal.transactionType || "Withdraw"}</p>
            </div>
            <div className="flex justify-between">
              <p>Withdrawal Method:</p>
              <p className="text-black text-right">{withdrawal.method || "Bank Transfer [Nigeria]"}</p>
            </div>
            <div className="flex justify-between">
              <p>Transaction Number:</p>
              <p className="text-black text-right">{withdrawal.transactionNumber || "123456789012345678"}</p>
            </div>
            <div className="flex justify-between">
              <p>Creation Time:</p>
              <p className="text-black text-right">{withdrawal.creationTime || "4/03/2024 19:50 PM"}</p>
            </div>
            <div className="flex justify-between">
              <p>Completion Time:</p>
              <p className="text-black text-right">{withdrawal.completionTime || "5/03/2024 7:10 AM"}</p>
            </div>
            <div className="flex justify-between">
              <p>Order ID:</p>
              <p className="text-black text-right">{withdrawal.orderId || "412789063597"}</p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default WithdrawalDetails;
