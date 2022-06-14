import SGallery from "./style";
import Card from "@components/Card";
import { useContext, useEffect } from "react";
import statsContext from "@services/contexts";
import CardVente from "@components/CardVente";
import Upgrade from "@components/Upgrade";
import CardJobs from "@components/CardJobs";
import ButtonJobs from "@components/ButtonJobs";

export default function Gallery() {
  const { data, setData, datajobs } = useContext(statsContext);

  return (
    <SGallery>
      {data
        .filter((d) => d.buy === true)
        .map((d) => {
          return (
            <Card
              key={d.nom}
              id={d.id}
              buttonVente={
                <CardVente
                  cout_achat={d.cout_achat}
                  profit={d.profit}
                  impact_ecologique={d.impact_ecologique}
                  consommation_eau={d.consommation_eau}
                  consommation_energetique={d.consommation_energetique}
                  utilisation_sol={d.utilisation_sol}
                  id={d.id}
                />
              }
              nom={d.nom}
              profit={d.profit}
              impact_ecologique={d.impact_ecologique}
              consommation_eau={d.consommation_eau}
              consommation_energetique={d.consommation_energetique}
              utilisation_sol={d.utilisation_sol}
              categorie={d.categorie}
              cout_achat={d.cout_achat}
              superficie={d.superficie}
              production={d.production}
              image={d.image}
              realeState={d.realeState}
              upgrades={d.upgrades}
              upgrade={<Upgrade card={d} setData={setData} data={data} />}
            />
          );
        })}
      {datajobs
        .filter((d) => d.buy === true)
        .map((d) => {
          return (
            <CardJobs
              key={d.id}
              id={d.id}
              nom={d.nom}
              famille={d.famille}
              role={d.role}
              language={d.language}
              soft_skill={d.soft_skill}
              centre_interet={d.centre_interet}
              diplome={d.diplome}
              bio={d.bio}
              contrat={d.contrat}
              duree={d.duree}
              contact={d.contact}
              price={d.price}
              profit={d.profit}
              impact_ecologique={d.impact_ecologique}
              consommation_eau={d.consommation_eau}
              consommation_energetique={d.consommation_energetique}
              utilisation_sol={d.utilisation_sol}
              buttonAddJobs={
                <ButtonJobs
                  key={d.id}
                  nom={d.nom}
                  contrat={d.contrat}
                  profit={d.profit}
                  price={d.price}
                />
              }
            />
          );
        })}
    </SGallery>
  );
}
