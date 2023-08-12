"use client";
import { useParams } from "next/navigation";
import { MainComponent } from "./styles";
import Header from "@/components/header";

export default function User() {
  const { login } = useParams();
  return (
    <>
      <Header />
      <MainComponent>
        <h1>User- fulano</h1>
        <h2>Login sicrano</h2>
      </MainComponent>
    </>
  );
}
