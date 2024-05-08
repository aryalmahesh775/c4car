import { BarChart } from "../index";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const BarCharts = () => {
  return (
    <div className="">
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[20, 44, 34, 55, 77, 45, 99]}
            data_2={[30, 14, 43, 65, 23, 75, 19]}
            title_1="Accepted Orders"
            title_2="Cancelled Orders"
            bgColor_1={`#252525`}
            bgColor_2={`#E3E3E3`}
            labels={days}
          />
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
