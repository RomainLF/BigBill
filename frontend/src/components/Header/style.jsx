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
    }
  }

  @media screen and (max-width: 600px) {
    .catFiltre {
      display: none;
    }
    img {
      margin-top: 0.1rem;
    }
  }
`;
