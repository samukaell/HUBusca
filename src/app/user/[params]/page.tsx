"use client";
import { useParams } from "next/navigation";
import { MainComponent } from "./styles";
import { IoPeople, IoLocationSharp } from "react-icons/io5";
import Header from "@/components/header";
import Repo from "@/components/repo";
import { UserContext, UserProps } from "@/app/context/page";
import { useContext, useEffect, useState } from "react";
import { getUserData, getRepoByUser } from "@/service/api";
export default function User() {
  const { params } = useParams();
  const [repo, setRepo] = useState([
    { id: 1, name: "", description: "", html_url: "" },
  ]);
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
  async function loadByParams() {
    const response = await getUserData(params.toString());
    setUserGit(response);
    const repository = await getRepoByUser(params.toString());
    setRepo(repository);
  }
  useEffect(() => {
    loadByParams();
  }, []);
  return (
    <>
      <Header />
      <MainComponent>
        <div className="info-user">
          <img
            src={userGit.avatar_url}
            alt="Imagem de perfil"
            className="image"
          />
          <div className="name-login">
            <p className="name">{userGit.name}</p>
            <p className="login">{userGit.login}</p>
          </div>
          <p className="bio">{userGit.bio}</p>
          <div className="follow">
            <IoPeople className="icon" />
            <p className="followers">{userGit.followers}</p>
            <p className="sub">.followers</p>
            <p className="followers">{userGit.following}</p>
            <p className="sub">.following</p>
          </div>
          <div className="local">
            <IoLocationSharp className="icon" />
            <p> {userGit.location}</p>
          </div>
        </div>
        <div className="repo">
          <p className="repo-title">Repositorio</p>
          <div className="box-repo">
            {repo.map((repository, index) => [
              <Repo
                name={repository.name}
                description={repository.description}
                html_url={repository.html_url}
                key={repository.id}
              />,
            ])}
          </div>
        </div>
      </MainComponent>
    </>
  );
}