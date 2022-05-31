import styled from "styled-components";

export default styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  flex-direction: column;
  margin-left: 35vw;
  height: 20vh;
  .money {
    color: #ffe100;
    font-size: 25px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background: url("src/assets/billet.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10%;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
  }
  .stats {
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    .elem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 25%;
      img {
        width: 40%;
        height: 150%;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .money {
      height: 5vh;
      font-size: 40px;
      margin-top: -6rem;
    }
    .earth {
      width: 6rem;
      font-size: 40px;
      margin-top: 2rem;
      margin: 1rem -5rem 0 0;

      img {
        width: 8rem;
      }
    }
  }
`;
