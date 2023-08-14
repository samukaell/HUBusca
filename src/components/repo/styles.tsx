"use client";

import "../../global/reset.css";
import styled from "styled-components";

const RepoComponent = styled.div`
  height: 400px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  border-color: #a9a9a9;
  border-radius: 20px;

  color: black;

  @media (min-width: 576px) {
    width: 50%;
  }
  @media (max-width: 575px) {
    width: 60vw;
  }

  .title {
    color: #2f81f7;
  }
  p {
    color: #a9a9a9;
  }
  .date-box {
    width: 100vw;
    display: flex;
    align-items: center;
    margin-top: 10px;

    @media (min-width: 576px) {
      .date {
        display: flex;
        align-items: center;
        margin-right: 5px;
        p {
          font-size: 12px;
        }
        .date-info {
          margin-left: 5px;
          color: #2f81f7;
        }
      }
    }
    @media (max-width: 575px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 5px;
      .date {
        display: flex;
        align-items: center;
        margin-right: 5px;
      }
      p {
        font-size: 10px;
      }
      .date-info {
        margin-left: 5px;
        color: #2f81f7;
      }
    }
  }
  .container-lang {
    display: flex;

    margin-bottom: 10px;
    margin-top: 10px;
    @media (min-width: 576px) {
      align-items: center;
      .title-languages {
        font-size: 12px;
        color: #2f81f7;
      }
      .languages-box {
        display: flex;
        p {
          font-size: 12px;
        }
      }
    }
    @media (max-width: 575px) {
      align-items: flex-start;
      .title-languages {
        font-size: 12px;
        color: #2f81f7;
      }
      .languages-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
          font-size: 12px;
        }
      }
    }
  }

  :hover {
    cursor: pointer;
  }
`;

export { RepoComponent };
