import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCheck} from '@fortawesome/free-solid-svg-icons';
import googleLogo from "../../assets/images/google.png";
import signupBg from "../../assets/images/signup.png";
import ApiService from "./api/api_routes";
import { AuthContext } from "./AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { setIsLoggedIn, setUserName } = useContext(AuthContext);

  const signinUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (email.trim() !== "" && password.trim() !== "") {
      try {
        const response = await ApiService.login(email, password);

        if (response.success) {
          const accessToken = response.data.access;
          localStorage.setItem("token", accessToken);

          const userDetailsResponse = await ApiService.getUserDetails(accessToken);

          if (userDetailsResponse.success) {
            localStorage.setItem("userDetails", JSON.stringify(userDetailsResponse.data));
            setIsLoggedIn(true);
            setUserName(userDetailsResponse.data.name.split(" ")[0]);

            toast.success("Login Successful", { autoClose: 2000 });
            navigate("/courses");
          } else {
            toast.error(userDetailsResponse.error, { autoClose: 2000 });
          }
        } else {
          toast.error(response.error, { autoClose: 2000 });
        }
      } catch (error) {
        toast.error("Please check your internet connection", { autoClose: 2000 });
      }
    } else {
      toast.error("Email and password are required", { autoClose: 2000 });
    }

    setIsLoading(false);
  };

  return (
    <>
      <section className="md-min:py-11 w-full mt-10 mb-20">
        <div className="w-full h-full">
          <div className="heading text-center w-full flex justify-center">
            <p className="text-2xl font-bold">Welcome Back to ExpertSkillz!</p>
          </div>
          <div className="pt-3 heading text-center w-full flex justify-center">
            <p className="text-base px-10 lg-min:px-32 my-5 max-w-3xl mx-auto lg-min:px-16">
              <span className="hidden lg-min:inline">
                Log in to continue your learning journey and unlock new opportunities. Access your courses, track your
                progress, and stay ahead in your chosen field. Let’s continue to grow and excel together!
              </span>
            </p>
          </div>
          <div className="mt-7 relative w-full h-full flex justify-center">
            {/* Background Image Section */}
            <div className="hidden lg-min:block relative w-[350px] h-[600px] overflow-hidden">
              <div className="absolute w-full h-full inset-0 bg-cover bg-gradient-to-b from-[#11F1F182] to-[#33FFA882] backdrop-brightness-100 rounded-[30px] rounded-r-none"></div>
              <img src={signupBg} alt="form background" className="rounded-[30px] max-w-max h-full rounded-r-none w-[800px]" />
            </div>

           {/* Form Container with consistent size */}
           <div className="px-4 py-10 h-[600px] md-min:px-28 z-40 shadow-blackShadow bg-white md-min:w-[670px] md-min:rounded-[30px] rounded-[8px] md-min:rounded-l-none">
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-center font-bold text-black text-fontSize2 mt-4">
                  Log <span className="text-[#33FFA8]">In</span>
                </h3>
                <form className="leading-10" onSubmit={signinUser}>
                  <div className="flex justify-center items-center pt-10 pb-6">
                    <button className="flex justify-center items-center md-min:w-[205px] gap-2 bg-white py-3 border-[#33FFA8] border-inset border-2 rounded-md text-black shadow-lg">
                      <div className="w-5 h-5">
                        <img src={googleLogo} alt="Google Logo" className="w-full" />
                      </div>
                      <p className="text-sm"> Sign in with Google</p>
                    </button>
                  </div>
                  <p className="text-center text-grey">- OR -</p>
                  <div className="input flex flex-col space-y-4 pb-3">
                    <input
                      type="email"
                      name="email"
                      autoComplete="on"
                      value={email}
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full outline-none text-gray border-b-2 border-grey px-3"
                    />
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="on"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={8}
                        className="w-full outline-none text-gray border-b-2 border-grey px-3"
                      />
                      <FontAwesomeIcon
                        onClick={() => setShowPassword(!showPassword)}
                        icon={showPassword ? faEye : faEyeSlash}
                        className="absolute right-0 top-5 transform -translate-y-1/2 mr-2 cursor-pointer text-gray-300"
                      />
                    </div>
                  </div>
                  <div className="flex w-full gap-2">
                    <Link to="/forgot-password" className="text-[#33FFA8]">
                      Forgot Password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="block w-1/2 mx-auto justify-center justify-items-center bg-gradient-to-r from-[#11F1F1] to-[#33FFA8] border border-black rounded-lg text-black my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-[#007dfe] duration-[0.3s]"
                  >
                    Log In
                  </button>
                  <div className="py-5">
                    <span>Don't have an account?</span>
                    <Link to="/get-started" className="text-[#33FFA8] hover:text-[#18ff78] pl-2 transition-all hover:font-[600] hover:delay-300">
                      Sign Up
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
