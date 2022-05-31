import SGallery from "./style";
import Card from "@components/Card";
import datas from "@assets/data";
import { useContext } from "react";
import statsContext from "@services/contexts";
import CardAchat from "@components/CardAchat";

export default function Gallery() {
  return (
    <SGallery>
      {datas.map((data) => {
        return (
          <Card
            key={data.nom}
            id={data.id}
            buttonAchat={
              <CardAchat
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
          />
        );
      })}
    </SGallery>
  );
}
