"use client";

import "../../global/reset.css";
import styled from "styled-components";

const RepoComponent = styled.div`
  width: 50%;
  height: 400px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 1px;
  border-style: solid;
  border-width: 1px;
  border-color: #a9a9a9;
  border-radius: 20px;

  color: black;

  .title {
    color: #2f81f7;
  }
  p {
    color: #a9a9a9;
  }
  .date-box {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
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
  .container-lang {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
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

  :hover {
    cursor: pointer;
  }
`;

export { RepoComponent };
