import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";
import useInterval from "../../services/contexts/useInterval";

export default function CardAchat(props) {
  const {
    money,
    setMoney,
    earth,
    setEarth,
    annualProfit,
    setAnnualProfit,
    eau,
    setEau,
    sol,
    setSol,
    energie,
    setEnergie,
    investissement,
    setInvestissement,
    quantity,
    setQuantity,
  } = useContext(statsContext);

  const [selected, isSelected] = useState(false);

  //========  €  =======//
  const deIncrementMoney = () => {
    setMoney(money - props.cout_achat);
  };
  //Incremente les profits par an//
  const incrementAnnualProfit = () => {
    setAnnualProfit(annualProfit + props.profit);
  };
  const incrementEarth = () => {
    setEarth(earth + props.impact_ecologique);
  };
  //Incremente l'Eau//
  const incrementEau = () => {
    setEau(eau + props.consommation_eau);
  };
  //Incremente energie//
  const incrementEnergie = () => {
    const nrj = energie;
    setEnergie(nrj + props.consommation_energetique);
  };
  //Incremente sol//
  const incrementSol = () => {
    setSol(sol + props.utilisation_sol);
  };

  const incrementInvest = () => {
    setInvestissement([...investissement, props.id]);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <SCard>
      <div className="center">
        <button
          className="plus"
          onClick={() => {
            deIncrementMoney();
            incrementAnnualProfit();
            incrementEarth();
            incrementEau();
            incrementEnergie();
            incrementSol();
            incrementInvest();
            isSelected(true);
            incrementQuantity();
          }}
        >
          Acheter pour <br />
          {props.cout_achat} €
        </button>
      </div>
    </SCard>
  );
}
