import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";
import useInterval from "./../../services/contexts/useInterval";

export default function Card(props) {
  const { money, setMoney, timerActive, annualProfit, setAnnualProfit } =
    useContext(statsContext);

  const [nb, setNb] = useState(0);

  //========  actualisation chaque année  ========//
  useInterval(() => {
    if (timerActive) setMoney(money + props.profit * nb);
  }, 5000);

  useInterval(() => {
    if (annualProfit > 1) {
      return annualProfit;
    }
    if (timerActive) setAnnualProfit(props.profit * nb);
  }, 5000);

  const getAttributeValue = (attribute) => {
    const multiplier = 1.2 * (props.upgrades || 0);
    return attribute * (multiplier || 1);
  };

  return (
    <SCard>
      <h1>{props.nom}</h1>
      <div className="profits">
        Profits : <span>{getAttributeValue(props.profit)}</span>€ /ans
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Consomation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Particules : </td>
            <td className="qte">
              {props.impact_ecologique}
              <span>d./kg de produit</span>
            </td>
          </tr>
          <tr>
            <td>Eau : </td>
            <td className="qte">
              {props.consommation_eau}
              <span> m3/kg de produit</span>
            </td>
          </tr>
          <tr>
            <td>Energie : </td>
            <td className="qte">
              {props.consommation_energetique}
              <span> MJ/kg produit</span>
            </td>
          </tr>
          <tr>
            <td>Sol : </td>
            <td className="qte">
              {props.utilisation_sol}
              <span> Pt/kg de produit</span>
            </td>
          </tr>
        </tbody>
      </table>
      {props.upgrade}
      {props.buttonAchat}
      <img src={props.image} alt="img" />
      {props.buttonVente}
    </SCard>
  );
}
