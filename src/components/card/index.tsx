"use client";
import { CardComponent } from "./styles";
import { IoPeople } from "react-icons/io5";
export default function Card(props: any) {
  const { name, avatar_url, login, bio, followers, following } = props;
  return (
    <CardComponent>
      <div className="box-name-image">
        <div className="box-name">
          <p className="name">{name}/</p>
          <p className="login">{login}</p>
        </div>
        <img src={avatar_url} className="avatar" />
      </div>
      <p className="bio">{bio}</p>
      <div className="follow">
        <IoPeople font-size="25px" />
        <p className="followers">{followers}</p>
        <p>.followers</p>
        <p className="followers">{following}</p>
        <p>.following</p>
      </div>
    </CardComponent>
  );
}
