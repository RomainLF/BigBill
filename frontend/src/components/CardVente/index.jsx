import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function CardVente(props) {
  const {
    money,
    setMoney,
    annualProfit,
    setAnnualProfit,
    investissement,
    setInvestissement,
  } = useContext(statsContext);

  //========  €  =======//
  const deIncrementMoney = () => {
    setMoney(money - props.cout_achat);
  };
  //Incremente les profits par an//
  const deIncrementAnnualProfit = () => {
    setAnnualProfit(annualProfit - props.profit);
  };

  const deIncrementInvest = () => {
    // setInvestissement(investissement);
    setInvestissement([...investissement, props.id]);
  };

  return (
    <SCard>
      <div className="center">
        <button
          className="moins"
          onClick={() => {
            deIncrementMoney();
            deIncrementAnnualProfit();
            deIncrementInvest();
          }}
        >
          Vendre pour <br />
          {props.cout_achat} €
        </button>
      </div>
    </SCard>
  );
}
