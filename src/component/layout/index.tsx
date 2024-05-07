import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <div>
      <div className="bg-primary flex absolute top-0 bottom-0 left-0 right-0">
        <Sidebar />
        <div className="my-4 bg-white rounded-md mr-3 lg:mr-5 w-full overflow-y-scroll md:overflow-y-hidden md:overflow-x-hidden ">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
