import SModalEvents from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function ModalEvents() {
  const { currentEvent, handleEventChoice } = useContext(statsContext);

  return (
    <SModalEvents>
      <div className={`${currentEvent ? "active" : ""}`}>
        {/*<h2>{currentEvent.title}</h2>*/}
        <p>coucou</p>
        <button onClick={() => handleEventChoice(true)}></button>
        <button onClick={() => handleEventChoice(false)}></button>
      </div>
    </SModalEvents>
  );
}
