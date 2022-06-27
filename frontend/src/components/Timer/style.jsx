import styled from "styled-components";

export default styled.div`
  color: #000000;
  font-weight: bold;
  text-shadow: 4px 0px 0px #fafafa;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: -104%;
  .timer {
    font-size: 2rem;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
    display: flex;
    text-shadow: none;
    height: 13%;
    position: fixed;
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
