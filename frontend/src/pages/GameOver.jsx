import SGameOver from "./style";
import gameover from "../assets/gameover.png";
import { Link } from "react-router-dom";

export default function GameOver() {
  return (
    <>
      <SGameOver>
        <div className="stop">
          <a href="https://climate.selectra.com/fr/actualites/rapport-giec-2022">
            Rapport du GIEC
          </a>
          <a href="https://agribalyse.ademe.fr/">Agribalyse</a>
          <Link to="/">
            <button className="myButton">RETOUR</button>
          </Link>
        </div>
      </SGameOver>
    </>
  );
}
