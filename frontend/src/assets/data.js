import avocat from "@assets/avocat.png";
import mais from "@assets/mais.png";
import volaille from "@assets/volaille.png";
import boeuf from "@assets/boeuf.png";
import fraise from "@assets/fraise.png";
import porc from "@assets/porc.png";
import sushi from "@assets/sushi.png";
import foret from "@assets/foret.png";
import moulin from "@assets/moulin.png";
import usine from "@assets/usine.png";
import cafe from "@assets/cafe.png";
import platCuisiné from "@assets/platCuisiné.png";
import ble from "@assets/ble.png";
import nouille from "@assets/nouille.png";
import glace from "@assets/glace.png";
import ail from "@assets/ail.jpg";
import moules from "@assets/moule.jpg";
import liqueur from "@assets/liqueur.jpg";

/*toute les unitées sont à la tonne */
const datas = [
  {
    id: 1,
    nom: "Champ d'avocat",
    profit: 17000,
    impact_ecologique: 275,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: avocat,
    categorie: "Champ",
    cout_achat: 213160,
    superficie: "1hectar",
    production: 10,
  },
  {
    id: 2,
    nom: "Champs de maïs",
    profit: 350,
    impact_ecologique: 124,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: mais,
    categorie: "Champ",
    cout_achat: 76673,
    superficie: "1hectar",
    production: 100,
  },
  {
    id: 3,
    nom: "Ferme de volaille",
    profit: 800,
    impact_ecologique: 731,
    consommation_eau: 580,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: volaille,
    categorie: "Elevage",
    cout_achat: 41218,
    superficie: "1hectar",
    production: 80,
  },
  {
    id: 4,
    nom: "Ferme de boeuf",
    profit: 6500,
    impact_ecologique: 3398,
    consommation_eau: 2275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: boeuf,
    categorie: "Elevage",
    cout_achat: 19343,
    superficie: "1hectar",
    production: 0.6,
  },
  ,
  {
    id: 5,
    nom: "Champ de fraise",
    profit: 600,
    impact_ecologique: 53,
    consommation_eau: 180,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: fraise,
    categorie: "Champ",
    cout_achat: 28290,
    superficie: "1hectar",
    production: 34,
  },
  ,
  {
    id: 6,
    nom: "Ferme de porc",
    profit: 1900,
    impact_ecologique: 95,
    consommation_eau: 99,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: porc,
    categorie: "Elevage",
    cout_achat: 59648,
    superficie: "1hectar",
    production: 9,
  },
  {
    id: 7,
    nom: "Usine de sushi",
    profit: 3400,
    impact_ecologique: 263,
    consommation_eau: 600,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: sushi,
    categorie: "Elevage",
    cout_achat: 61860,
    superficie: "1hectar",
    production: 8,
  },
  {
    id: 8,
    nom: "Forêt",
    profit: 0,
    impact_ecologique: -400,
    consommation_eau: 200,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: foret,
    categorie: "positif",
    cout_achat: 400000,
    superficie: "1hectar",
    production: 0,
  },
  {
    id: 9,
    nom: "Moulin",
    profit: 0,
    impact_ecologique: -100,
    consommation_eau: 150,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: moulin,
    categorie: "positif",
    cout_achat: 40000,
    superficie: "1hectar",
    production: 0,
  },
  {
    id: 10,
    nom: "Usine de Pastis",
    profit: 8600,
    impact_ecologique: 116,
    consommation_eau: 50,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: usine,
    categorie: "Usine",
    cout_achat: 213200,
    superficie: "1hectar",
    production: 10,
  },
  {
    id: 11,
    nom: "Champ de café",
    profit: 600,
    impact_ecologique: 94,
    consommation_eau: 2000,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: cafe,
    categorie: "Champ",
    cout_achat: 73690,
    superficie: "1hectar",
    production: 7,
  },
  {
    id: 12,
    nom: "Usine de Plat cuisiné",
    profit: 1500,
    impact_ecologique: 3273,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: platCuisiné,
    categorie: "Usine",
    cout_achat: 220000,
    superficie: "1hectar",
    production: 100,
  },
  {
    id: 13,
    nom: "Champ de blé",
    profit: 8500,
    impact_ecologique: 87,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: ble,
    categorie: "Champ",
    cout_achat: 105720,
    superficie: "1hectar",
    production: 640,
  },
  {
    id: 14,
    nom: "Usine de nouilles asiatiques",
    profit: 2000,
    impact_ecologique: 117,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: nouille,
    categorie: "Usine",
    cout_achat: 87840,
    superficie: "1hectar",
    production: 1268,
  },
  {
    id: 15,
    nom: "Usine de glace à l'eau",
    profit: 5700,
    impact_ecologique: 237,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: glace,
    categorie: "Usine",
    cout_achat: 93550,
    superficie: "1hectar",
    production: 13,
  },
  {
    id: 16,
    nom: "Ferme à Moules",
    profit: 6300,
    impact_ecologique: 524,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: moules,
    categorie: "Elevage",
    cout_achat: 124500,
    superficie: "1hectar",
    production: 19,
  },
  {
    id: 17,
    nom: "Champ d'ail",
    profit: 800,
    impact_ecologique: 37,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: ail,
    categorie: "Champ",
    cout_achat: 18740,
    superficie: "1hectar",
    production: 9,
  },

  {
    id: 18,
    nom: "Usine de liqueur",
    profit: 7800,
    impact_ecologique: 25,
    consommation_eau: 275,
    consommation_energetique: 40,
    utilisation_sol: 55,
    image: liqueur,
    categorie: "Usine",
    cout_achat: 246800,
    superficie: "1hectar",
    production: 9,
  },
];
export default datas;
