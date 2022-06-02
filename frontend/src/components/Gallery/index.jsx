import SGallery from "./style";
import Card from "@components/Card";
import { useContext } from "react";
import statsContext from "@services/contexts";
import CardAchat from "@components/CardAchat";

export default function Gallery() {
  const { data } = useContext(statsContext);
  return (
    <SGallery>
      {data
        .filter((d) => d.buy === false)
        .map((d) => {
          return (
            <Card
              key={d.nom}
              id={d.id}
              buttonAchat={
                <CardAchat
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
            />
          );
        })}
    </SGallery>
  );
}
