"use client";

import "../global/reset.css";
import styled from "styled-components";

const MainComponent = styled.main`
  width: 100vw;
  position: relative;
  height: 100vh;
  background-color: #0d1117; //Fonte mais escura #010409
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .box-logo {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 20px;
    @media (min-width: 576px) {
      align-items: center;
      justify-content: center;
    }
    @media (max-width: 575px) {
      flex-direction: column;
      align-items: center;
      margin-top: 20vh;
    }
    .logo {
      border-radius: 100%;
      @media (min-width: 576px) {
        width: 9vw;
        height: 9vw;
      }
      @media (max-width: 575px) {
        margin-top: 20px;
        width: 60px;
        height: 60px;
      }
    }

    h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: white;
      font-size: 70px;
      @media (min-width: 576px) {
        font-size: 70px;
      }
      @media (max-width: 575px) {
        font-size: 40px;
      }
    }
  }
  .box-input {
    width: 70%;
    display: flex;

    @media (min-width: 576px) {
      justify-content: center;
    }
    @media (max-width: 575px) {
      flex-direction: column;
      align-items: center;
    }
    input {
      @media (min-width: 576px) {
        width: 40%;
      }
      @media (max-width: 575px) {
        width: 100%;
      }

      height: 45px;
      margin-right: 5px;
      border-width: 2px;
      border-radius: 10px;
      border: none;
      background-color: white;
      outline: none;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      color: black;
    }
    input::placeholder {
      color: black; /* Cor do placeholder branco */
    }
    .icon {
      font-size: 25px;
    }
    button {
      @media (min-width: 576px) {
        width: 10%;
        background-color: white;
      }
      @media (max-width: 575px) {
        margin-top: 10px;
        width: 100%;
        background-color: #2f81f7;
      }

      height: 45px;

      border-radius: 10px;
      border-style: none;
      color: black;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
  .search-result {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }
`;

const DivNull = styled.div`
  width: 60%;
  height: 35vh;
`;

export { MainComponent, DivNull };
