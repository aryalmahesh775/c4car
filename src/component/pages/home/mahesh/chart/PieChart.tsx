import { DoughnutChart, PieChart } from "../index";

const PieCharts = () => {
  return (
    <div className="admin-container">
      <section className="">
        <div>
          <DoughnutChart
            labels={["Accepted Orders", "Cancelled Orders"]}
            data={[40, 250]}
            backgroundColor={[`#E3E3E3 `, "#252525"]}
            offset={[0, 80]}
          />
        </div>
      </section>
    </div>
  );
};

export default PieCharts;
