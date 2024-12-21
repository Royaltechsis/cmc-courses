import React from "react";
import { Navbar } from "../../components/main";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="w-full h-auto flex flex-col gradient-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
