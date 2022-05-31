import styled from "styled-components";

export default styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100vw;
  justify-content: flex-end;
  img {
    margin-bottom: 0;
    height: 280px;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
