import SGallery from "./style";
import Card from "@components/Card";
import { useContext, useEffect } from "react";
import statsContext from "@services/contexts";
import CardVente from "@components/CardVente";
import Upgrade from "@components/Upgrade";

export default function Gallery() {
  const { data, setData } = useContext(statsContext);

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
    </SGallery>
  );
}
