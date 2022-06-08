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
                  Votre but est de vous enrichir tout en préservant la planete
                </li>
                <li>Vous commencez avec 400 000 $</li>
                <li>
                  Chaque achat que vous faites à un impacte positif ou negatif
                  sur la planete
                </li>
                <li>Vous pouvez gerer vos achats dans l'onglet "Gestion"</li>
                <li>
                  Attention, des évenements peuvent intervenir au cours de la
                  partie
                </li>
                <li>Vous avez jusqu'a l'année 2100 pour investir </li>
              </ul>
            </div>
            <section className="twodiv">
              <div className="news">
                <div className="titleNews">PROCHAINEMENT</div>
              </div>
              <div className="know">
                <div className="titleNews">A SAVOIR</div>
              </div>
            </section>
          </section>
        </div>
      </SHome>
    </>
  );
}
