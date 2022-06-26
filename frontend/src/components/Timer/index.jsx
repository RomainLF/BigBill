import STimer from "./style";

import StatsContext from "../../services/contexts/index";
import { useContext } from "react";

export default function Timer() {
  const { timer, timerActive, annualProfit } = useContext(StatsContext);
  return (
    <STimer>
      <div className="timer">
        <p>
          {" "}
          Année : <span>{timer}</span>
        </p>
        <p>
          Bénéfices par an:<span>{annualProfit}€</span>
        </p>
      </div>
    </STimer>
  );
}
