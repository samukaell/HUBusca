"use client";

import "../../../global/reset.css";
import styled from "styled-components";

const MainComponent = styled.main`
  margin-top: 60px;
  width: 100%;
  height: 100vh;
  background-color: #0d1117; //Fonte mais escura #010409
  display: flex;
  justify-content: center;
  color: white;
  font-family: "roboto";

  .info-user {
    margin-top: 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    .image {
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
      font-size: 30px;

      .name {
        font-weight: bold;
      }
      .login {
        font-size: 20px;
        color: #a9a9a9;
      }
    }
  }
  .repo {
    margin-top: 10px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .repo-title {
      width: 100%;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      font-size: 25px;
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
