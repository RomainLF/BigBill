import SCardjobs from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function Card(props) {
  const { money, setMoney, timerActive, annualProfit, setAnnualProfit } =
    useContext(statsContext);

  return (
    <SCardjobs>
      <div>coucou</div>
    </SCardjobs>
  );
}
