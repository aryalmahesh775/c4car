// import AdminSidebar from "../../components/AdminSidebar";
// import { BarChart } from "../../components/Charts";
import { BarChart } from "../index";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const BarCharts = () => {
  return (
    <div className="">
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            title_1="Accepted Orders"
            title_2="Cancelled Orders"
            bgColor_1={`#252525`}
            bgColor_2={`#E3E3E3`}
            labels={[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ]}
          />
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
