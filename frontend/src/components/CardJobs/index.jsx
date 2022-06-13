import SCardjobs from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function Card(props) {
  const { money, setMoney, timerActive, annualProfit, setAnnualProfit } =
    useContext(statsContext);

  return (
    <SCardjobs>
      <section className="mainInfo">
        <div className="nameJobs">{props.nom}</div>
        <div className="roleJobs">{props.role}</div>
      </section>
      <div>{props.language}</div>
      <div>{props.soft_skill}</div>
      <div>{props.centre_interet}</div>
      <div>{props.diplome}</div>
      <div>{props.bio}</div>
      <div>{props.contrat}</div>
      <div>{props.duree}</div>
      <div>{props.contact}</div>
      <div>{props.price}</div>
      <div>{props.profit}</div>
      <section className="statsJobs">
        <div>Impacte ecologique: {props.impact_ecologique}</div>
        <div>Consommation d'eau: {props.consommation_eau}</div>
        <div>Consommation energetique: {props.consommation_energetique}</div>
        <div>Utilisation sol: {props.utilisation_sol}</div>
      </section>
    </SCardjobs>
  );
}
