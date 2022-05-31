import styled from "styled-components";

export default styled.div`
  margin-bottom: 0.4rem;
  .center {
    width: 100%;
    text-align: center;
  }
  .moins {
    background: linear-gradient(to bottom, #ff0000 5%, #f67f7f 100%);
    border-radius: 4px;
    border: 2px solid #880e18;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 6px 12px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ff0000;
    width: 90%;
  }
  @media screen and (max-width: 600px) {
  }
`;
