import SCounter from "./style";
import { useContext } from "react";
import statsContext from "../../services/contexts/index";

export default function Wallet() {
  const {
    money,
    earth,
    defineImgEarth,
    defineImgEau,
    defineImgEnergie,
    defineImgSol,
    eau,
    energie,
    sol,
  } = useContext(statsContext);

  return (
    <SCounter>
      <div className="money">{money}€</div>
      <section className="stats">
        <div className="earth elem">
          Particule produite{defineImgEarth()}
          {earth}
        </div>
        <div className="eau elem">
          Cons. eau douce {defineImgEau()} {eau}
        </div>
        <div className="energie elem">
          Cons. eneretique {defineImgEnergie()}
          {energie}
        </div>
        <div className="sol elem">
          Utilisation du sol {defineImgSol()}
          {sol}
        </div>
      </section>
    </SCounter>
  );
}
