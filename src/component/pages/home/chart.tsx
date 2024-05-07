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
      <ResponsiveBar
        data={data}
        keys={["degrees", "kelvin"]}
        indexBy="day"
        margin={{
          top: 20,
          right: 0,
          bottom: 4,
          left: 100,
        }}
        padding={0.7}
        groupMode="grouped"
        colors={["#252525", "#C8C8C8"]}
        axisTop={null}
        innerPadding={5}
        axisRight={null}
        animate={true}
        enableGridX
        enableGridY
        enableLabel={false}
        borderRadius={5}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
        }}
      />
    </div>
  );
};

export default Chart;
