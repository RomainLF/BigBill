import styled from "styled-components";

export default styled.div`
  position: absolute;
  display: none;
  top: 0;
  &.active {
    display: block;
    width: 25rem;
    height: 15rem;
    background-color: #ec947a;
    border: 0.5em solid #bc0000;
    margin-top: -30%;
    h2 {
      text-align: center;
      font-size: 1.25em;
      margin-top: 1%;
      font-weight: 600;
      color: #00487d;
    }
    h3 {
      color: #00487d;
    }
    p {
      font-size: 0.75em;
      font-style: italic;
      text-align: center;
    }
    .choice {
      display: flex;
      justify-content: center;
      .buttonModal {
        width: 45%;
        margin: 0.2em;
        background-color: #00487d;
        padding: 0.3em;
        border-radius: 1em;
      }
      table {
        width: 100%;
        background-color: #c3c4cd;
        border: 0.1em solid #00487d;
        box-sizing: border-box;
        cursor: pointer;
        thead {
          border: 0.1em solid #00487d;
          box-sizing: border-box;
        }
      }
      .qte {
        text-align: left;
        width: 50%;
      }
      .txt {
        text-align: left;
      }
      .mainTr {
        height: 4.1em;
      }
      .statsModal {
        text-align: center;
        width: 11.5em;
      }
      .moneyModal {
      }
    }
  }
`;
