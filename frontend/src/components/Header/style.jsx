import styled from "styled-components";
import globe from "../../assets/globe.png";
import champ from "@assets/champ.png";
import usine from "@assets/usinepicto.png";
import vache from "@assets/vache.png";
import arbre from "@assets/arbre.png";

export default styled.header`
  height: 7vh;
  background-color: #00487d;
  display: flex;
  .displayButton {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      width: 20vw;
      height: 5vh;
      border: none;
      box-shadow: 8px 6px 5px 0px rgba(0, 0, 0, 0.75);
      font-size: 1rem;
      font-weight: 600;
      background-color: #c3c4cd;
      .notif {
        position: absolute;
        display: none;
        &.active {
          display: block;
          width: 1.8%;
          aspect-ratio: 1/1;
          right: 39.5%;
          top: 0.1%;
          background-color: red;
          border-radius: 50%;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .displayButton {
      button {
        height: 4vh;
        width: 25vw;
        font-size: 0.7em;
      }
    }
  }
`;
