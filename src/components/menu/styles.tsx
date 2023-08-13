"use client";

import "../../global/reset.css";
import styled from "styled-components";

type Props = {
  altura: string;
};

const MenuComponent = styled.div<Props>`
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 3;
  width: 200px;
  height: ${(props) => props.altura};
  box-shadow: 1px 0px 8px 0px rgba(0, 0, 0, 0.71);

  overflow-x: hidden;
  transition: height 0.3s ease-in-out;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const CardUserComponent = styled.div`
  width: 100%;
  border-style: solid;
  border-color: black;
  border-width: 1px;

  display: flex;
`;

export { MenuComponent };
