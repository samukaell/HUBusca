"use client";

import "../../../global/reset.css";
import styled from "styled-components";

const MainComponent = styled.main`
  margin-top: 30px;
  width: 100vw;
  height: 100vh;
  background-color: #0d1117; //Fonte mais escura #010409
  display: flex;

  color: white;
  font-family: "roboto";
  @media (min-width: 931px) {
    justify-content: center;
  }
  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
  }
  .info-user {
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    @media (min-width: 931px) {
      margin-left: 5vw;
      width: 40%;
    }
    @media (max-width: 930px) {
      width: 100vw;
      align-items: center;
    }
    .image {
      @media (min-width: 576px) {
        width: 300px;
      }
      @media (max-width: 575px) {
        width: 200px;
      }
      width: 300px;
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
      @media (min-width: 931px) {
        font-size: 30px;
      }
      @media (max-width: 930px) {
        font-size: 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
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
      width: 100%;
      text-align: center;
      @media (min-width: 576px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        font-size: 14px;
      }
    }
  }
  .repo {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0d1117;
    @media (min-width: 931px) {
      width: 60%;
    }
    @media (max-width: 930px) {
      width: 100vw;
      align-items: center;
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
      @media (min-width: 576px) {
        width: 50%;
      }
      @media (max-width: 575px) {
        width: 80vw;
      }
    }
    .box-repo {
      height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-y: scroll;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }
`;

export { MainComponent };
