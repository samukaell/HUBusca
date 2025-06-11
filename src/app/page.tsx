"use client";

import { useContext, useState, useEffect } from "react";
import { UserContext, UserProps } from "./context/user";
import Card from "@/components/card";
import { MainComponent, DivNull } from "./styles";
import Header from "@/components/header";
import Image from "next/image";
import logo from "../images/github-logo.png";
import { IoSearch } from "react-icons/io5";
import { getUserData } from "@/service/api";
import SimpleAlert from "../components/alert";

export default function Home() {
  const [search, setSearch] = useState("");
  const { user, getLastUser, login } = useContext(UserContext);

  const [userGit, setUserGit] = useState<UserProps>({
    id: 1,
    name: "",
    avatar_url: "",
    login: "",
    bio: "",
    followers: 0,
    following: 0,
    location: "",
  });

  // Alerta
  type AlertaTipo = "error" | "warning" | "success";
  const [tipo, setTipo] = useState<AlertaTipo>("error");
  const [open, setOpen] = useState(false);
  const [mensagem, setMensagem] = useState("");
  //carregar os dados do usuário
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  async function getUser() {
    const response = await getUserData(search);

    if (response === "404") {
      setTipo("error");
      setMensagem("Usuário não encontrado");
      setOpen(true);
      return;
    }
    login(response);
  }

  useEffect(() => {
    setUserGit(getLastUser());
  }, [login]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <h1
          style={{
            fontSize: '2.5rem',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            margin: 0
          }}
        >
          {"Carregando..."}
        </h1>
      ) : (
        <>
          <MainComponent>
            <div className="box-logo">
              <Image src={logo} alt="Logo do Github" className="logo" />
              <h1>HUBusca</h1>
            </div>

            <div className="box-input">
              <input
                placeholder="Nome do usuário"
                type="text"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getUser();
                  }
                }}
              />
              <button onClick={getUser}>
                <IoSearch className="icon" />
              </button>
            </div>

            <div className="search-result">
              {userGit?.name === "" ? (
                <DivNull />
              ) : (
                <Card
                  name={userGit?.name}
                  avatar_url={userGit?.avatar_url}
                  login={userGit?.login}
                  bio={userGit?.bio}
                  followers={userGit?.followers}
                  following={userGit?.following}
                  location={userGit?.location}
                  key={userGit.id}
                />
              )}
            </div>
          </MainComponent>
          <SimpleAlert
            open={open}
            onClose={handleCloseAlert}
            mensagem={mensagem}
            type={tipo}
          />
        </>)}
    </>
  );
}
