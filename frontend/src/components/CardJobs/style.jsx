import styled from "styled-components";

export default styled.div`
  color: #3d3b55;
  height: 23rem;
  width: 34rem;
  background-color: white;
  box-sizing: border-box;
  border: 10px solid #00487d;
  box-shadow: 19px 16px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 1vh;
  .mainInfo {
    background-color: #d7d6d6;
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
  .mainBio {
    margin: 0rem 1rem 1rem 1rem;
    background-color: #ec947a;
    border: 0.2rem solid #00487d;
    height: 5rem;
  }
  .cor {
    display: flex;
    font-size: 0.75rem;
    .autre {
      width: 50%;
      height: 8.5rem;
      span {
        font-weight: 900;
      }
    }
  }
  .statsJobs {
    width: 50%;
    height: 6rem;
    margin-top: -0.85rem;
    border: 0.2rem solid #00487d;
    .titleStats {
      background-color: #00487d;
      text-align: center;
      color: white;
    }
    .litleStats {
      background-color: #d7d6d6;
      height: 5.27rem;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .ecolo {
        margin-left: 4.5rem;
      }
      .eau {
        margin-left: 3.75rem;
      }
      .energie {
        margin-left: 0.85rem;
      }
      .sol {
        margin-left: 7.2rem;
      }
      span {
        color: #b00000;
      }
    }
  }
  .mainProfit {
    width: 100%;
    height: 3rem;
    border: 0.2rem solid #00487d;
    margin-left: -0.2rem;
    span {
      font-size: 0.5rem;
    }
    .litleStatsProfit {
      background-color: #d7d6d6;
      height: 2.25rem;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-weight: 900;
      }
    }
    .titleProfit {
      background-color: #00487d;
      text-align: center;
      color: white;
    }
  }
  .contrat {
    background-color: #ec947a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 0rem;
    height: 2.8rem;
    margin: 0.4rem;
    border: 0.2rem solid #00487d;
    .contratSpan {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    span {
      text-align: center;
      font-size: 0.5rem;
    }
    button {
      text-transform: uppercase;
      background: linear-gradient(to bottom, #5ad79d 5%, #6db995 100%);
      border-radius: 4px;
      border: 2px solid #4b8f29;
      margin: 0.2rem;
      height: 2rem;
      color: white;
    }
  }
  @media screen and (max-width: 600px) {
    .mainInfo {
      span {
        font-size: 1rem;
      }
      .nameJobs {
        font-size: 1.1rem;
      }
      .roleJobs {
        font-size: 0.9rem;
        font-style: italic;
      }
    }
    .mainBio {
      font-size: 0.7rem;
    }
    .cor {
      font-size: 0.7rem;
      .autre {
        span {
          font-weight: 900;
        }
      }
    }
    .statsJobs {
      .titleStats {
      }
      .litleStats {
        font-size: 0.6rem;
        .ecolo {
          margin-left: 0rem;
        }
        .eau {
          margin-left: 0rem;
        }
        .energie {
          margin-left: 0rem;
        }
        .sol {
          margin-left: 0rem;
        }
        span {
        }
      }
    }
    .mainProfit {
      span {
        font-size: 0.5rem;
      }
      .litleStatsProfit {
        font-size: 1rem;
        p {
          font-weight: 900;
        }
      }
    }
    .contrat {
      .contratSpan {
        font-size: 0.7rem;
      }
      span {
        font-size: 0.4rem;
      }
      button {
      }
    }
  }
`;
