import React from "react";
import { IoArrowBack } from "react-icons/io5"; // Back arrow icon
import { Link, useLocation } from "react-router-dom";
import withdrawalsIcon from "../../assets/images/checkbadge.png";
import Sidebar from "./components/Sidebar"; // Ensure Sidebar component path is correct

const WithdrawalDetails = () => {
  const location = useLocation();
  const withdrawal = location.state ? location.state.withdrawal : {}; // Safely extract withdrawal object

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar />
      <div className="w-3/4 py-2 px-16 overflow-y-auto relative">
       {/* Main white background container with custom shadow */}
       <div className="bg-[#F6FFFB] mx-3 my-16 p-8 pb-16 rounded-2xl shadow-custom relative">
        
         {/* Back Button now inside the white container */}
         <Link
          to="/withdrawals"
          className="absolute top-4 left-4 text-lg text-gray-500 hover:text-gray-700 flex items-center transition-all duration-300"
        >
          <IoArrowBack className="mr-1 text-xl transition-all duration-300" />
          <span className="text-sm font-bold transition-all duration-300">
            Back
          </span>
        </Link>

        <h1 className="text-2xl text-center font-bold mt-12 mb-10">Withdrawal Details</h1>

        {/* Success message */}
        <div className="bg-gray-50 border border-[#33ffa8] p-8 rounded-2xl mb-5 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={withdrawalsIcon}
              alt="Withdrawal Icon"
              className="h-20 w-20 mb-4"
            />
            <p className="text-[#33FFA8] mb-6 text-lg font-bold">
              Withdrawal Successful
            </p>
            <h2 className="text-4xl font-bold text-black mt-2 mb-10">
              {withdrawal.amount || "1200.00"}
            </h2>
          </div>
          <div className="border-b mb-10"></div>

          <div className="space-y-5 text-gray-600">
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
          <h3 className="text-lg font-bold mb-4">Withdrawal Details</h3>
          <div className="space-y-5 text-gray-600">
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
              <p className="text-black">{withdrawal.method || "Bank Transfer [Nigeria]"}</p>
            </div>
            <div className="flex justify-between">
              <p>Transaction Number:</p>
              <p className="text-black">{withdrawal.transactionNumber || "123456789012345678"}</p>
            </div>
            <div className="flex justify-between">
              <p>Creation Time:</p>
              <p className="text-black">{withdrawal.creationTime || "4/03/2024 19:50 PM"}</p>
            </div>
            <div className="flex justify-between">
              <p>Completion Time:</p>
              <p className="text-black">{withdrawal.completionTime || "5/03/2024 7:10 AM"}</p>
            </div>
            <div className="flex justify-between">
              <p>Order ID:</p>
              <p className="text-black">{withdrawal.orderId || "412789063597"}</p>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default WithdrawalDetails;
