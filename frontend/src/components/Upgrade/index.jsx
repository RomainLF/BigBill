import { useState } from "react";
import SUpgrade from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function Upgrade({ card, setData, data }) {
  const { money, setMoney } = useContext(statsContext);

  const [cardUpgrades, setCardUpgrades] = useState(card.upgrades);

  const addUpgrade = () => {
    const element = data.find((el) => el.id === card.id);
    const newElements = data.filter((el) => el.id !== card.id);
    setData([...newElements, { ...element, upgrades: element.upgrades + 1 }]);
    setCardUpgrades(cardUpgrades + 1);
    setMoney(money - 10000);
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
