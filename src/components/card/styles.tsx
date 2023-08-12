"use client";

import "../../global/reset.css";
import styled from "styled-components";

const CardComponent = styled.div`
  width: 60%;
  height: 35vh;
  padding: 20px;

  background-color: white;
  border-radius: 20px;

  .box-name-image {
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    .box-name {
      display: flex;
      align-items: center;

      p {
        font-family: "roboto";
        font-size: 25px;
      }
      .name {
        font-weight: bold;
      }
    }
    .avatar {
      width: 130px;
      border-radius: 15px;
    }
  }
  .bio {
    font-family: "roboto";
    font-size: 18px;
    color: #808080;
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
      margin-left: 10px;
    }
  }
`;

export { CardComponent };
