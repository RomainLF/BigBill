import { createContext, useState } from "react";
import datas from "@assets/data";
import useInterval from "./useInterval";
import imgVide from "../../assets/Compte/Vide.png";
import imgEarth2 from "../../assets/Compte/earth-1.png";
import imgEarth3 from "../../assets/Compte/earth-2.png";
import imgEarth4 from "../../assets/Compte/earth-3.png";
import imgEarth5 from "../../assets/Compte/earth-4.png";
import imgEarth6 from "../../assets/Compte/earth-5.png";
import imgEarth7 from "../../assets/Compte/earth-6.png";
import imgEarth8 from "../../assets/Compte/earth-7.png";
import imgEarth9 from "../../assets/Compte/earth-8.png";
import imgEarth10 from "../../assets/Compte/earth-9.png";
import imgEarth11 from "../../assets/Compte/earth-10.png";
import imgEau2 from "../../assets/Compte/Eau-1.png";
import imgEau3 from "../../assets/Compte/Eau-2.png";
import imgEau4 from "../../assets/Compte/Eau-3.png";
import imgEau5 from "../../assets/Compte/Eau-4.png";
import imgEau6 from "../../assets/Compte/Eau-5.png";
import imgEau7 from "../../assets/Compte/Eau-6.png";
import imgEau8 from "../../assets/Compte/Eau-7.png";
import imgEau9 from "../../assets/Compte/Eau-8.png";
import imgEau10 from "../../assets/Compte/Eau-9.png";
import imgEau11 from "../../assets/Compte/Eau-10.png";
import imgEnergie2 from "../../assets/Compte/Eau-1.png";
import imgEnergie3 from "../../assets/Compte/Eau-2.png";
import imgEnergie4 from "../../assets/Compte/Eau-3.png";
import imgEnergie5 from "../../assets/Compte/Eau-4.png";
import imgEnergie6 from "../../assets/Compte/Eau-5.png";
import imgEnergie7 from "../../assets/Compte/Eau-6.png";
import imgEnergie8 from "../../assets/Compte/Eau-7.png";
import imgEnergie9 from "../../assets/Compte/Eau-8.png";
import imgEnergie10 from "../../assets/Compte/Eau-9.png";
import imgEnergie11 from "../../assets/Compte/Eau-10.png";
import imgSol2 from "../../assets/Compte/Eau-1.png";
import imgSol3 from "../../assets/Compte/Eau-2.png";
import imgSol4 from "../../assets/Compte/Eau-3.png";
import imgSol5 from "../../assets/Compte/Eau-4.png";
import imgSol6 from "../../assets/Compte/Eau-5.png";
import imgSol7 from "../../assets/Compte/Eau-6.png";
import imgSol8 from "../../assets/Compte/Eau-7.png";
import imgSol9 from "../../assets/Compte/Eau-8.png";
import imgSol10 from "../../assets/Compte/Eau-9.png";
import imgSol11 from "../../assets/Compte/Eau-10.png";

const statsContext = createContext();
export default statsContext;

