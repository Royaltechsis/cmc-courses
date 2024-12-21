import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import affiliateBg from "../../../assets/images/affiliatebg.png";
import ApiService from "../api/api_routes";
import SecondNavBar from "../../navbar/SecondNavbar";
import Footer from '../../footer/Footer';

function AffiliateSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryLoading, setCountryLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isLetterValid, setIsLetterValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCountries([
        { code: "NG", name: "Nigeria" },
        { code: "US", name: "United States" },
        { code: "GB", name: "United Kingdom" },
        { code: "CA", name: "Canada" },
      ]);
      setCountryLoading(false);
    }, 1000);
  }, []);

  const validatePassword = (password) => {
    setIsLengthValid(password.length >= 8);
    setIsLetterValid(/[a-zA-Z]/.test(password));
    setIsNumberValid(/\d/.test(password));
  };

  const isFormValid = () => {
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      country.trim() !== "" &&
      isLengthValid &&
      isLetterValid &&
      isNumberValid &&
      password === confirmPassword &&
      isTermsChecked
    );
  };

  const signupUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isFormValid()) {
      try {
        const response = await ApiService.registerAffiliateUser(name, email, password, confirmPassword);
        if (response.success) {
          toast.success("Registration successful", { autoClose: 2000 });
          navigate("/welcome");
        } else {
          toast.error(response.error, { autoClose: 2000 });
        }
      } catch (error) {
        toast.error("Please check your internet connection", { autoClose: 2000 });
      }
    } else {
      toast.error("Please complete all fields correctly", { autoClose: 2000 });
    }

    setIsLoading(false);
  };

  return (
    <>
      <SecondNavBar />
      <section className="md-min:py-11 w-full mt-28 mb-20">
        <div className="w-full h-full">
          <div className="heading text-center w-full flex justify-center">
            <p className="text-2xl font-bold max-w-3xl mx-auto lg-min:px-28">
              <span>
                Join Thousands of Affiliates on Our Platform
                and Start Earning Weekly!
              </span>
            </p>
          </div>
          <div className="pt-3 heading text-center w-full flex justify-center">
            <p className="text-base max-w-3xl mx-auto lg-min:px-20 my-5">
              <span className="hidden lg-min:inline">
                Partner with us and get paid for promoting our top digital courses. Enjoy weekly
                earnings, win exciting prizes, and strive for Top Affiliate status for even
                greater rewards. Join now and start earning!
              </span>
            </p>
          </div>
          <div className="mt-7 relative w-full h-full flex justify-center">
            <div className="hidden lg-min:block relative w-[350px] overflow-hidden">
              <div className="absolute w-full h-full inset-0 bg-cover bg-gradient-to-b from-[#11F1F182] to-[#33FFA882] backdrop-brightness-100 rounded-[30px] rounded-r-none"></div>
              <img src={affiliateBg} alt="form background" className="rounded-[30px] max-w-max h-full rounded-r-none w-[800px]" />
            </div>

            <div className="px-4 md-min:px-28 z-40 shadow-blackShadow bg-white md-min:w-[785px] md-min:rounded-[30px] rounded-[8px] md-min:rounded-l-none">
              <div className="flex flex-col justify-center flex-1 h-full">
                <h3 className="text-center font-bold text-black text-fontSize2 py-20">
                  Sign <span className="text-[#33FFA8]">Up</span>
                </h3>
                <form className="leading-10" onSubmit={signupUser}>
                  <div className="input flex flex-col space-y-4 pb-3">
                    <input
                      type="text"
                      name="name"
                      autoComplete="on"
                      value={name}
                      placeholder="Full Name"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full outline-none text-gray border-b-2 border-grey px-3"
                    />
                    <input
                      type="email"
                      name="email"
                      autoComplete="on"
                      value={email}
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full outline-none text-gray border-b-2 border-grey px-3"
                    />

                    {/* Country Selection */}
                    <label htmlFor="Country" className="text-gray-400">
                      Country
                    </label>
                    <select
                      name="Country"
                      id="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="text-gray-400 border-gray border-2 rounded-md pt-2 pb-2 pr-4 pl-4"
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      {countryLoading ? (
                        <option value="Loading...">Loading...</option>
                      ) : countries.length > 0 ? (
                        countries.map((country) => (
                          <option key={country.code} value={country.name}>
                            {country.name}
                          </option>
                        ))
                      ) : (
                        <option value="No Countries Available">No Countries Available</option>
                      )}
                    </select>

                    {/* Password and Confirm Password */}
                    <div className="relative mb-4">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="on"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                          validatePassword(e.target.value);
                        }}
                        maxLength={8}
                        className="w-full outline-none text-gray border-b-2 border-grey px-3"
                      />
                      <FontAwesomeIcon
                        onClick={() => setShowPassword(!showPassword)}
                        icon={showPassword ? faEye : faEyeSlash}
                        className="absolute right-0 top-5 transform -translate-y-1/2 mr-2 cursor-pointer text-gray-300"
                      />

                      {/* Password Requirements */}
                      <ul className="mt-4 pl-4 text-sm text-gray-700">
                        <li className="flex items-center">
                          <FontAwesomeIcon icon={faCheck} className={`${isLengthValid ? 'text-[#33FFA8]' : 'text-gray-400'}`}/>
                          <span className="ml-1">Must contain 8 characters</span>
                        </li>
                        <li className="flex items-center">
                          <FontAwesomeIcon icon={faCheck} className={`${isLetterValid ? 'text-[#33FFA8]' : 'text-gray-400'}`}/>
                          <span className="ml-1">Must contain a letter</span>
                        </li>
                        <li className="flex items-center">
                          <FontAwesomeIcon icon={faCheck} className={`${isNumberValid ? 'text-[#33FFA8]' : 'text-gray-400'}`}/>
                          <span className="ml-1">Must contain a number</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative mb-4">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        autoComplete="on"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        maxLength={8}
                        className="w-full outline-none text-gray border-b-2 border-grey px-3"
                      />
                      <FontAwesomeIcon
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        icon={showConfirmPassword ? faEye : faEyeSlash}
                        className="absolute right-0 top-5 transform -translate-y-1/2 mr-2 cursor-pointer text-gray-300"
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="terms" 
                        id="terms" 
                        checked={isTermsChecked} 
                        onChange={(e) => setIsTermsChecked(e.target.checked)} 
                      />
                      <label htmlFor="terms" className="ml-2">
                        I agree with the{" "}
                        <span className={`underline cursor-pointer ${isTermsChecked ? 'text-[#33FFA8]' : 'text-gray-400'}`}>
                          privacy policies
                        </span>{" "}
                        and{" "}
                        <span className={`underline cursor-pointer ${isTermsChecked ? 'text-[#33FFA8]' : 'text-gray-400'}`}>
                          terms and conditions
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`block w-1/2 mx-auto justify-center justify-items-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg text-black my-2 transition ease-in-out delay-150 
                      ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]'}`}
                    disabled={!isFormValid()}
                  >
                    { !isFormValid() ? (
                      <span className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faBan} className="mr-2" />
                        Sign Up
                      </span>
                    ) : (
                      'Sign Up'
                    )}
                  </button>
                  <div className="pt-5 pb-20">
                    <span>Already have an account?</span>
                    <Link to="/affiliate-login" className="text-[#33FFA8] hover:text-[#18ff78] pl-2 transition-all hover:font-[600] hover:delay-300">
                      Log In
                    </Link>
                  </div>
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

export default AffiliateSignUp;