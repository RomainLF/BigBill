import SCardjobs from "./style";
import { useContext, useState } from "react";
import statsContext from "@services/contexts";
import ButtonJobs from "@components/ButtonJobs";
import useInterval from "./../../services/contexts/useInterval";

export default function Card(props) {
  const { money, setMoney, timerActive, annualProfit, setAnnualProfit } =
    useContext(statsContext);

  return (
    <SCardjobs>
      <section className="mainInfo">
        <div className="nameJobs">
          {props.nom} {props.famille}
        </div>
        <div className="roleJobs">{props.role}</div>
      </section>
      <section className="mainBio">
        <div>{props.bio}</div>
      </section>
      <section className="cor">
        <section className="autre">
          <div>
            <span>SKILLS: </span>
            <br />
            {props.language}
          </div>
          <div>
            <span>SOFT SKILLS:</span> <br />
            {props.soft_skill}
          </div>
          <div>
            <span>CENTRE D'INTERET: </span>
            <br />
            {props.centre_interet}
          </div>
          <div>{props.contact}</div>
        </section>
        <section className="statsJobs">
          <div className="titleStats">Stats</div>
          <div className="litleStats">
            <div>
              Impacte ecologique:{" "}
              <span className="ecolo">{props.impact_ecologique}</span>
            </div>
            <div>
              Consommation d'eau:{" "}
              <span className="eau">{props.consommation_eau}</span>
            </div>
            <div>
              Consommation energetique:{" "}
              <span className="energie">{props.consommation_energetique}</span>
            </div>
            <div>
              Utilisation sol:{" "}
              <span className="sol">{props.utilisation_sol}</span>
            </div>
          </div>
          <section className="mainProfit">
            <div className="titleProfit">Profit</div>
            <div className="litleStatsProfit">
              <p>{props.profit}</p>
              <span> $/an</span>
            </div>
          </section>
        </section>
      </section>
      <section className="contrat">
        <div className="contratSpan">
          <span>Type de contrat:</span>
          {props.contrat}
        </div>
        <div className="contratSpan">
          <span>Durée du contrat:</span>
          {props.duree}
        </div>
        <div className="contratSpan">
          <span>
            Cout estimé <br />
            pour l'entreprise:
          </span>
          {props.price}
          <span> $/an</span>
        </div>
        {props.buttonAddJobs}
        {props.buttonAddPromotion}
      </section>
    </SCardjobs>
  );
}
