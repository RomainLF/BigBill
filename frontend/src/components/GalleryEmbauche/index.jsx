import SGallery from "./style";
import CardJobs from "@components/CardJobs";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function Gallery() {
  const { datajobs } = useContext(statsContext);
  return (
    <SGallery>
      {datajobs.map((d) => {
        return (
          <CardJobs
            key={d.id}
            nom={d.nom}
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
          />
        );
      })}
    </SGallery>
  );
}
