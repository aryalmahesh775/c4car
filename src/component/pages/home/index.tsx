import BarCharts from "./graph/chart/BarChart";
import PieCharts from "./graph/chart/PieChart";
import { calenderIcon, statIcon } from "../../../assets";
import HomeTable from "./table/homeTable";
import { useState } from "react";
import AcceptButton from "../../staticButtons/acceptButton";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div>
      <div className="overflow-y-auto h-[calc(100vh-120px)]">
        <div className="grid grid-cols-1 xl:grid-cols-2 mt-4 gap-10 mx-5 bg-white">
          <div className="min-w-[500px] shadow-xl rounded-xl  flex flex-col">
            <div className="flex justify-between pt-2 px-2">
              <div className="flex items-center gap-3 text-2xl font-medium">
                {" "}
                <img src={statIcon} alt="" /> Appointment Statistics
              </div>
              <div className="flex flex-col gap-3 relative">
                <select
                  className="border-borderColor cursor-pointer rounded-lg pl-8 border-[2px] focus:outline-none py-2 px-3"
                  name="cars"
                  id="cars"
                >
                  <option value="week">This Week</option>
                  <option value="month">month</option>
                  <option value="year">year</option>
                </select>
                <div className="pointer-events-none absolute left-0 top-[7px] flex items-center px-2 text-gray-700">
                  <img className="h-[20px]" src={calenderIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-2 my-3">
              <div className="flex gap-5 text-textSecondary">
                <div className="border-[2px] rounded-md border-lightBorderColor text-lg px-3 py-1">
                  Total Appointment
                  <p className="flex justify-center font-semibold text-textPrimaryDark">
                    50
                  </p>
                </div>
                <div className="border-[2px] rounded-md border-lightBorderColor text-lg px-3 py-1">
                  Cancelled Appointment
                  <p className="flex justify-center font-semibold text-textPrimaryDark">
                    05
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-4 mr-3">
                <div className="flex gap-2 items-center">
                  <div className="h-[10px] w-[10px] bg-textPrimaryDark"></div>{" "}
                  Appointments
                </div>
                <div className="flex gap-2 items-center">
                  {" "}
                  <div className="h-[10px] w-[10px] bg-textSecondary"></div>
                  Cancelled
                </div>
              </div>
            </div>
            <div className="h-full justify-end">
              <BarCharts />
            </div>
          </div>
          <div className="h-[400px] shadow-xl rounded-xl pt-2 px-2 ">
            <div className="flex justify-between">
              <div className="flex items-center gap-3 text-2xl font-medium">
                {" "}
                <img src={statIcon} alt="" /> Appointment Statistics
              </div>
              <div className="flex flex-col gap-3 relative">
                <select
                  className="border-borderColor cursor-pointer rounded-lg pl-8 border-[2px] focus:outline-none py-2 px-3"
                  name="cars"
                  id="cars"
                >
                  <option value="week">This Week</option>
                  <option value="month">month</option>
                  <option value="year">year</option>
                </select>
                <div className="pointer-events-none absolute left-0 top-[7px] flex items-center px-2 text-gray-700">
                  <img className="h-[20px]" src={calenderIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-[-100px] flex justify-center">
              <PieCharts />
            </div>
          </div>
        </div>

        <div className="mx-5 mt-5">
          <div className="flex gap-4">
            <p
              onClick={() => setActiveTab(1)}
              className={`px-3 py-1 ${
                activeTab === 1 ? "bg-redBackground text-white" : "bg-white"
              }  border-borderColor border-[1px] min-w-[100px] flex justify-center items-center rounded-md cursor-pointer`}
            >
              Services
            </p>
            <p
              className={`px-3 py-1 ${
                activeTab === 2 ? "bg-redBackground text-white" : "bg-white"
              } text-primaryDark border-borderColor border-[1px] min-w-[100px] flex justify-center items-center rounded-md cursor-pointer`}
              onClick={() => setActiveTab(2)}
            >
              orders
            </p>
          </div>
          <div className="w-full py-3">
            {activeTab === 1 ? (
              <>
                <HomeTable />
              </>
            ) : (
              <HomeTable />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
