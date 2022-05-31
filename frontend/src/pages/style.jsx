import styled from "styled-components";

export default styled.section`
  font-weight: Bold;
  text-shadow: 5px 2px 2px #fbb7a2;
  height: 94vh;

  .start {
    background: url("src/assets/home.jpg");
    background-size: cover;
    height: 94vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .info {
      background-color: #aaaaaa;
      height: 80vh;
      width: 40vw;
      margin: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .note {
        width: 45%;
        height: 95%;
        background-color: #00487d;
        margin: 1rem;
        border-radius: 1rem;
      }
      .news {
        width: 45%;
        height: 95%;
        background-color: #000000;
        margin: 1rem;
        border-radius: 1rem;
      }
    }
    .autre {
      background-color: #aaaaaa;
      height: 80vh;
      width: 40vw;
      display: flex;
      text-align: center;
      justify-content: center;
      flex-direction: column;
      margin: 2rem;
      img {
        width: 80%;
        aspect-ratio: 1/1;
        margin-top: -20vh;
      }
      .mainButton {
        margin-top: -10vh;
      }
    }
  }

  .myButton {
    margin-top: 8vh;
    box-shadow: 3px 4px 0px 0px #070707;
    background: linear-gradient(to bottom, #00487d 5%, #378de5 100%);
    background-color: #00487d;

    border: 1px solid #337bc4;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;

    font-size: 50px;

    padding: 2rem 4rem;
    text-decoration: none;
    text-shadow: 0px 1px 0px #00487d;
  }

  .myButton:active {
    position: relative;
    top: 1px;
  }
  .stop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    h1 {
      text-align: center;
    }
  }
`;
