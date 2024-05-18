import { DoughnutChart } from "../index";

const PieCharts = () => {
  return (
    <div className="">
      <section className="">
        <div className="relative h-[300px]">
          <DoughnutChart
            labels={["Accepted Orders", "Cancelled Orders"]}
            data={[40, 250]}
            backgroundColor={[`#E3E3E3 `, "#252525"]}
            offset={[0, 80]}
          />

          <div className="absolute top-[250px] left-[110px] ">
            <div className=" pl-7 font-semibold text-2xl">345</div>
            <div className="text-lg pl-6 font-medium block">orders</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PieCharts;
