"use client";
import Image from "next/image";
import { HeaderComponent } from "./styles";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../../images/github-logo.png";
import Link from "next/link";
import { useState } from "react";
import Menu from "../menu";
export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <HeaderComponent>
      <Link href={"/"}>
        <Image src={logo} alt="logo github" className="logo" />
      </Link>
      <IoMenuSharp
        className="icon"
        onClick={() => {
          setMenu(!menu);
        }}
      />
      <Menu open={menu} />
    </HeaderComponent>
  );
}
