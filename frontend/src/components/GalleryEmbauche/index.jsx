import SGallery from "./style";
import CardJobs from "@components/CardJobs";
import { useContext } from "react";
import statsContext from "@services/contexts";
import ButtonJobs from "@components/ButtonJobs";

export default function Gallery() {
  const { datajobs } = useContext(statsContext);
  return (
    <SGallery>
      {datajobs
        .filter((d) => d.buy === false)
        .map((d) => {
          return (
            <CardJobs
              key={d.id}
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
                  id={d.id}
                  nom={d.nom}
                  contrat={d.contrat}
                  profit={d.profit}
                  price={d.price}
                  impact_ecologique={d.impact_ecologique}
                  consommation_eau={d.consommation_eau}
                  consommation_energetique={d.consommation_energetique}
                  utilisation_sol={d.utilisation_sol}
                />
              }
            />
          );
        })}
    </SGallery>
  );
}
