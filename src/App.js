import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Importing components
import Layout from "./pages/Layout/Layout";
import AffiliateSales from "./components/dashboard/AffiliateSales";
import AffiliateWithdrawals from "./components/dashboard/AffiliateWithdrawals";
import WithdrawalDetails from "./components/dashboard/WithdrawalDetails";
import Dashboard from "./components/dashboard/DashBoard";
import Footer from "./components/footer/Footer";
import Welcome from "./components/auth/Welcome";
import VoiceflowChat from './components/ChatBot/VoiceflowChat'; // Importing the VoiceflowChat component

// Importing Profile Component
import AffiliateProfile from "./components/dashboard/affiliateProfile"; // <-- New Import

import {
  About,
  AffiliateLogin,
  AffiliateSignUp,
  ForgetPassword,
  Home,
  Login,
  SignUp,
  VerifyCode,
  ResetPassword,
  TermsAndConditions,
  PrivacyPolicy,
} from "./components/main"; // Make sure the import path is correct
import Navbar from "./components/navbar/Navbar";
import Affiliate from "./pages/Affiliate/Affiliate";
import Pricing from "./pages/pricing/Pricing";
import Courses from "./pages/courses/Courses";
import Faq from "./pages/faqs/Faq";
import AffiliateFaq from "./pages/faqs/AffiliateFaq";
import AffiliateResetPassword from "./components/auth/AffiliateResetPassword";
import AffiliateForgetPassword from "./components/auth/AffiliateForgetPassword";
import AffiliateVerifyCode from "./components/auth/AffiliateVerifyCode";

function App() {
  return (
    <div className="w-full h-auto flex flex-col gradient-background">
      <BrowserRouter>
        <ToastContainer />

        {/* Render VoiceflowChat only if we're NOT in a dashboard-related route */}
        <VoiceflowChatWrapper />
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/get-started" element={<SignUp />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>

          <Route path="/affiliate-verify-code" element={<AffiliateVerifyCode />} />
          <Route path="/affiliate-reset-password" element={<AffiliateResetPassword />} />
          <Route path="/affiliate-forgot-password" element={<AffiliateForgetPassword />} />
          <Route path="/affiliate-login" element={<AffiliateLogin />} />
          <Route path="/affiliate-signup" element={<AffiliateSignUp />} />
          <Route path="/affiliate-faq" element={<AffiliateFaq />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Nested routes for Dashboard */}
          <Route path="sales/*" element={<AffiliateSalesLayout />} />
          <Route path="withdrawals/*" element={<AffiliateWithdrawalsLayout />} />
          <Route path="/affiliate-profile" element={<AffiliateProfile />} />
          <Route path="/withdrawal-details" element={<WithdrawalDetails />} />
        </Routes>

        {/* Separate Dashboard Route */}
        <Routes>
          <Route path="dashboard/*" element={<DashboardLayout />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

// Function to conditionally render VoiceflowChat component
const VoiceflowChatWrapper = () => {
  const location = useLocation();

  // Exclude dashboard, sales, withdrawals, affiliate-profile, and other dashboard-related routes
  if (
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/sales") ||
    location.pathname.startsWith("/withdrawals") ||
    location.pathname.startsWith("/affiliate-profile")
  ) {
    return null;  // Do not render the Voiceflow chatbot on these routes
  }

  return <VoiceflowChat />;  // Render the chatbot on other routes
};

// Nested layout for Dashboard component without Navbar and Footer
function DashboardLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

function AffiliateSalesLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AffiliateSales />} />
      </Routes>
    </>
  );
}

function AffiliateWithdrawalsLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AffiliateWithdrawals />} />
      </Routes>
    </>
  );
}

export default App;