export function StatsContext({ children }) {
  const [timer, setTimer] = useState(2022);
  const [money, setMoney] = useState(400000);
  const [earth, setEarth] = useState(0);
  const [eau, setEau] = useState(0);
  const [energie, setEnergie] = useState(0);
  const [sol, setSol] = useState(0);
  const [impacctEcolo, setImpactEcolo] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [annualProfit, setAnnualProfit] = useState(0);
  const [modal, setModal] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [data, setData] = useState(datas.map((el) => ({ ...el, buy: false })));
  //const [investissement, setInvestissement] = useState([]);
  //const [quantity, setQuantity] = useState(0);

  useInterval(() => {
    if (timerActive) setTimer((prevState) => prevState + 1);
  }, 5000);

  const reset = () => {
    setTimerActive(false);
    setTimer(0);
  };

  const defineImgEarth = () => {
    if (earth < 1000) {
      return <img src={imgVide} />;
    } else if (earth > 1000 && earth < 1999) {
      return <img src={imgEarth2} />;
    } else if (earth > 2000 && earth < 2999) {
      return <img src={imgEarth3} />;
    } else if (earth > 3000 && earth < 3999) {
      return <img src={imgEarth4} />;
    } else if (earth > 4000 && earth < 4999) {
      return <img src={imgEarth5} />;
    } else if (earth > 5000 && earth < 5999) {
      return <img src={imgEarth6} />;
    } else if (earth > 6000 && earth < 6999) {
      return <img src={imgEarth7} />;
    } else if (earth > 7000 && earth < 7999) {
      return <img src={imgEarth8} />;
    } else if (earth > 8000 && earth < 8999) {
      return <img src={imgEarth9} />;
    } else if (earth > 9000 && earth < 9999) {
      return <img src={imgEarth10} />;
    } else if (earth > 10000 && earth < 10999) {
      return <img src={imgEarth11} />;
    }
  };
  const defineImgEau = () => {
    if (eau < 1000) {
      return <img src={imgVide} />;
    } else if (eau > 1000 && eau < 1999) {
      return <img src={imgEau2} />;
    } else if (eau > 2000 && eau < 2999) {
      return <img src={imgEau3} />;
    } else if (eau > 3000 && eau < 3999) {
      return <img src={imgEau4} />;
    } else if (eau > 4000 && eau < 4999) {
      return <img src={imgEau5} />;
    } else if (eau > 5000 && eau < 5999) {
      return <img src={imgEau6} />;
    } else if (eau > 6000 && eau < 6999) {
      return <img src={imgEau7} />;
    } else if (eau > 7000 && eau < 7999) {
      return <img src={imgEau8} />;
    } else if (eau > 8000 && eau < 8999) {
      return <img src={imgEau9} />;
    } else if (eau > 9000 && eau < 9999) {
      return <img src={imgEau10} />;
    } else if (eau > 10000 && eau < 10999) {
      return <img src={imgEau11} />;
    }
  };
  const defineImgEnergie = () => {
    if (energie < 1000) {
      return <img src={imgVide} />;
    } else if (energie > 1000 && energie < 1999) {
      return <img src={imgEnergie2} />;
    } else if (energie > 2000 && energie < 2999) {
      return <img src={imgEnergie3} />;
    } else if (energie > 3000 && energie < 3999) {
      return <img src={imgEnergie4} />;
    } else if (energie > 4000 && energie < 4999) {
      return <img src={imgEnergie5} />;
    } else if (energie > 5000 && energie < 5999) {
      return <img src={imgEnergie6} />;
    } else if (energie > 6000 && energie < 6999) {
      return <img src={imgEnergie7} />;
    } else if (energie > 7000 && energie < 7999) {
      return <img src={imgEnergie8} />;
    } else if (energie > 8000 && energie < 8999) {
      return <img src={imgEnergie9} />;
    } else if (energie > 9000 && energie < 9999) {
      return <img src={imgEnergie10} />;
    } else if (energie > 10000 && energie < 10999) {
      return <img src={imgEnergie11} />;
    }
  };
  const defineImgSol = () => {
    if (sol < 1000) {
      return <img src={imgVide} />;
    } else if (sol > 1000 && sol < 1999) {
      return <img src={imgSol2} />;
    } else if (sol > 2000 && sol < 2999) {
      return <img src={imgSol3} />;
    } else if (sol > 3000 && sol < 3999) {
      return <img src={imgSol4} />;
    } else if (sol > 4000 && sol < 4999) {
      return <img src={imgSol5} />;
    } else if (sol > 5000 && sol < 5999) {
      return <img src={imgSol6} />;
    } else if (sol > 6000 && sol < 6999) {
      return <img src={imgSol7} />;
    } else if (sol > 7000 && sol < 7999) {
      return <img src={imgSol8} />;
    } else if (sol > 8000 && sol < 8999) {
      return <img src={imgSol9} />;
    } else if (sol > 9000 && sol < 9999) {
      return <img src={imgSol10} />;
    } else if (sol > 10000 && sol < 10999) {
      return <img src={imgSol11} />;
    }
  };

  const endGameFunc = () => {
    if (earth >= 5000 || timer >= 2060 || money <= 0) {
      setEndGame(true);
      reset();
      setModal(true);
    }
  };

  return (
    <statsContext.Provider
      value={{
        timer,
        setTimer,
        timerActive,
        setTimerActive,
        money,
        setMoney,
        impacctEcolo,
        setImpactEcolo,
        reset,
        annualProfit,
        setAnnualProfit,
        earth,
        setEarth,
        defineImgEarth,
        defineImgEau,
        defineImgEnergie,
        defineImgSol,
        endGameFunc,
        modal,
        setModal,
        eau,
        setEau,
        energie,
        setEnergie,
        sol,
        setSol,
        /*investissement,
        setInvestissement,
        quantity,
        setQuantity,*/
        data,
        setData,
      }}
    >
      {children}
    </statsContext.Provider>
  );
}
