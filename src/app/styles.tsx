"use client";

import "../global/reset.css";
import styled from "styled-components";

const MainComponent = styled.main`
  width: 100%;
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

    .logo {
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }
    h1 {
      font-family: "roboto";
      font-weight: bold;
      color: white;
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
      background-color: white;
      outline: none;
      font-family: "roboto";
      font-size: 20px;
      color: black;
    }
    input::placeholder {
      color: black; /* Cor do placeholder branco */
    }
    button {
      width: 10%;
      height: 50px;
      background-color: white;
      border-radius: 10px;
      border-style: none;
      color: black;
      font-family: "roboto";
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
