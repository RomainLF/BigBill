import styled from "styled-components";

export default styled.div`
  color: #3d3b55;
  height: 22rem;
  width: 34rem;
  background-color: white;
  box-sizing: border-box;
  border: 10px solid #00487d;
  box-shadow: 19px 16px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 1vh;
  .mainInfo {
    background-color: red;
    display: flex;
    height: 3rem;
    span {
      font-size: 1rem;
    }
    .nameJobs {
      width: 50%;
      font-size: 1.5rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }
    .roleJobs {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
    }
  }
  .statsJobs {
    background-color: red;
  }
  @media screen and (max-width: 600px) {
  }
`;
