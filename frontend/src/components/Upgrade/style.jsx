import styled from "styled-components";

export default styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .test {
    background: linear-gradient(to bottom, #c7e9ff 5%, #ebf5fb 100%);
    width: 95%;
    height: 90%;
    border-radius: 0.6rem;
    border: 3px solid #fbb7a2;
    .five {
      background-color: red;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      width: 100%;
      height: 2.8rem;
      display: flex;
      justify-content: space-around;
      .cube {
        aspect-ratio: 1/1;
        width: 14%;
        background-color: #ffffff;
        margin: 0.2rem;
        border: none;
        border-radius: 0.2rem;
      }
      .active {
        background: linear-gradient(to right, #008602 15%, #6ea770 100%);
      }
    }
    .up {
      height: 1.8rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .price {
        display: none;
      }
      p {
        color: #c1b876;
      }
    }
  }
  &:hover {
    .up {
      .price {
        display: flex;
      }
      .uptxt {
        display: none;
      }
    }
  }

  @media screen and (max-width: 600px) {
  }
`;
