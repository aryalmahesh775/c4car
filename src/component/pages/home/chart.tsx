import React, { Component, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";

const Chart = () => {
  const data = [
    {
      day: "Monday",
      degrees: 59,
      kelvin: 100,
    },
    {
      day: "Tuesday",
      degrees: 61,
      kelvin: 103,
    },
    {
      day: "Wednesday",
      degrees: 55,
      kelvin: 100,
    },
    {
      day: "Thursday",
      degrees: 78,
      kelvin: 100,
    },
    {
      day: "Friday",
      degrees: 71,
      kelvin: 100,
    },
    {
      day: "Saturday",
      degrees: 56,
      kelvin: 100,
    },
    {
      day: "Sunday",
      degrees: 67,
      kelvin: 100,
    },
  ];

  return (
    <div className="chart-wr">
      <div className="" style={{ height: 200 }}>
        <ResponsiveBar
          data={data}
          keys={["degrees", "kelvin"]}
          indexBy="day"
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          padding={0.7}
          colors={["#252525", "#ccc"]}
          groupMode="grouped"
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "day",
            legendPosition: "middle",
            legendOffset: 40,
          }}
          borderRadius={5}
          innerPadding={5}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: [""], // if want to level the y axis
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          enableGridY={false} // show row in y axis
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          animate={true}
        />
      </div>
    </div>
  );
};

export default Chart;
