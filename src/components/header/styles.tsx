"use client";

import "../../global/reset.css";

import styled from "styled-components";

const HeaderComponent = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #010409;

  a {
    text-decoration: none;
    color: inherit;
  }
  .logo {
    width: 50px;
    height: 50px;
    margin-left: 3vw;
  }
  .icon {
    color: white;
    font-size: 30px;
    margin-right: 3vw;
  }
`;

export { HeaderComponent };
