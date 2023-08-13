"use client";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/page";
import Card from "@/components/card";
import { MainComponent, DivNull } from "./styles";
import Header from "@/components/header";
import Image from "next/image";
import logo from "../images/github-logo.png";
import { IoSearch } from "react-icons/io5";
import { getUserData } from "@/service/api";

export default function Home() {
  const [search, setSearch] = useState("");
  const { user, login } = useContext(UserContext);
  const [userGit, setUserGit] = useState(user);

  async function getUser() {
    const response = await getUserData(search);
    login(response);
  }
  useEffect(() => {
    setUserGit(user);
  }, [login]);

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
          <button onClick={getUser}>
            <IoSearch className="icon" />
          </button>
        </div>
        <div className="search-result">
          {userGit?.name === "" ? (
            <DivNull></DivNull>
          ) : (
            <Card
              name={userGit?.name}
              avatar_url={userGit?.avatar_url}
              login={userGit?.login}
              bio={userGit?.bio}
              followers={userGit?.followers}
              following={userGit?.following}
              location={userGit?.location}
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
