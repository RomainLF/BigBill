import SButtonJobs from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function ButtonJobs(props) {
  const {
    money,
    setMoney,
    annualProfit,
    setAnnualProfit,
    datajobs,
    setDatajobs,
    setCurrentNotif,
    currentNotif,
  } = useContext(statsContext);

  //========  $  =======//
  const deIncrementMoney = () => {
    setMoney(money - props.price);
    setCurrentNotif("notif active");
  };
  //Incremente les profits par an//
  const incrementAnnualProfit = () => {
    setAnnualProfit(annualProfit + props.profit);
  };

  const incrementInvest = () => {
    setDatajobs(
      datajobs.map((d) => {
        if (d.id === props.id) {
          return { ...d, buy: true };
        }
        return d;
      })
    );
  };

  return (
    <SButtonJobs>
      <div className="center">
        <button
          className="plus"
          onClick={() => {
            deIncrementMoney();
            incrementAnnualProfit();
            incrementInvest();
          }}
        >
          Prendre {props.nom} en {props.contrat}
        </button>
      </div>
    </SButtonJobs>
  );
}
