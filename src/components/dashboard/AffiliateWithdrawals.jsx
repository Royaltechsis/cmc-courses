import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import withdrawalsIcon from "../../assets/images/affiliate/withdrawIcon2.png";
import { initialWithdrawalsData } from "../dashboard/components/affiliatewithdrawals/withdrawalData";
import Sidebar from "./components/Sidebar";
import GetInTouch from "./components/getInTouch";
import MobileSideBar from './components/mobilesidebar'

const AffiliateWithdrawals = () => {
  const [withdrawalsData, setWithdrawalsData] = useState(initialWithdrawalsData);
  const [currentPage, setCurrentPage] = useState(1);
  const withdrawalsPerPage = 15;
  const navigate = useNavigate();

  const totalPages = Math.ceil(withdrawalsData.length / withdrawalsPerPage);
  const indexOfLastWithdrawal = currentPage * withdrawalsPerPage;
  const indexOfFirstWithdrawal = indexOfLastWithdrawal - withdrawalsPerPage;
  const currentWithdrawals = withdrawalsData.slice(indexOfFirstWithdrawal, indexOfLastWithdrawal);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleWithdrawalClick = (withdrawal) => {
    // Navigate to WithdrawalDetails page and pass the selected withdrawal data
    navigate("/withdrawal-details", { state: { withdrawal } });
  };

  // Calculate total withdrawals amount
  const calculateTotalWithdrawals = () => {
    return withdrawalsData.reduce((total, withdrawal) => {
      const amount = parseFloat(withdrawal.amount.replace("$", "").trim());
      if (isNaN(amount)) {
        console.warn("Invalid withdrawal amount detected:", withdrawal.amount);
      }
      return total + (isNaN(amount) ? 0 : amount);
    }, 0);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileSideBar/>
      <div className="relative   flex-col w-full flex  mt-3 mb-1 py-10 md-min:w-3/4  md-min:px-16 ">
      
        <div
        style={{
          background: "linear-gradient(90deg, #10E7E7 0%, #33FFA8 100%)",
        }}
        className="py-3 px-4 md-min:px-6 rounded-2xl z-10 relative mb-8  md-min:mx-10 mx-3"
        >
        <p className="font-bold text-lg md-min:text-2xl  text-white">
          See Your Withdrawals Below, Ruth Chinoye
        </p>
        </div>

        <div
        className="flex-1 overflow-y-auto scrollbar-hidden"
        >
          <div
        className="rounded-3xl p-3 md:p-6 relative md-min:-top-10 md-min:pt-20 mx-3"
        style={{
          backgroundColor: "#F6FFFB",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        
        }}
        >
        <div className="block text-[#71737C]">
          <div className="flex justify-between items-center md-min:mt-5 mx-2 md:mx-5 font-bold">
          <p className="font-bold text-lg md-min:text-[21px] text-black">Withdrawals</p>
          </div>

          <div
          className="flex flex-col justify-center items-center my-6 bg-gray-50 rounded-xl p-2 md:p-4"
          style={{
            boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.25)",
          }}
          >
          <div className="w-full overflow-x-auto">
            <div className="min-w-[768px] overflow-y-auto hide-scrollbar" style={{ maxHeight: "300px" }}>
            {currentWithdrawals.map((withdrawal, index) => (
              <div
              key={index}
              onClick={() => handleWithdrawalClick(withdrawal)}
              className={`flex md-min:justify-between text-sm text-center mt-5 ${
                index !== currentWithdrawals.length - 1 ? "border-b border-gray-250" : ""
              }  cursor-pointer`}
              >
              <div className="rounded-full bg-[#33A57C] bg-opacity-20 border-[#33A57C] md-min:h-[50px] md-min:w-[52px] h-[30px] w-[32px] ml-1 flex items-center  justify-center mb-5">
                <img src={withdrawalsIcon} className="md-min:h-8 md-min:w-7 h-5 w-4 " alt="Sales Icon" />
              </div>
              <div className="pr-64 pl-4">
                <div className="md-min:text-lg font-bold text-sm text-black whitespace-nowrap">
                <p>Withdrawal to your bank (****4680)</p>
                </div>
                <div className="flex gap-5">
                <p>{withdrawal.date}</p>
                <p>{withdrawal.time}</p>
                </div>
              </div>
              <div className="text-right pr-1">
                <p className="text-black md-min:text-lg text-sm font-bold">{withdrawal.amount}</p>
                <p className="text-[#33FFA8] md-min:text-base text-xs font-bold">{withdrawal.status}</p>
              </div>
              </div>
            ))}
            </div>
          </div>
          </div>

          <div className="flex justify-end mt-4 overflow-x-auto">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="mx-1 px-3 py-1 border rounded bg-white text-black"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded ${
              currentPage === index + 1 ? "bg-[#33FFA8] text-black" : "bg-white text-black"
            }`}
            >
            {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="mx-1 px-3 py-1 border rounded bg-white text-black"
          >
            &gt;
          </button>
          </div>

          <div className="flex justify-between items-center mt-3">
          <div className="font-bold rounded-md text-black md-min:text-base text-xs md:text-base">
            Total Withdrawal: ${calculateTotalWithdrawals().toFixed(2)}
          </div>
          </div>
        </div>
        </div>

        <div className="mt-5 mb-12">
        <GetInTouch />
      </div>

        </div>
        


      
      </div>
    </div>
    );
};

export default AffiliateWithdrawals;
