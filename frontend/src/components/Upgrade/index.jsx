import { useState } from "react";
import SUpgrade from "./style";

// shallow comparison vs deep comparison
// dom virtuel
export default function Upgrade({ card, setData, data }) {
  const [cardUpgrades, setCardUpgrades] = useState(card.upgrades);

  const addUpgrade = () => {
    const element = data.find((el) => el.id === card.id);
    const newElements = data.filter((el) => el.id !== card.id);
    //element.upgrades += 1;
    setData([...newElements, { ...element, upgrades: element.upgrades + 1 }]);
    setCardUpgrades(cardUpgrades + 1);
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
          <p>UPGRADE</p>
        </div>
      </div>
    </SUpgrade>
  );
}
