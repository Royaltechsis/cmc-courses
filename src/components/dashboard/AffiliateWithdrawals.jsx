import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import withdrawalsIcon from "../../assets/images/affiliate/withdrawIcon2.png";
import { initialWithdrawalsData } from "../dashboard/components/affiliatewithdrawals/withdrawalData";
import Sidebar from "./components/Sidebar";
import GetInTouch from "./components/getInTouch";

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
      <div className="w-3/4 py-2 px-16 overflow-y-auto">
        <div className="relative block items-center mt-3 mb-1 pt-10">
          <div
            style={{
              background: "linear-gradient(90deg, #10E7E7 0%, #33FFA8 100%)",
            }}
            className="py-3 px-6 rounded-2xl z-10 relative ml-10 mr-10"
          >
            <p className="font-bold text-2xl text-white">
              See Your Withdrawals Below, Ruth Chinoye
            </p>
          </div>

          <div
            className="rounded-3xl p-6 relative -top-10 pt-20"
            style={{
              backgroundColor: "#F6FFFB",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              marginLeft: "10px",
            }}
          >
            <div className="block text-[#71737C]">
              <div className="flex justify-between items-center mt-5 mx-5 font-bold">
                <p className="font-bold text-black text-[21px]">Withdrawals</p>
              </div>

              <div
                className="flex flex-col justify-center items-center my-6 bg-gray-50 rounded-xl p-4"
                style={{
                  boxShadow: "inset 0 0 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="overflow-y-auto hide-scrollbar" style={{ maxHeight: "300px" }}>
                  {currentWithdrawals.map((withdrawal, index) => (
                    <div
                      key={index}
                      onClick={() => handleWithdrawalClick(withdrawal)}
                      className={`flex justify-between text-sm text-center mt-5 ${
                        index !== currentWithdrawals.length - 1 ? "border-b border-gray-250" : ""
                      }  cursor-pointer`}
                    >
                      <div className="rounded-full bg-[#33A57C] bg-opacity-20 border-[#33A57C] h-[50px] w-[52px] ml-1 flex items-center justify-center mb-5">
                        <img src={withdrawalsIcon} className="h-8 w-7" alt="Sales Icon" />
                      </div>
                      <div className="pr-64 pl-4">
                        <div className="text-lg font-bold text-black whitespace-nowrap">
                          <p>Withdrawal to your bank (****4680)</p>
                        </div>
                        <div className="flex gap-5">
                          <p>{withdrawal.date}</p>
                          <p>{withdrawal.time}</p>
                        </div>
                      </div>
                      <div className="text-right pr-1">
                        <p className="text-black text-lg font-bold">{withdrawal.amount}</p>
                        <p className="text-[#33FFA8] font-bold">{withdrawal.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-4">
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
                <div className="font-bold rounded-md text-black">
                  Total Withdrawal: ${calculateTotalWithdrawals().toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-12">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default AffiliateWithdrawals;
