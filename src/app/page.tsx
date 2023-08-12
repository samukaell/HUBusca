"use client";
import { useEffect } from "react";
import { MainComponent } from "./styles";
import { IoSearch } from "react-icons/io5";
import { getUserData } from "@/service/api";

export default function Home() {
  async function getUser() {
    const response = await getUserData("samukaell");
    console.log("User->", response);
  }
  //Load Date
  useEffect(() => {
    getUser();
  }, []);

  return (
    <MainComponent>
      <div className="box-logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="Logo do Github"
          className="logo"
        />
        <h1>HUBusca</h1>
      </div>
      <div className="box-input">
        <input placeholder="Nome do usuario" />
        <button>
          <IoSearch font-size="30px" color="white" />
        </button>
      </div>
    </MainComponent>
  );
}
