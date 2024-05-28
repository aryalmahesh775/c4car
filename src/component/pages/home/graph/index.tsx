import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import Don from "./pie";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bgColor_1: string;
  bgColor_2: string;
  labels?: string[];
}

export const BarChart = ({
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  horizontal = false,
  labels = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bgColor_1,
        barThickness: "flex",
        borderRadius: 20,
        barPercentage: 0.7, // Adjusted to create space between bars
        categoryPercentage: 0.5, // adjust space between bar
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bgColor_2,
        barThickness: "flex",
        borderRadius: 20,
        barPercentage: 0.7, // Adjusted to create space between bars
        categoryPercentage: 0.5, // adjust space between bar
      },
    ],
  };

  return (
    <div className="h-[200px] w-full">
      <Bar
        options={{
          maintainAspectRatio: false,

          borderColor: "white",
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },

          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        }}
        data={data}
      />
    </div>
  );
};

interface DoughnutChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
  segmentSpacing?: number;
}

export const DoughnutChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: DoughnutChartProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    plugins: {
      legend: {
        display: false,
        // display: legends,
        position: "right",
        labels: {
          padding: 40,
        },
      },
    },
  };

  return (
    // <div className="h-[300px] w-[300px]">
    <div className=" pl-3 h-[290px] w-[290px]">
      <Doughnut data={doughnutData} options={doughnutOptions} />
    </div>
  );
};
