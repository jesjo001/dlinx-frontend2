import React from "react";

// components

import Sidebar from "../components/Sidebar/Sidebar";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 h-[100vh] bg-blueGray-100">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full mt-7">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
