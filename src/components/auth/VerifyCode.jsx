import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import signupBg from "../../assets/images/signup.png";
import ApiService from "./api/api_routes";
import '../../index.css';

function VerifyCode() {
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const [codeSentTime, setCodeSentTime] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  useEffect(() => {
    const firstInput = document.querySelector('input[type="text"]');
    if (firstInput) firstInput.focus();

    if (codeSentTime) {
      const countdown = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - codeSentTime) / 1000);
        const remainingTime = Math.max(0, timer - elapsedTime);

        if (remainingTime <= 0) {
          clearInterval(countdown);
          setTimer(0);
        } else {
          setTimer(remainingTime);
        }
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [codeSentTime, timer]);

  const maskEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const maskedLocal = localPart.slice(0, 1) + '*****' + localPart.slice(-1);
    return `${maskedLocal}@${domain}`;
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const code = verificationCode.join("");
    if (code.length === 6) {
      try {
        const response = await ApiService.verifyResetCode(email, code);

        if (response.success) {
          toast.success("Code verified successfully.");
          navigate("/reset-password", { state: { email } });
        } else {
          toast.error(response.error || "Verification failed.");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while verifying the code.");
      }
    } else {
      toast.error("Please enter the complete verification code.");
    }

    setIsLoading(false);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newCode = [...verificationCode];

    if (/^[0-9]$/.test(value) || value === "") {
      newCode[index] = value;
      setVerificationCode(newCode);

      // Move focus to the next input if the current one is filled
      if (value && index < 5) {
        setFocusedIndex(index + 1);
        document.querySelector(`input[type="text"]:nth-child(${index + 2})`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace key
    if (e.key === 'Backspace') {
      const newCode = [...verificationCode];
      newCode[index] = ""; // Clear the current input
      setVerificationCode(newCode);
      setFocusedIndex(index > 0 ? index - 1 : 0); // Move focus to the previous input if exists
      if (index > 0) {
        document.querySelector(`input[type="text"]:nth-child(${index})`).focus(); // Focus on the previous input
      }
    }
  };

  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleResendCode = async () => {
    let newTimer = 60;

    if (attempts === 2) {
      newTimer += 60;
    } else if (attempts >= 3) {
      newTimer = 600;
    }

    setAttempts((prev) => prev + 1);
    setCodeSentTime(Date.now());
    setTimer(newTimer);

    try {
      await ApiService.resendCode(email);
      toast.success("Verification code resent.");
    } catch (error) {
      toast.error("Failed to resend verification code.");
    }
  };

  return (
    <>
      <section className="md-min:py-11 w-full mt-10 mb-20">
      <div className="w-full h-full">
          <div className="mt-7 relative w-full h-full flex justify-center">
            {/* Background Image Section */}
            <div className="hidden lg-min:block relative w-[350px] h-[600px] overflow-hidden">
              <div className="absolute w-full h-full inset-0 bg-cover bg-gradient-to-b from-[#11F1F182] to-[#33FFA882] backdrop-brightness-100 rounded-[30px] rounded-r-none"></div>
              <img src={signupBg} alt="form background" className="rounded-[30px] max-w-max h-full rounded-r-none w-[800px]" />
            </div>

            {/* Content Section */}
            <div className="px-4 py-10 h-[600px] md-min:px-28 z-40 shadow-blackShadow bg-white md-min:w-[670px] md-min:rounded-[30px] rounded-[8px] md-min:rounded-l-none">
              <h3 className="text-center text-3xl font-bold text-black text-fontSize2 pt-10">
                Verification <span className="text-[#33FFA8]">Code</span>
              </h3>
              <p className="text-center font-bold text-black text-sm py-2 pb-20">
                We’ve sent a verification code to your email
                <br />address, please check
              </p>
              <p className="text-center text-gray-400 pb-10">Code has been sent to {maskEmail(email)}</p>
              <form className="flex flex-col gap-5 leading-10" onSubmit={handleVerifyCode}>
                <div className="flex gap-2 justify-center">
                  {verificationCode.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      value={value}
                      maxLength={1}
                      style={{
                        border: `2px solid ${value !== "" ? '#33FFA8' : (focusedIndex === index ? '#33FFA8' : '#D1D5DB')}`, // Change border color based on value
                      }}
                      className="w-10 h-10 text-center rounded-md transition duration-300" // Added transition for smooth color change
                      onChange={(e) => handleChange(e, index)}
                      onFocus={() => setFocusedIndex(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)} // Updated to handle key down
                      onBlur={() => { if (value === "") setFocusedIndex(null); }} // Remove focus when input is empty
                    />
                  ))}
                </div>
                <p className="text-center font-bold text-black text-sm pt-10">
                  Resend code in <span style={{ color: '#33FFA8' }}>{Math.floor(timer / 60)}m {timer % 60}s</span>
                </p>
                <button
                  type="submit"
                  className="block w-1/2 mx-auto font-bold justify-center justify-items-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg text-black my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]"
                >
                  Submit and Continue
                </button>
                {timer === 0 && (
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-[#33FFA8] mt-2"
                  >
                    Resend Code
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VerifyCode;