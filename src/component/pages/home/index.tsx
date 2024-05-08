import React from "react";
import BarCharts from "./graph/chart/BarChart";
import PieCharts from "./graph/chart/PieChart";
import { statIcon } from "../../../assets";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mx-5">
          <div className="min-w-[500px] shadow-xl rounded-xl">
            <div className="flex justify-between pt-2 px-2">
              <div className="flex items-center gap-3 text-2xl font-medium">
                {" "}
                <img src={statIcon} alt="" /> Appointment Statistics
              </div>
              <div className="flex flex-col gap-3">
                <div className="border-borderColor rounded-lg px-3 py-2 border-[1px]">
                  This Week
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <div className="flex gap-5 text-textSecondary">
                <div className="border-[2px] rounded-md border-borderColor px-3 py-1">
                  Total Appointment
                  <p className="flex justify-center font-semibold text-textPrimaryDark">
                    50
                  </p>
                </div>
                <div className="border-[2px] rounded-md border-borderColor px-3 py-1">
                  Cancelled Appointment
                  <p className="flex justify-center font-semibold text-textPrimaryDark">
                    05
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <div className="flex gap-2 items-center">
                  <div className="h-[10px] w-[10px] bg-textPrimaryDark"></div>{" "}
                  appointments
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <div className="h-[10px] w-[10px] bg-textSecondary"></div>
                  Cancelled
                </div>
              </div>
            </div>
            <div className="h-auto">
              <BarCharts />
            </div>
          </div>
          <div className="h-[400px] shadow-xl rounded-xl pt-2 px-2 ">
            <div className="flex justify-between">
              <div className="flex items-center gap-3 text-2xl font-medium">
                {" "}
                <img src={statIcon} alt="" /> Appointment Statistics
              </div>
              <div className="flex flex-col gap-3">
                <div className="border-borderColor rounded-lg px-3 py-2 border-[1px]">
                  This Week
                </div>
              </div>
            </div>
            <div className="mt-[-100px] flex justify-center">
              <PieCharts />
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <p className="">Services</p>
            <p className="">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
