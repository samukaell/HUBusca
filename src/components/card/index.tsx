"use client";
import Link from "next/link";
import { CardComponent } from "./styles";
import { IoPeople, IoLocationSharp } from "react-icons/io5";
export default function Card(props: any) {
  const { name, avatar_url, login, bio, followers, following, location } =
    props;
  return (
    <CardComponent>
      <div className="box-name-image">
        <div className="box-name">
          <p className="name">{name}</p>
          <p className="login">/{login}</p>
        </div>
        <Link href={`/user/${login}`}>
          <img src={avatar_url} className="avatar" />
        </Link>
      </div>
      <p className="bio">{bio}</p>
      <div className="follow">
        <IoPeople className="icon" />
        <div className="box-f">
          <p className="followers">{followers}</p>
          <p>.followers</p>
        </div>
        <div className="box-f">
          <p className="followers">{following}</p>
          <p>.following</p>
        </div>
        <IoLocationSharp className="icon" />
        <div className="box-f">
          <p> {location}</p>
        </div>
      </div>
    </CardComponent>
  );
}
