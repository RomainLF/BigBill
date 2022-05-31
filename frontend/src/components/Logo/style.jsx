import styled from "styled-components";

export default styled.div`
  position: fixed;
  bottom: -2rem;
  left: -3rem;
  display: flex;
  justify-content: flex-start;
  img {
    height: 16rem;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
