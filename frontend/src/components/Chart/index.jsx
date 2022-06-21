import SChart from "./style";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useContext, useEffect, useState } from "react";
import StatsContext from "@services/contexts";
import useInterval from "./../../services/contexts/useInterval";

export default function Charte() {
  const { chartDataYears, chartDataProfit } = useContext(StatsContext);

  const data = {
    labels: chartDataYears.map((data) => data),
    datasets: [
      {
        label: "Benefice par an",
        data: chartDataProfit,
        backgroundColor: "#ec947a",
      },
    ],
  };

  return (
    <SChart>
      <div className="mainGraph">
        <Bar data={data} />
      </div>
    </SChart>
  );
}
