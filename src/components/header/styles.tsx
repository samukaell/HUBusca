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
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #010409;

  a {
    text-decoration: none;
    color: inherit;
  }
  .logo {
    @media (min-width: 576px) {
      width: 40px;
      height: 40px;
    }
    @media (max-width: 575px) {
      width: 20px;
      height: 20px;
    }

    padding-left: 3vw;
  }
  .icon {
    color: white;
    font-size: 30px;
    padding-right: 3vw;
  }
`;

export { HeaderComponent };
