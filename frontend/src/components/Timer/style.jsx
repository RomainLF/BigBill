import styled from "styled-components";

export default styled.div`
  color: #000000;
  font-weight: bold;
  text-shadow: 4px 0px 0px #fafafa;
  position: fixed;
  bottom: 0;
  height: 23%;
  margin-left: 10vw;
  display: flex;
  align-items: center;
  .timer {
    font-size: 2rem;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
    display: block;
    text-shadow: none;
    border: 0.2em solid #00487d;
    height: 11%;
    position: fixed;
    bottom: 0;
    .timer {
      font-size: 0.8em;
      p {
        display: flex;
        flex-direction: column;
        span {
          font-size: 1.8em;
        }
      }
    }
  }
`;
