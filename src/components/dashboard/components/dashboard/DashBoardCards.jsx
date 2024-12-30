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
        <div className="md-min:grid flex flex-col gap-3 md-min:grid-cols-3 md-min:gap-9 mt-10">
          <div className="bg-[#FFF5E0] rounded-[14px] md-min:w-[270px] md-min:h-[182px] shadow-lg flex md-min:flex-col flex-row">
            <div className="md-min:px-10 px-5 py-4 md-min:py-4 flex md-min:flex-col flex-row   items-left md-min:justify-left w-full justify-between">
              <div className="rounded-full bg-[#FFA400] bg-opacity-20 border-[#FFA400] h-10 w-10 flex items-center justify-center mb-0 md-min:mb-7 md-min:mt-3 mt-0">
                <span className="text-2xl text-[#F46565] font-bold">$</span>
              </div>
              <div className="items-right justify-center flex flex-col">
                <p className="md-min:text-xl text-sm font-semibold font-sans md-min:text-left text-right text-[#080D1C] whitespace-nowrap">
                  $1,450.00
                </p>
                <p className="md-min:text-xl text-xs font-semibold font-sans md-min:text-left text-right text-[#080D1C] whitespace-nowrap">
                  Today's Affiliate Earnings
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#EFE6F6] rounded-[14px] md-min:w-[270px] md-min:h-[182px] shadow-lg flex md-min:flex-col flex-row">
            <div className="md-min:px-10 px-5 py-4 md-min:py-4 flex md-min:flex-col flex-row   items-left md-min:justify-left w-full justify-between">
              <div className="rounded-full bg-[#7623B5] bg-opacity-20 border-[#7623B5] h-10 w-10 flex items-center justify-center mb-0 md-min:mb-7 md-min:mt-3 mt-0">
                <img src={salesIcon} className="h-6 w-6" alt="Sales Icon" />{" "}
              </div>
              <div className="items-right justify-center flex flex-col">
                <p className="md-min:text-xl text-sm font-semibold font-sans md-min:text-left text-right text-[#080D1C] whitespace-nowrap">
                145
              </p>
              <p className="md-min:text-xl text-xs font-semibold font-sans md-min:text-left text-right text-[#080D1C] whitespace-nowrap">
                Today's Affiliate Sales
              </p>
              </div>
              
            </div>
          </div>

          <div className="bg-[#E0F8EA] rounded-[14px] md-min:w-[270px] md-min:h-[182px] shadow-lg flex md-min:flex-col flex-row">
            <div className="md-min:px-10 px-5 py-4 md-min:py-4 flex md-min:flex-col flex-row   items-left md-min:justify-left w-full justify-between">
              <div className="rounded-full bg-[#33A57C] bg-opacity-20 border-[#33A57C]h-10 w-10 flex items-center justify-center mb-0 md-min:mb-7 md-min:mt-3 mt-0">
                <span className="text-2xl text-[#33A57C] font-bold">$</span>
              </div>
              <div className="items-right justify-center flex flex-col">
                <p className="md-min:text-xl text-sm font-semibold font-sans md-min:text-left text-right text-[#080D1C] whitespace-nowrap">
                  $16,000.00
                </p>
                <p className="md-min:text-xl text-xs font-semibold font-sans md-min:text-left text-right text-[#080D1C] whitespace-nowrap">
                  Today's Affiliate Earnings
                </p>
              </div>
             
            </div>
          </div>
        </div>
        
        {/* Today's Affiliate Earnings second row*/}
        <div className="md-min:grid md-min:grid-cols-3 md-min:gap-9 flex flex-col gap-3 mt-10">
          <div className="bg-[#FFF5E0] rounded-[14px] md-min:w-[270px] md-min:h-[182px] shadow-lg flex md-min:flex-col flex-row">
            <div className="md-min:px-10 px-5 py-4 md-min:py-4 flex md-min:flex-col flex-row   items-left md-min:justify-left w-full justify-between">
              <div className="rounded-full bh-10 w-10 flex items-center justify-center mb-0 md-min:mb-7 md-min:mt-3 mt-0">
                <img src={salesIcon2} className="h-6 w-6" alt="Sales Icon" />{" "}
              </div>
              <div className="items-right justify-center flex flex-col">
              <p className="md-min:text-xl text-sm md-min:text-left text-right font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                1600
              </p>
              <p className="md-min:text-sm text-xs text-[#71737C] font-normal whitespace-nowrap">
                Today's Affiliate Sales
              </p>
              </div>
             
            </div>
          </div>

          <div className="bg-[#EFE6F6] rounded-[14px] md-min:w-[270px] md-min:h-[182px] shadow-lg flex md-min:flex-col flex-row">
            <div className="md-min:px-10 py-4 px-2 flex md-min:flex-col flex-row md-min:items-left md-min:justify-left w-full justify-between">
              <div className=" flex flex-row   items-center md-min:justify-left w-full justify-between">
                <div className="rounded-full bg-[#7623B5] bg-opacity-20 p-2 border-[#7623B5] h-10 w-10 flex items-center justify-center mb-0 md-min:mb-7 md-min:mt-3 mt-0">
                  <span className="text-xl text-[#7623B5] font-bold">$</span>
                </div>
                <button
                  className="bg-[#F6FFFB] border-2  border-[#7623B5] text-[#7623B5] font-bold px-4 py-2 rounded-md transition-all duration-500 ease-in-out md-min:block hidden hover:bg-[#7623B5] hover:text-white"
                  onClick={handleCashoutClick}
                >
                  Cashout
                </button>
              </div>
              <div className="md-min:items-start md-min:justify-center md-min:flex-start  flex  items-end flex-col">
              <p className="md-min:text-xl text-sm md-min:text-left text-right font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                $2000.00
              </p>
              <p className="md-min:text-sm text-xs text-[#71737C] font-normal whitespace-nowrap">
                Available Affiliate Earnings
              </p>
              <button
                  className="bg-[#F6FFFB] border-2 border-[#7623B5] text-[#7623B5] font-bold md-min:px-4 md-min:py-2 rounded-md mt-3 transition-all duration-500 ease-in-out block w-auto md-min:hidden hover:bg-[#7623B5] md-min:text-base px-3 py-2 text-sm hover:text-white"
                  onClick={handleCashoutClick}
                >
                  Cashout
                </button>
              </div>
              
            </div>
          </div>

          <div className="bg-[#E0F8EA] rounded-[14px] md-min:w-[270px] md-min:h-[182px] shadow-lg flex md-min:flex-col flex-row">
            <div className="md-min:px-10 px-5 py-4 md-min:py-4 flex md-min:flex-col flex-row   items-left md-min:justify-left w-full justify-between">
              <div className="rounded-full bg-[#33A57C] bg-opacity-20 border-[#33A57C] h-10 w-10 flex items-center justify-center mb-0 md-min:mb-7 md-min:mt-3 mt-0">
                <img src={withdrawalsIcon} className="h-6 w-6" alt="Sales Icon" />{" "}
              </div>
              <div className="items-right justify-center flex flex-col">
              <p className="md-min:text-xl text-sm md-min:text-left text-right font-semibold font-sans text-[#080D1C] whitespace-nowrap">
                $16,000.00
              </p>
              <p className="md-min:text-sm text-xs text-[#71737C] font-normal whitespace-nowrap">
                Total Withdrawal
              </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <WithdrawModal isOpen={isWithdrawModalOpen} onClose={closeWithdrawModal} />
    </>
  );
};

export default DashBoardCards;
