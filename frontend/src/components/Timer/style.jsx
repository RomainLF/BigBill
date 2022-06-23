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
    margin-left: 0;
    display: block;
    .timer {
      font-size: 1em;
    }
  }
`;
