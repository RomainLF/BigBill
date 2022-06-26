import Start from "@components/Start";
import { Link } from "react-router-dom";
import SHome from "./style";
import mainLogo1 from "../assets/BigBill.png";

export default function Home() {
  return (
    <>
      <SHome>
        <div className="start">
          <section className="autre">
            <div className="Logo">
              <img src={mainLogo1} />
            </div>
            <div className="mainButton">
              <Link to="/investissement">
                <Start />
              </Link>
            </div>
          </section>

          <section className="info">
            <div className="note">
              <div className="titleGame">LE JEU</div>
              <ul>
                <li>
                  -Votre but est de vous enrichir tout en préservant la planète
                </li>
                <li>-Vous commencez avec 400 000€</li>
                <li>
                  -Chaque achat que vous faites a un impact positif ou négatif
                  sur la planète
                </li>
                <li>-Vous pouvez gérer vos achats dans l'onglet "Gestion"</li>
                <li>
                  -Pour vous aidez à agrandir votre empire financier vous pouvez
                  embauché du personnel dans l'onglet "Embauché"
                </li>
                <li>
                  -Attention, des évenements peuvent intervenir au cours de la
                  partie
                </li>
                <li>-Vous avez jusqu'à l'année 2100 pour investir</li>
              </ul>
            </div>
            <section className="twodiv">
              <div className="news">
                <div className="titleNews">PROCHAINEMENT</div>
              </div>
              <div className="know">
                <div className="titleNews">A SAVOIR</div>
                <p>
                  Toutes les données présentes sur BigBill invest viennent de:
                  <a href="https://agribalyse.ademe.fr/">
                    https://agribalyse.ademe.fr/
                  </a>
                </p>
              </div>
            </section>
          </section>
        </div>
      </SHome>
    </>
  );
}
