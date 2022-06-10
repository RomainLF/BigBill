import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";

export default function CardAchat(props) {
  const { money, setMoney, annualProfit, setAnnualProfit, setData, data } =
    useContext(statsContext);

  const [selected, isSelected] = useState(false);
  //========  €  =======//
  const deIncrementMoney = () => {
    setMoney(money - props.cout_achat);
  };
  //Incremente les profits par an//
  const incrementAnnualProfit = () => {
    setAnnualProfit(annualProfit + props.profit);
  };

  const incrementInvest = () => {
    setData(
      data.map((d) => {
        if (d.id === props.id) {
          return { ...d, buy: true };
        }
        return d;
      })
    );
  };

  return (
    <SCard>
      <div className="center">
        <button
          className="plus"
          onClick={() => {
            deIncrementMoney();
            incrementAnnualProfit();
            incrementInvest();
            isSelected(true);
          }}
        >
          Acheter pour <br />
          {props.cout_achat} €
        </button>
      </div>
    </SCard>
  );
}
