import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MobileSidebar from "./components/mobilesidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AffiliateProfile = () => {
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [profileImage, setProfileImage] = useState(null);
  const [country, setCountry] = useState("Nigeria");
  const [state, setState] = useState("Lagos");

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); 

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const countryOptions = [{ value: "Nigeria", label: "Nigeria" }];
  const stateOptions = [{ value: "Lagos", label: "Lagos" }];
  const paymentOptions = [
    { value: "Bank Transfer", label: "Bank Transfer" },
    { value: "Cleva", label: "Cleva" },
  ];

  const handleCancel = () => {
    setCountry("Nigeria");
    setState("Lagos");
    setPaymentMethod("Bank Transfer");
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <MobileSidebar/>
      <div className="md-min:w-3/4 py-2 md-min:px-16 w-full overflow-y-auto">
        <div className="relative block items-center mt-3 mb-1 py-10">
          <section className="bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] rounded-t-3xl p-6 flex items-center justify-between mb-0">
            <h1 className="text-xl font-bold text-gray-800">Edit Profile</h1>
            <div className="relative md-min:w-16 md-min:h-16 w-12 h-12 rounded-full bg-[#edf5f4] border-4 border-white flex items-center justify-center overflow-hidden">
              <label htmlFor="imageUpload" className="cursor-pointer">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full  h-full object-cover object-center" />
                ) : (
                  <FontAwesomeIcon icon={faUser} className="text-[#33ffa8] text-3xl" />
                )}
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="absolute opacity-0 w-0 h-0"
                onChange={handleImageUpload}
                disabled={!isEditing}
              />
            </div>
          </section>

          <section className="bg-[#F6FFFB] p-8 pt-20 rounded-b-3xl md-min:text-base text-sm shadow-lg">
          <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                  disabled={!isEditing}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                disabled={!isEditing}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold">Contact Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                disabled={!isEditing}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold">Home Address</label>
              <input
                type="text"
                placeholder="Enter your home address"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                disabled={!isEditing}
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label className="block text-gray-700 font-semibold">Country</label>
                <div
                  className="border border-gray-300 rounded-lg p-2 cursor-pointer flex justify-between items-center"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  
                >
                  <span>{countryOptions.find(option => option.value === country)?.label}</span>
                  <FontAwesomeIcon
                    icon={isCountryDropdownOpen ? faChevronUp : faChevronDown}
                    className="ml-2 transition-transform duration-200 ease-in-out"
                    style={{ fontSize: '12px', transform: isCountryDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>
                <div
                  className={`absolute right-0 mt-1 bg-[#F6FFFB] rounded-lg shadow-lg z-10 transition-all duration-200 ease-in-out ${isCountryDropdownOpen ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    transform: isCountryDropdownOpen ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                  }}
                >
                  {countryOptions.map(option => (
                    <div
                      key={option.value}
                      className="p-2 hover:bg-[#33FFA8] cursor-pointer"
                      onClick={() => {
                        setCountry(option.value);
                        setIsCountryDropdownOpen(false);
                      }}
                      style={{ backgroundColor: country === option.value ? '#33FFA8' : 'white' }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <label className="block text-gray-700 font-semibold">State</label>
                <div
                  className="border border-gray-300 rounded-lg p-2 cursor-pointer flex justify-between items-center"
                  onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                >
                  <span>{stateOptions.find(option => option.value === state)?.label}</span>
                  <FontAwesomeIcon
                    icon={isStateDropdownOpen ? faChevronUp : faChevronDown}
                    className="ml-2 transition-transform duration-200 ease-in-out"
                    style={{ fontSize: '12px', transform: isStateDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>
                <div
                  className={`absolute right-0 mt-1 bg-[#F6FFFB] rounded-lg shadow-lg z-10 transition-all duration-200 ease-in-out ${isStateDropdownOpen ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    transform: isStateDropdownOpen ? 'scaleY(1)' : 'scaleY(0)',
                    transformOrigin: 'top',
                  }}
                >
                  {stateOptions.map(option => (
                    <div
                      key={option.value}
                      className="p-2 hover:bg-[#33FFA8] cursor-pointer"
                      onClick={() => {
                        setState(option.value);
                        setIsStateDropdownOpen(false);
                      }}
                      style={{ backgroundColor: state === option.value ? '#33FFA8' : 'white' }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold">New Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                disabled={!isEditing}
              />
            </div>

            {/* {Withrawal Information Section} */}

            <h2 className="text-lg font-bold text-gray-800 mt-20 mb-8">Withdrawal Information</h2>
            <div className="relative mb-6">
              <label className="block text-gray-700 mb-6 font-semibold">Choose Payment Method</label>
              <div
                className="border border-gray-300 rounded-lg p-2 cursor-pointer flex justify-between items-center"
                onClick={() => setIsPaymentDropdownOpen(!isPaymentDropdownOpen)}
              >
                <span>{paymentMethod}</span>
                <FontAwesomeIcon
                  icon={isPaymentDropdownOpen ? faChevronUp : faChevronDown}
                  className="ml-2 transition-transform duration-200 ease-in-out"
                  style={{ fontSize: '12px', transform: isPaymentDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              <div
                className={`absolute right-0 mt-1 bg-[#F6FFFB] rounded-lg shadow-lg z-10 transition-all duration-200 ease-in-out ${isPaymentDropdownOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  transform: isPaymentDropdownOpen ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'top',
                }}
              >
                {paymentOptions.map(option => (
                  <div
                    key={option.value}
                    className="p-2 hover:bg-[#33FFA8] cursor-pointer"
                    onClick={() => {
                      setPaymentMethod(option.value);
                      setIsPaymentDropdownOpen(false);
                    }}
                    style={{ backgroundColor: paymentMethod === option.value ? '#33FFA8' : 'white' }}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            </div>

            {paymentMethod === "Bank Transfer" && (
              <>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">Bank Name</label>
                  <input
                    type="text"
                    placeholder="Enter bank name"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                    disabled={!isEditing}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">Account Number</label>
                  <input
                    type="text"
                    placeholder="Enter account number"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                    disabled={!isEditing}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">Recipient Name</label>
                  <input
                    type="text"
                    placeholder="Enter recipient name"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                    disabled={!isEditing}
                  />
                </div>
              </>
            )}

            {paymentMethod === "Cleva" && (
            <>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold">Cleva Registered Email Address</label>
                <input
                  type="text"
                  placeholder="Enter cleva email address"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                  disabled={!isEditing}
                />
              </div>
              <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">Cleva Tag</label>
                  <input
                    type="text"
                    placeholder="Enter cleva tag"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                    disabled={!isEditing}
                  />
              </div>
              <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">Recipient Name</label>
                  <input
                    type="text"
                    placeholder="Enter recipient name"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:border-[#33ffa8]"
                    disabled={!isEditing}
                  />
              </div>
            </>
              
            )}

            <div className="flex justify-end gap-6 mb-4">
              {!isEditing ? (
                <button onClick={handleEdit} className="py-2 px-4 rounded-md text-[#33ffa8] border border-[#33ffa8] transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] hover:text-white">
                  Update
                </button>
              ) : (
                <>
                  <button onClick={handleCancel} className="py-2 px-4 rounded-md text-[#33ffa8] border border-[#33ffa8] transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] hover:text-white">
                    Cancel
                  </button>
                  <button onClick={handleSave} className="py-2 px-4 rounded-md text-white bg-[#33ffa8] hover:bg-gradient-to-r from-[#11F1F1] to-[#33FFA8]">
                    Save
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AffiliateProfile;
