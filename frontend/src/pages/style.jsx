import styled from "styled-components";

export default styled.section`
  font-weight: Bold;
  height: 94vh;

  .start {
    background: url("src/assets/home.jpg");
    background-size: cover;
    height: 98vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .info {
      background-color: #aaaaaa;
      height: 80vh;
      width: 55vw;
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
        overflow: hidden;
        .titleGame {
          background-color: #aaaaaa;
          border: 0.2em solid #00487d;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          box-shadow: none;
          height: 5vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        ul {
          margin-top: -1em;

          li {
            margin-top: 2em;
            margin-left: 1em;
          }
        }
      }
      .twodiv {
        width: 55%;
        height: 95%;
        margin-top: -4%;
        .news {
          width: 90%;
          height: 70%;
          background-color: #000000;
          margin: 1rem;
          border-radius: 1rem;
          .titleNews {
            background-color: #aaaaaa;
            border: 0.2em solid #000000;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            box-shadow: none;
            height: 5vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000000;
          }
        }
        .know {
          width: 90%;
          height: 27%;
          background-color: #000000;
          margin: 1rem;
          border-radius: 1rem;
          .titleNews {
            background-color: #aaaaaa;
            border: 0.2em solid #000000;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            box-shadow: none;
            height: 5vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000000;
          }
          p {
            color: #aaaaaa;
            margin-top: 10%;
          }
        }
      }
    }
    .autre {
      background-color: #aaaaaa;
      height: 80vh;
      width: 30vw;
      display: flex;
      text-align: center;
      justify-content: center;
      flex-direction: column;
      margin: 2rem;
      img {
        width: 100%;
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
    .start {
      display: flex;
      flex-direction: column-reverse;
      .autre {
        height: 16vh;
        width: 90vw;
        flex-direction: row;
        img {
          width: 105%;
          aspect-ratio: 1/1;
          margin-top: -24%;
        }
        .mainButton {
          margin-top: 0vh;
        }
      }
      .info {
        margin-top: -18%;
        height: 50vh;
        width: 90vw;
        font-size: 0.7rem;
        .note {
          .titleGame {
            height: 2.5vh;
          }
        }
        .twodiv {
          height: 97%;
          margin-top: -6%;
          .news {
            .titleNews {
              height: 2.5vh;
            }
          }
          .know {
            height: 23%;
            .titleNews {
              height: 2.5vh;
            }
            p {
              font-size: 0.6rem;
              margin-left: 0.3rem;
            }
          }
        }
      }
    }
    .stats {
      position: absolute;
      background-color: red;
      height: 12vh;
    }
  }
`;
