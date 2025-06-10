"use client";

import "../../../global/reset.css";
import styled from "styled-components";

const MainComponent = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #0d1117;
  display: flex;
  overflow-x: hidden; // impedir scroll lateral
  overflow-y: auto;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;

  @media (min-width: 931px) {
    justify-content: center;
  }
  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
  }

  .info-user {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media (min-width: 931px) {
      width: 40%;
    }
    @media (max-width: 930px) {
      width: 100%;
      align-items: center;
    }

    .image {
      width: 250px;
      max-width: 80%;
      margin-bottom: 10px;
      border-radius: 100%;
    }

    .follow {
      margin-top: 10px;
      display: flex;
      align-items: center;

      .followers {
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
      }
      .icon {
        font-size: 25px;
      }
      .sub {
        color: #a9a9a9;
      }
    }

    .local {
      display: flex;
      align-items: center;
      margin-top: 10px;

      .icon {
        font-size: 25px;
      }
    }

    .name-login {
      font-size: 30px;
      display: flex;
      flex-direction: column;
      width: 100%;

      @media (min-width: 931px) {
        align-items: flex-start;
      }
      @media (max-width: 930px) {
        align-items: center;
      }

      .name {
        font-weight: bold;
        margin-bottom: 10px;
      }
      .login {
        font-size: 20px;
        color: #a9a9a9;
        margin-bottom: 10px;
      }
      .id {
        font-size: 12px;
        color: #a9a9a9;
        margin-bottom: 10px;
      }
    }

    .bio {
      width: 90%;
      font-size: 16px;
      text-align: center;

      @media (min-width: 931px) {
        font-size: 20px;
        text-align: left;
        align-items: flex-start;
      }
    }
  }

  .repo {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0d1117;
    box-sizing: border-box;

    @media (min-width: 931px) {
      width: 40%;
    }
    @media (max-width: 930px) {
      width: 100%;
    }

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 20px;

      .repo-title {
        font-size: 25px;
        margin-right: 5px;
      }
      .repo-count {
        font-size: 25px;
        color: #2f81f7;
      }
    }

    .div-repo {
      height: 1px;
      background-color: #a9a9a9;
      margin-bottom: 5px;
      width: 80%;
    }

    .box-repo {
      width: 100%;
      max-height: 70vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }
`;

export { MainComponent };
