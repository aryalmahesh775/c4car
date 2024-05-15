import BarCharts from "./graph/chart/BarChart";
import PieCharts from "./graph/chart/PieChart";
import { statIcon } from "../../../assets";
import HomeTable from "./table/homeTable";

const HomePage = () => {
  return (
    <div>
      <div className="overflow-y-auto h-[calc(100vh-120px)]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mx-5">
          <div className="min-w-[500px] shadow-xl rounded-xl flex flex-col">
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
            <div className="h-auto bg-red-100 justify-end">
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

        <div className="mx-5 mt-5">
          <div className="flex gap-4">
            <p className="px-3 py-1 bg-redBackground text-white border-borderColor border-[1px] min-w-[100px] flex justify-center items-center rounded-md">
              Services
            </p>
            <p className="px-3 py-1 bg-white text-primaryDark border-borderColor border-[1px] min-w-[100px] flex justify-center items-center rounded-md">
              orders
            </p>
          </div>
          <div className="w-full py-3">
            <HomeTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
