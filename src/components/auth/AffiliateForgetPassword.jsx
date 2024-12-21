import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondNavBar from '../../components/navbar/SecondNavbar'
import { toast } from "react-toastify";
import aflliateBg from "../../assets/images/affiliatebg.png";
import ApiService from "./api/api_routes";
import Footer from '../../components/footer/Footer'

function AffiliateForgetPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const forgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.dismiss();

    if (email.trim() !== "") {
      try {
        const response = await ApiService.requestPasswordReset(email);

        if (response.success) {
          toast.success(response.data.message || "Password reset link sent", {
            autoClose: 2000,
          });
          navigate("/affiliate-forgotten", { state: { email } });
        } else {
          toast.error(response.error || "Something went wrong", {
            autoClose: 2000,
          });
        }
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Network error. Please check your internet connection.",
          { autoClose: 2000 }
        );
      }
    } else {
      toast.error("Email cannot be empty", { autoClose: 2000 });
    }

    setIsLoading(false);
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
                src={aflliateBg}
                alt="form background"
                className="rounded-[30px] max-w-max h-full rounded-r-none w-[800px]"
              />
            </div>

            {/* Form Container with consistent size */}
            <div className="px-4 py-10 h-[600px] md-min:px-28 z-40 shadow-blackShadow bg-white md-min:w-[670px] md-min:rounded-[30px] rounded-[8px] md-min:rounded-l-none">
              <div className="flex flex-col text-center justify-center h-full">
                <h3 className="text-center text-3xl font-bold text-black text-fontSize2 py-4">
                  Forgot <span className="text-[#33FFA8]">Password?</span>
                </h3>
                <form
                  className="flex flex-col gap-y-32 leading-10 justify-center pt-10"
                  onSubmit={forgotPassword}
                >
                  <input
                    type="email"
                    name="email"
                    autoComplete="on"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[80%] mx-auto outline-none text-grays border-b-2 border-grey mt-10 px-3"
                  />
                  <button
                    type="submit"
                    className="w-1/2 mx-auto px-20 mb-10 text-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg font-semibold text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AffiliateForgetPassword;