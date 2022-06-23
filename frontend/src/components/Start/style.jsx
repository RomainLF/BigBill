import styled from "styled-components";

export default styled.div`
  text-decoration: none;
  button {
    font-size: 6vh;
    box-shadow: 0.1em 0.1em 0.1em 0.1em #014829;
    background: linear-gradient(to bottom, #5ad79d 5%, #5ad79d 100%);
    background-color: #5ad79d;
    border: 0.05em solid #5ad79d;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    padding: 4vh 6vw;
    text-decoration: none;
    text-shadow: 0px 1px 0px #35c61f;
  }
  button:active {
    text-decoration: none;
  }
  @media screen and (max-width: 600px) {
    button {
      box-shadow: 0em 0em 0.9em 0.05em #014829;
    }
  }
`;
