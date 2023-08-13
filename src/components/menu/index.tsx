import { useContext, useState } from "react";
import { CardUserComponent, MenuComponent } from "./styles";
import { UserContext } from "@/app/context/page";
import { getUserData } from "@/service/api";
export default function Menu(props: any) {
  const { open } = props;
  const { user, login } = useContext(UserContext);
  let altura = "0px";
  if (open) {
    altura = "60vh";
  } else {
    altura = "0px";
  }
  async function updateList(loginGit: string) {
    const response = await getUserData(loginGit);
    login(response);
  }

  return (
    <MenuComponent altura={altura}>
      {user
        .map((userGit, index) => [
          <CardUserComponent
            onClick={() => {
              updateList(userGit.login);
            }}
          >
            <img src={userGit.avatar_url} className="avatar_url" />
            <p className="login">{userGit.login}</p>
          </CardUserComponent>,
        ])
        .reverse()}
    </MenuComponent>
  );
}
