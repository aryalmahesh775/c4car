import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

function Donutchart() {
  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <Chart
          type="donut"
          width={400}
          height={400}
          series={[10.1, 89.9]}
          options={{
            labels: ["Accepted Orders", "Cancelled Order"],
            title: {
              text: "Order Details",
              // align:"center",
            },
            colors: ["black", "red"],
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      showAlways: true,
                      color: "red",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default Donutchart;
