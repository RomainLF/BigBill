import styled from "styled-components";

export default styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  .mainGraph {
    width: 19rem;
    height: 11rem;
    background-color: #ffffff;
    border: solid 0.2em #00487d;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
