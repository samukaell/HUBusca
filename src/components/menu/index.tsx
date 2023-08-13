import { useState } from "react";
import { MenuComponent } from "./styles";

export default function Menu(props: any) {
  const { open } = props;
  let altura = "0px";
  if (open) {
    altura = "60vh";
  } else {
    altura = "0px";
  }
  //Lista de usuarios já pesquisados

  return (
    <MenuComponent altura={altura}>
      <p>User1</p>
      <p>User2</p>
      <p>User3</p>
    </MenuComponent>
  );
}
