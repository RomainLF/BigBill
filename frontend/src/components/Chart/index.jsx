import SChart from "./style";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useContext, useEffect, useState } from "react";
import StatsContext from "@services/contexts";
import useInterval from "./../../services/contexts/useInterval";

export default function Charte() {
  const { chartDataYears, chartDataProfit } = useContext(StatsContext);
  //const { annualProfit, timer, timerActive } = useContext(StatsContext);

  //const [chartDataYears, setChartDataYears] = useState(["2022"]);
  //const [chartDataProfit, setChartDataProfit] = useState(["0"]);
  // Passer dans le context
  /*useInterval(() => {
    if (timerActive) setChartDataYears([...chartDataYears, timer]).toString();
    setChartDataProfit(chartDataProfit.splice(0, 1, annualProfit)).toString();
    console.log(chartDataProfit);
  }, 5000); */

  const data = {
    labels: chartDataYears.map((data) => data),
    datasets: [
      {
        label: "Benefice par an",
        data: chartDataProfit,
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
