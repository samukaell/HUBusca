"use client";
import Image from "next/image";
import { HeaderComponent } from "./styles";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../../images/github-logo.png";
import Link from "next/link";
export default function Header() {
  return (
    <HeaderComponent>
      <Link href={"/"}>
        <Image src={logo} alt="logo github" className="logo" />
      </Link>
      <IoMenuSharp className="icon" />
    </HeaderComponent>
  );
}
