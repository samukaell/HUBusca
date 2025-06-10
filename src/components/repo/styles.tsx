"use client";

import "../../global/reset.css";
import styled from "styled-components";

const RepoComponent = styled.div`
  width: 90%;
  background-color: #ffffff;
  margin: 20px auto;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #0969da;
    margin-bottom: 8px;
  }

  .description {
    font-size: 14px;
    color: #57606a;
    margin-bottom: 16px;
  }

  .date-box {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;

    .date {
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;

      .text {
        font-size: 12px;
        color: #57606a;
      }

      .date-info {
        font-size: 12px;
        color: #24292f;
        font-weight: 500;
      }
    }
  }

  .container-lang {
    display: flex;
    flex-direction: column;

    .title-languages {
      font-size: 14px;
      font-weight: 500;
      color: #24292f;
      margin-bottom: 6px;
    }

    .languages-box {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      p {
        background-color: #f3f4f6;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 12px;
        color: #1f2937;
        font-weight: 500;
      }
    }
  }
`;

export { RepoComponent };
