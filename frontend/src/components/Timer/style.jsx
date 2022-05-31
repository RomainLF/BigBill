import styled from "styled-components";

export default styled.div`
  color: #000000;
  font-weight: bold;
  text-shadow: 4px 0px 0px #fafafa;
  position: fixed;
  height: 23%;
  margin-left: 10vw;
  display: flex;
  align-items: center;
  .timer {
    font-size: 2rem;
  }
  @media screen and (max-width: 600px) {
    .timer {
      font-size: 32px;
      margin-bottom: 0.5rem;
    }
  }
`;
