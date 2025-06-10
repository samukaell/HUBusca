"use client";

import "../../global/reset.css";
import styled from "styled-components";

type MenuProps = {
  open: boolean;
};

const MenuComponent = styled.div<MenuProps>`
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 3;
  width: 200px;

  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;

  max-height: ${({ open }) => (open ? "90vh" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};

  box-shadow: 1px 0px 8px rgba(0, 0, 0, 0.71);
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardUserComponent = styled.div`
  width: 90%;
  margin: 6px 0;
  padding: 8px 10px;
  background-color: #f9f9f9;

  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;

  transition: background-color 0.2s ease;

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    margin: 0;
  }

  .name {
    font-weight: bold;
  }

  .avatar_url {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 6px;
  }

  :hover {
    cursor: pointer;
    background-color: #ececec;
  }
`;

export { MenuComponent, CardUserComponent };
