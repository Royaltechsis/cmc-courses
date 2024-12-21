import React, { useState } from "react";
import WithdrawModal from "./WithdrawModal";
import salesIcon2 from "../../../../assets/images/affiliate/affiliatesales2.png";
import salesIcon from "../../../../assets/images/affiliate/salesicon.png";
import withdrawalsIcon from "../../../../assets/images/affiliate/withdrawIcon2.png";

const DashBoardCards = () => {
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const handleCashoutClick = () => {
    setWithdrawModalOpen(true);
  };

  const closeWithdrawModal = () => {
    setWithdrawModalOpen(false);
  };
  
  return (
    <>
      <div className="mb-20">
        {/* Today's Affiliate Earnings first row*/}
        <div className="grid grid-cols-3 gap-9 mt-10">
          <div className="bg-[#FFF5E0] rounded-[14px] w-[270px] h-[182px] shadow-lg">
            <div className="px-10 py-4 flex flex-col items-left justify-left w-full">
              <div className="rounded-full bg-[#FFA400] bg-opacity-20 border-[#FFA400] h-10 w-10 flex items-center justify-center mb-7 mt-3">
                <span className="text-2xl text-[#F46565] font-bold">$</span>
              </div>
              <p className="text-xl font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                $1,450.00
              </p>
              <p className="text-sm text-[#71737C] font-normal whitespace-nowrap">
                Today's Affiliate Earnings
              </p>
            </div>
          </div>

          <div className="bg-[#EFE6F6] rounded-[14px] w-[270px] h-[182px] shadow-lg">
            <div className="px-10 py-4 flex flex-col items-left justify-left w-full">
              <div className="rounded-full bg-[#7623B5] bg-opacity-20 border-[#7623B5] h-10 w-10 flex items-center justify-center mb-7 mt-3">
                <img src={salesIcon} className="h-6 w-6" alt="Sales Icon" />{" "}
              </div>
              <p className="text-xl font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                145
              </p>
              <p className="text-sm text-[#71737C] font-normal whitespace-nowrap">
                Today's Affiliate Sales
              </p>
            </div>
          </div>

          <div className="bg-[#E0F8EA] rounded-[14px] w-[270px] h-[182px] shadow-lg">
            <div className="px-10 py-4 flex flex-col items-left justify-left w-full">
              <div className="rounded-full bg-[#33A57C] bg-opacity-20 border-[#33A57C] h-10 w-10 flex items-center justify-center mb-7 mt-3">
                <span className="text-2xl text-[#33A57C] font-bold">$</span>
              </div>
              <p className="text-xl font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                $16,000.00
              </p>
              <p className="text-sm text-[#71737C] font-normal whitespace-nowrap">
                Today's Affiliate Earnings
              </p>
            </div>
          </div>
        </div>
        
        {/* Today's Affiliate Earnings second row*/}
        <div className="grid grid-cols-3 gap-9 mt-10">
          <div className="bg-[#FFF5E0] rounded-[14px] w-[270px] h-[182px] shadow-lg">
            <div className="px-10 py-4 flex flex-col items-left justify-left w-full">
              <div className="rounded-full bg-[#FFA400] bg-opacity-20 border-[#FFA400] h-10 w-10 flex items-center justify-center mb-7 mt-3">
                <img src={salesIcon2} className="h-6 w-6" alt="Sales Icon" />{" "}
              </div>
              <p className="text-xl font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                1600
              </p>
              <p className="text-sm text-[#71737C] font-normal whitespace-nowrap">
                Today's Affiliate Sales
              </p>
            </div>
          </div>

          <div className="bg-[#EFE6F6] rounded-[14px] w-[270px] h-[182px] shadow-lg">
            <div className="px-10 py-4 flex flex-col items-left justify-left w-full">
              <div className="flex items-center justify-between mb-7">
                <div className="rounded-full bg-[#7623B5] bg-opacity-20 border-[#7623B5] h-10 w-10 flex items-center justify-center mt-3">
                  <span className="text-xl text-[#7623B5] font-bold">$</span>
                </div>
                <button
                  className="bg-[#F6FFFB] border-2 border-[#7623B5] text-[#7623B5] font-bold px-4 py-2 rounded-md mt-3 transition-all duration-500 ease-in-out hover:bg-[#7623B5] hover:text-white"
                  onClick={handleCashoutClick}
                >
                  Cashout
                </button>
              </div>
              <p className="text-xl font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                $2000.00
              </p>
              <p className="text-sm text-[#71737C] font-normal whitespace-nowrap">
                Available Affiliate Earnings
              </p>
            </div>
          </div>

          <div className="bg-[#E0F8EA] rounded-[14px] w-[270px] h-[182px] shadow-lg">
            <div className="px-10 py-4 flex flex-col items-left justify-left w-full">
              <div className="rounded-full bg-[#33A57C] bg-opacity-20 border-[#33A57C] h-10 w-10 flex items-center justify-center mb-7 mt-3">
                <img src={withdrawalsIcon} className="h-6 w-6" alt="Sales Icon" />{" "}
              </div>
              <p className="text-xl font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                $16,000.00
              </p>
              <p className="text-sm text-[#71737C] font-normal whitespace-nowrap">
                Total Withdrawal
              </p>
            </div>
          </div>
        </div>
      </div>
      <WithdrawModal isOpen={isWithdrawModalOpen} onClose={closeWithdrawModal} />
    </>
  );
};

export default DashBoardCards;
