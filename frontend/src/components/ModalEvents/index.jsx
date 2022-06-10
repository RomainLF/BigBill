import SModalEvents from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

const { currentEvent, handleEventChoice } = useContext(statsContext);

export default function ModalEvents() {
  return (
    <SModalEvents>
      <div className={`${currentEvent ? "active" : ""}`}>
        <h2>{currentEvent.title}</h2>
        <button onClick={() => handleEventChoice(true)}></button>
        <button onClick={() => handleEventChoice(false)}></button>
      </div>
    </SModalEvents>
  );
}
