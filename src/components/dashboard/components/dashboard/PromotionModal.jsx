import React, { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaTelegramPlane, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCopy } from "@fortawesome/free-solid-svg-icons";

const PromotionModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isOpen]);

  // Function to copy the affiliate link
  const copyToClipboard = () => {
    const affiliateLink = "https://expertskillz.com/affiliate/cmc/rw352";
    navigator.clipboard.writeText(affiliateLink)
      .then(() => alert("Link copied to clipboard!"))
      .catch(error => console.error("Failed to copy:", error));
  };

  // Function to send invite
  const sendInvite = () => {
    if (email) {
      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(email)) {
        alert(`Invitation sent to ${email}`);
        setEmail(""); // Clear email input after sending
      } else {
        alert("Please enter a valid email address.");
      }
    } else {
      alert("Email field cannot be empty.");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-[#F6FFFB] rounded-xl w-[400px] sm:w-[500px] p-10 relative transform transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        {/* Back Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-lg text-gray-500 hover:text-gray-700 flex items-center transition-all duration-300"
        >
          <IoArrowBack className="mr-1 text-xl transition-all duration-300" />
          <span className="text-sm font-bold transition-all duration-300">Back</span>
        </button>

        {/* FontAwesome Square Arrow Icon */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-10 right-9 text-[#33FFA8] text-xl transition-transform duration-200 transform hover:scale-110 active:scale-95"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>

        <h2 className="text-xl font-bold text-gray-900 mt-14">COMPLETE AFFILIATE MASTERY COURSE (CMC)</h2>
        <p className="text-sm text-gray-700 mt-3">
          Copy your unique affiliate link to promote the Complete Affiliate Mastery Course and earn a 50% commission on every sale you generate.
        </p>

        {/* Share Link with Copy Functionality */}
        <div className="mt-6">
          <label className="text-sm font-medium text-gray-700">Share your unique link</label>
          <div className="flex items-center border border-gray-300 rounded-lg mt-1">
            <input
              type="text"
              value="https://expertskillz.com/affiliate/cmc/rw352"
              readOnly
              className="flex-1 p-2 text-sm text-gray-600 bg-transparent outline-none"
            />
            <button
              onClick={copyToClipboard}
              className="px-3 text-black transition-transform duration-200 transform hover:scale-110 active:scale-95"
            >
              <FontAwesomeIcon icon={faCopy} />
            </button>
          </div>
        </div>

        {/* Invite by Email */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">Invite by email</label>
          <div className="flex mt-1">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-gray-300 p-2 rounded-l-lg text-sm focus:outline-none"
            />
            <button
              onClick={sendInvite}
              className="px-4 bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] text-white rounded-r-lg text-sm transition-transform duration-200 transform hover:scale-105 active:scale-95"
            >
              Send invite
            </button>
          </div>
        </div>

        {/* Social Media Icons with Transition */}
        <div className="flex justify-center space-x-4 mt-6 text-[#33FFA8] text-2xl">
          <FaTelegramPlane className="cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95" />
          <FaWhatsapp className="cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95" />
          <FaFacebook className="cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95" />
          <FaInstagram className="cursor-pointer transition-transform duration-200 transform hover:scale-110 active:scale-95" />
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
