import React from "react";

// components
import HeaderStats from "../../components/Headers/HeaderStats.js";

import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardPageVisits from "../../components/Cards/CardPageVisits.js";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";


// layout for page

import Admin from "../../layouts/Admin.js";

export default function Dashboard() {
  return (
    <>
      <AdminNavbar />
      <div className="flex flex-col gap-4">
        <HeaderStats />
        <div className="flex flex-wrap mt-10">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
