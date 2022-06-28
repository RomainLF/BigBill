import SButtonPromotion from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function ButtonFired(props) {
  const { money, setMoney, annualProfit, setAnnualProfit } =
    useContext(statsContext);

  //Incremente les profits par an//
  const deIncrementAnnualProfit = () => {
    setAnnualProfit(annualProfit - props.profit);
  };

  return (
    <SButtonPromotion>
      <div className="center">
        <button
          className="moins"
          onClick={() => {
            deIncrementMoney();
            deIncrementAnnualProfit();
            deIncrementInvest();
          }}
        >
          Promouvoir
        </button>
      </div>
    </SButtonPromotion>
  );
}
