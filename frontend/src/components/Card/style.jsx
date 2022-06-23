import styled from "styled-components";

export default styled.div`
  color: #3d3b55;
  height: 34rem;
  width: 20rem;
  background-color: white;
  box-sizing: border-box;
  border: 10px solid #00487d;
  box-shadow: 19px 16px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1vh;
  .profits {
    text-align: center;
    span {
      font-size: 1.3rem;
      font-weight: 1000;
    }
  }
  span {
    font-size: 0.8rem;
    color: black;
  }
  table {
    background-color: #d7d6d6;
    width: 100%;
    height: 60%;
    font-size: 100%;
    margin-bottom: 7%;
    th {
      border: 1px solid #00487d;
    }
  }
  .qte {
    text-align: left;
    color: #b00000;
  }
  .center {
    width: 100%;
    text-align: center;
  }
  .plus {
    background: linear-gradient(to bottom, #5ad79d 5%, #5ad79d 100%);
    background-color: #77b55a;
    border-radius: 4px;
    border: 2px solid #4b8f29;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 6px 12px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #5b8a3c;
    width: 90%;
  }

  img {
    height: 180px;
  }
  h1 {
    text-shadow: 2px 2px 2px #fbb7a2;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    height: 10rem;
    width: 100%;
    table {
      width: 60%;
      height: 99%;
      font-size: 70%;
    }
    .mobileV {
      display: flex;
      justify-content: center;
    }
    img {
      display: none;
    }
  }
`;
