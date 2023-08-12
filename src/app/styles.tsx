"use client";

import "../global/reset.css";
import styled from "styled-components";

const MainComponent = styled.main`
  width: 100%;
  height: 100vh;

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

    .logo {
      width: 10%;
    }
    h1 {
      font-family: "roboto";
      font-weight: bold;
      font-size: 70px;
    }
  }
  .box-input {
    width: 70%;
    display: flex;
    justify-content: center;
    input {
      width: 40%;
      height: 45px;
      margin-right: 5px;
      border-width: 2px;
      border-radius: 10px;
      border: none;
      background-color: #808080;
      outline: none;
      font-family: "roboto";
      font-size: 20px;
      color: white;
    }
    input::placeholder {
      color: white; /* Cor do placeholder branco */
    }
    button {
      width: 10%;
      height: 50px;
      background-color: black;
      border-radius: 10px;
      border-style: none;
      color: white;
      font-family: "roboto";
    }
  }
`;

export { MainComponent };
