import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SecondNavBar from '../../components/navbar/SecondNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import signupBg from "../../assets/images/affiliatebg.png";
import ApiService from "./api/api_routes";
import Footer from '../../components/footer/Footer'

function AffiliateResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isLetterValid, setIsLetterValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const validatePassword = (password) => {
    setIsLengthValid(password.length >= 8);
    setIsLetterValid(/[a-zA-Z]/.test(password));
    setIsNumberValid(/\d/.test(password));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const response = await ApiService.resetPassword(email, newPassword, confirmPassword);
      if (response.success) {
        toast.success("Password has been reset successfully");
        navigate("/login");
      } else {
        toast.error(response.error || "Failed to reset password");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred while resetting the password",
        { autoClose: 2000 }
      );
    }

    setIsLoading(false);
  };

  const isFormValid = () => {
    return isLengthValid && isLetterValid && isNumberValid && newPassword === confirmPassword;
  };

  return (
    <>
      <SecondNavBar />
      <section className="md-min:py-11 w-full mt-28 mb-20">
        <div className="w-full h-full">
          <div className="mt-7 relative w-full h-full flex justify-center">
            {/* Background Image Section */}
            <div className="hidden lg-min:block relative w-[350px] h-[600px] overflow-hidden">
              <div className="absolute w-full h-full inset-0 bg-cover bg-gradient-to-b from-[#11F1F182] to-[#33FFA882] backdrop-brightness-100 rounded-[30px] rounded-r-none"></div>
              <img
                src={signupBg}
                alt="form background"
                className="rounded-[30px] max-w-max h-full rounded-r-none w-[800px]"
              />
            </div>

            {/* Form Container with consistent size */}
            <div className="px-4 py-10 h-[600px] md-min:px-28 z-40 shadow-blackShadow bg-white md-min:w-[670px] md-min:rounded-[30px] rounded-[8px] md-min:rounded-l-none">
              <h3 className="text-center text-3xl font-bold text-black text-fontSize2 pt-10">
                Reset <span className="text-[#33FFA8]">Password</span>
              </h3>
              <form className="flex flex-col gap-5 leading-10" onSubmit={handleResetPassword}>
                {/* New Password Input */}
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    value={newPassword}
                    placeholder="New Password"
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                    maxLength={8}
                    className="w-full outline-none text-grays border-b-2 border-grey mt-20 px-3"
                  />
                      <FontAwesomeIcon
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        icon={showNewPassword ? faEye : faEyeSlash}
                        className="absolute right-2 top-1/2 transform -translate-y-[-220%] cursor-pointer text-gray-300"
                      />
                </div>

                {/* Password Requirements */}
                <ul className="mt-4 pl-4 text-sm text-gray-700">
                  <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className={`${isLengthValid ? "text-[#33FFA8]" : "text-gray-400"}`}/>
                    <span className="ml-1">Must contain 8 characters</span>
                  </li>
                  <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className={`${isLetterValid ? "text-[#33FFA8]" : "text-gray-400"}`}/>
                    <span className="ml-1">Must contain a letter</span>
                  </li>
                  <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheck} className={`${isNumberValid ? "text-[#33FFA8]" : "text-gray-400"}`}/>
                    <span className="ml-1">Must contain a number</span>
                  </li>
                </ul>

                {/* Confirm Password Input */}
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    maxLength={8}
                    className="w-full outline-none text-grays border-b-2 border-grey mt-5 px-3"
                  />
                      <FontAwesomeIcon
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        icon={showConfirmPassword ? faEye : faEyeSlash}
                        className="absolute right-2 top-1/2 transform -translate-y-[-30%] mr-2 cursor-pointer text-gray-300"
                      />
                </div>

                {/* Reset Password Button */}
                <button
                  type="submit"
                  className={`block w-1/2 mx-auto font-bold justify-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg text-black my-30 mt-10 transition ease-in-out delay-150 ${
                    !isFormValid() ? "opacity-50 cursor-not-allowed" : "hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]"
                  }`}
                  disabled={!isFormValid()}
                >
                  { !isFormValid() ? (
                    <span className="flex items-center justify-center">
                      <FontAwesomeIcon icon={faBan} className="mr-2" />
                      Reset Password
                    </span>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AffiliateResetPassword;