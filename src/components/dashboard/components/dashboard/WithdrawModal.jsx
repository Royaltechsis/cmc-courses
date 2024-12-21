import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import bankIcon from "../../../../assets/images/bank_icon.png";
import clevaIcon from "../../../../assets/images/cleva_icon.png";

const WithdrawModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Bank");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#F6FFFB] rounded-xl w-[400px] sm:w-[500px] p-8 relative transform transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-lg text-gray-500 hover:text-gray-700 flex items-center transition-all duration-300"
        >
          <IoArrowBack className="mr-1 text-xl transition-all duration-300" />
          <span className="text-sm font-bold transition-all duration-300">
            Back
          </span>
        </button>

        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Withdraw</h2>
        </div>

        {/* Available Balance */}
        <div className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] text-white py-3 rounded-xl mb-6">
          <div className="flex justify-between items-center px-4">
            <p className="text-sm font-medium">Available Balance</p>
            <p className="text-xl font-bold">$2000.00</p>
          </div>
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="text-sm text-gray-700 font-bold">Amount</label>
          <input
            type="number"
            placeholder="150"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:border-[#00C292] outline-none transition-all duration-300"
          />
        </div>

        {/* Payment Method Selection */}
        <div className="mb-4">
          <label className="text-sm text-gray-700 font-bold">Withdraw to:</label>
          <div className="flex space-x-4 mt-2">
            {/* Bank Transfer Option */}
            <div
              onClick={() => setPaymentMethod("Bank")}
              className={`flex items-center justify-center py-2 px-4 bg-white border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                paymentMethod === "Bank"
                  ? "border-[#33FFA8]"
                  : "border-gray-200"
              }`}
            >
              <img src={bankIcon} alt="Bank Transfer" className="w-20 h-15" />
            </div>

            {/* Cleva Option */}
            <div
              onClick={() => setPaymentMethod("Cleva")}
              className={`flex items-center justify-center py-2 px-9 bg-white border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                paymentMethod === "Cleva"
                  ? "border-[#33FFA8]"
                  : "border-gray-200"
              }`}
            >
              <img src={clevaIcon} alt="Cleva" className="w-10 h-13" />
            </div>
          </div>
        </div>

        {/* Conditional Fields Based on Payment Method */}
        {paymentMethod === "Bank" ? (
          <>
            <div className="mb-4">
              <label className="text-sm text-gray-700 font-medium">
                Bank holder name
              </label>
              <input
                type="text"
                placeholder="Ruth Chinoye"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:border-[#33FFA8] outline-none transition-all duration-300"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-700 font-medium">
                Account number
              </label>
              <input
                type="text"
                placeholder="1234567890"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:border-[#33FFA8] outline-none transition-all duration-300"
                disabled
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="text-sm text-gray-700 font-medium">
                Registered email
              </label>
              <input
                type="email"
                placeholder="ruthchinoye@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:border-[#33FFA8] outline-none transition-all duration-300"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-700 font-medium">Cleva tag</label>
              <input
                type="text"
                placeholder="@ruthchinoye"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:border-[#33FFA8] outline-none transition-all duration-300"
                disabled
              />
            </div>
          </>
        )}

        {/* Withdraw Button */}
        <button className="w-full bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] text-white py-3 mt-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default WithdrawModal;
