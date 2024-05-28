import { DoughnutChart } from "../index";

const PieCharts = () => {
  return (
    <div className=" w-full h-full">
      <div className="relative w-full flex items-center" style={{}}>
        <DoughnutChart
          labels={["Cancelled Orders", " Accepted Orders"]}
          data={[40, 250]}
          backgroundColor={[`#E3E3E3 `, "#252525"]}
          offset={[0, 80]}
        />
        <div className="flex flex-col gap-3 mt-4 ml-3 2xl:ml-10">
          <div className="flex gap-3 items-center text-base">
            <div className="h-[15px] w-[15px] bg-textPrimaryDark"></div>{" "}
            Accepted Order
          </div>
          <div className="flex gap-3 text-lg items-center mt-5">
            {" "}
            <div className="h-[15px] w-[15px] text-nowrap text-base bg-textSecondary"></div>
            Cancelled Orders
          </div>
        </div>

        <div className="absolute top-[120px] left-[110px] ">
          <div className=" pl-7 font-semibold text-2xl">345</div>
          <div className="text-lg pl-6 font-medium block">orders</div>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
