import styled from "styled-components";

export default styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  width: 20vw;
  justify-content: flex-end;
  img {
    margin-bottom: 0;
    height: 10%;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
