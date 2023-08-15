"use client";

import "../../global/reset.css";
import styled from "styled-components";

const CardComponent = styled.div`
  padding: 20px;

  @media (min-width: 911px) {
    width: 40%;
    height: 40vh;
    border-radius: 20px;
  }
  @media (max-width: 910px) {
    width: 100vw;
    height: 30vh;
  }

  background-color: white;

  .box-name-image {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (min-width: 611px) {
      margin-bottom: 30px;
    }
    @media (max-width: 610px) {
      margin-bottom: 20px;
    }
    @media (max-width: 300px) {
      flex-direction: column;
      align-items: center;
    }
    .box-name {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      p {
        font-family: Arial, Helvetica, sans-serif;
      }
      @media (min-width: 576px) {
        p {
          font-size: 25px;
        }
      }
      @media (max-width: 575px) {
        p {
          font-size: 20px;
        }
      }
      @media (max-width: 300px) {
        p {
          font-size: 16px;
        }
      }

      .name {
        font-weight: bold;
      }
    }
    .avatar {
      @media (min-width: 576px) {
        width: 130px;
        border-radius: 15px;
      }
      @media (max-width: 575px) {
        width: 110px;
        border-radius: 10px;
      }
      @media (max-width: 300px) {
        width: 90px;
        border-radius: 100%;
      }
    }
    .avatar:hover {
      cursor: pointer;
    }
  }

  .bio {
    color: #808080;
    font-family: Arial, Helvetica, sans-serif;
    @media (min-width: 911px) {
      font-size: 18px;
    }
    @media (max-width: 910px) {
      font-size: 14px;
    }
  }
  .follow {
    .box-f {
      display: flex;
      align-items: center;
    }
    @media (min-width: 576px) {
      margin-top: 10px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      .icon {
        font-size: 25px;
        margin-left: 10px;
      }
      .followers {
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
      }
    }
    @media (max-width: 575px) {
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      .box-f {
        margin-left: 5px;
        height: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
          font-size: 12px;
        }
      }
      .followers {
        font-size: 12px;
        font-weight: bold;
        margin-left: 5px;
      }
      .icon {
        display: none;
      }
    }
  }
`;

export { CardComponent };
