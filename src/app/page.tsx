"use client";
import { useState } from "react";
import Card from "@/components/card";
import { MainComponent, DivNull } from "./styles";
import Header from "@/components/header";
import Image from "next/image";
import logo from "../images/github-logo.png";
import { IoSearch } from "react-icons/io5";
import { getUserData } from "@/service/api";

export default function Home() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({
    name: "",
    avatar_url: "",
    login: "",
    bio: "",
    followers: 0,
    following: 0,
    location: "",
  });
  async function getUser() {
    const response = await getUserData(search);
    setUser(response);
  }
  return (
    <>
      <Header />
      <MainComponent>
        <div className="box-logo">
          <Image src={logo} alt="Logo do Github" className="logo" />
          <h1>HUBusca</h1>
        </div>
        <div className="box-input">
          <input
            placeholder="Nome do usuario"
            type="text"
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={getUser}>Buscar</button>
        </div>
        <div className="search-result">
          {user.name === "" ? (
            <DivNull></DivNull>
          ) : (
            <Card
              name={user.name}
              avatar_url={user.avatar_url}
              login={user.login}
              bio={user.bio}
              followers={user.followers}
              following={user.following}
              location={user.location}
            />
          )}
        </div>
      </MainComponent>
    </>
  );
}

/*
//<IoSearch font-size="30px" color="black" />
<Card
  name={"Samuel"}
  avatar_url={"https://avatars.githubusercontent.com/u/47232059?v=4"}
  login={"Samukaell"}
  bio={
     "Desenvolvedor Full Stack. Estudante universitário de ciências da computação e aluno da Driven."
       }
  followers={84}
  following={173}
/>

*/
