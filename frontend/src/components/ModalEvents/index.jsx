import SModalEvents from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function ModalEvents() {
  const { currentEvent, handleEventChoice, events, todo } =
    useContext(statsContext);

  return (
    <SModalEvents className={`${currentEvent ? "active" : ""}`}>
      <div>
        {
          <h2>
            {events
              .filter((el) => el.id === todo)
              .map((el) => {
                return el.title;
              })}
          </h2>
        }
        <h3>Nouvel événement:</h3>
        <p>
          "
          {events
            .filter((el) => el.id === todo)
            .map((el) => {
              return el.message;
            })}
          "
        </p>
        <h3>Que voulez-vous faire ?</h3>
        <section className="choice">
          <div
            className="buttonModal statsModal"
            onClick={() => handleEventChoice(true)}
          >
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Consomation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="txt">particule</td>
                  <td className="qte">
                    +
                    {events
                      .filter((el) => el.id === todo)
                      .map((el) => {
                        return el.particule;
                      })}
                  </td>
                </tr>
                <tr>
                  <td className="txt">eau</td>
                  <td className="qte">
                    +
                    {events
                      .filter((el) => el.id === todo)
                      .map((el) => {
                        return el.eau;
                      })}
                  </td>
                </tr>
                <tr>
                  <td className="txt">energie</td>
                  <td className="qte">
                    +
                    {events
                      .filter((el) => el.id === todo)
                      .map((el) => {
                        return el.energie;
                      })}
                  </td>
                </tr>
                <td className="txt">sol</td>
                <td className="qte">
                  +
                  {events
                    .filter((el) => el.id === todo)
                    .map((el) => {
                      return el.sol;
                    })}
                </td>
              </tbody>
            </table>
          </div>
          <div
            className="buttonModal moneyModal"
            onClick={() => handleEventChoice(false)}
          >
            <table>
              <thead>
                <tr>
                  <th colSpan="2">Impact monétaire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="mainTr">
                  <td>Prix</td>
                  <td>
                    +
                    {events
                      .filter((el) => el.id === todo)
                      .map((el) => {
                        return el.moneyImpact;
                      })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SModalEvents>
  );
}
