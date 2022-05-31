import SGallery from "./style";
import datas from "@assets/data";
import Card from "@components/Card";
import { useContext } from "react";
import statsContext from "@services/contexts";
import CardVente from "@components/CardVente";
import Upgrade from "@components/Upgrade";

export default function Gallery() {
  const { investissement } = useContext(statsContext);
  return (
    <SGallery>
      {investissement.map((id) => {
        const data = datas.filter((data) => data.id === id)[0];
        return (
          <Card
            key={data.nom}
            id={data.id}
            buttonVente={
              <CardVente
                cout_achat={data.cout_achat}
                profit={data.profit}
                impact_ecologique={data.impact_ecologique}
                consommation_eau={data.consommation_eau}
                consommation_energetique={data.consommation_energetique}
                utilisation_sol={data.utilisation_sol}
                id={data.id}
              />
            }
            nom={data.nom}
            profit={data.profit}
            impact_ecologique={data.impact_ecologique}
            consommation_eau={data.consommation_eau}
            consommation_energetique={data.consommation_energetique}
            utilisation_sol={data.utilisation_sol}
            categorie={data.categorie}
            cout_achat={data.cout_achat}
            superficie={data.superficie}
            production={data.production}
            image={data.image}
            realeState={data.realeState}
            upgrade={<Upgrade profit={data.profit} />}
          />
        );
      })}
    </SGallery>
  );
}
