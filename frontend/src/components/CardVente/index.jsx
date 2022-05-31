import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import useInterval from "./../../services/contexts/useInterval";

export default function CardVente(props) {
  const {
    money,
    setMoney,
    annualProfit,
    setAnnualProfit,
    investissement,
    setInvestissement,
    setEarth,
    earth,
    setEau,
    eau,
    setEnergie,
    energie,
    setSol,
    sol,
    timerActive,
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

  //========  actualisation chaque année des stats  ========//
  useInterval(() => {
    //rajouter (timerActive 11)
    if (timerActive) setEarth(earth + props.impact_ecologique);
  }, 5000);
  useInterval(() => {
    if (timerActive) setEau(eau + props.consommation_eau);
  }, 5000);
  useInterval(() => {
    if (timerActive) setEnergie(energie + props.consommation_energetique);
  }, 5000);
  useInterval(() => {
    if (timerActive) setSol(sol + props.utilisation_sol);
  }, 5000);

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
