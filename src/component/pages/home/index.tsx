import React from "react";
import ChartBarGraph from "./chart";
import MyResponsivePie from "./pieChart";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-2 gap-5 mx-5">
          <div className="min-w-[500px] shadow-xl rounded-xl">
            <ChartBarGraph />
          </div>
          <div className="min-w-[500px] shadow-xl rounded-xl">
            <MyResponsivePie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
