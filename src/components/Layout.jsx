import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const location = useLocation();
  const noNavbarRoutes = ["/", "/login", "/register"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <div className="container mx-auto mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
