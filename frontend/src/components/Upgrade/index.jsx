import { useState } from "react";
import SUpgrade from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function Upgrade({ card, setData, data }) {
  const { money, setMoney, annualProfit, setAnnualProfit } =
    useContext(statsContext);

  const [cardUpgrades, setCardUpgrades] = useState(card.upgrades);

  const addUpgrade = () => {
    const multiplier = 1.2 * (card.upgrades || 1);
    const resultUpgrade = Math.round(card.profit * (multiplier || 1));
    const newProfit = resultUpgrade;
    const element = data.find((el) => el.id === card.id);
    const newElements = data.filter((el) => el.id !== card.id);
    setData([...newElements, { ...element, upgrades: element.upgrades + 0.2 }]);
    setCardUpgrades(cardUpgrades + 1);
    setMoney(money - 10000);
    if (cardUpgrades < 2)
      setAnnualProfit(annualProfit + (resultUpgrade - annualProfit));
    else
      setAnnualProfit(
        Math.round(annualProfit + (resultUpgrade - annualProfit) * 0.8333)
      );
  };

  return (
    <SUpgrade>
      <div className="test">
        <div className="five">
          {Array.from(Array(4).keys()).map((button, index) => (
            <button
              key={index}
              onClick={addUpgrade}
              className={`cube ${cardUpgrades > index && "active"}`}
            ></button>
          ))}
        </div>
        <div className="up">
          <p className="uptxt">UPGRADE</p>
          <p className="price">10 000 $</p>
        </div>
      </div>
    </SUpgrade>
  );
}
