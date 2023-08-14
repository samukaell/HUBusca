"use client";
import { createContext, useContext, useState } from "react";

export type UserProps = {
  id: number;
  name: string;
  avatar_url: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
};

type AuthContextProps = {
  user: UserProps[];
  getLastUser: () => UserProps;
  login: (newUser: UserProps) => void;
};

const UserContext = createContext<AuthContextProps>({} as AuthContextProps);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps[]>([]);

  const login = (newUser: UserProps) => {
    const existingUserIndex = user.findIndex(
      (user) => user.login === newUser.login
    );

    if (existingUserIndex !== -1) {
      // Remover o usuário existente da lista
      const updatedUsers = user.filter(
        (_, index) => index !== existingUserIndex
      );
      // Adicionar o usuário existente novamente no final da lista
      updatedUsers.push(user[existingUserIndex]);
      setUser(updatedUsers);
    } else {
      // Clonar o array existente e adicionar o novo objeto
      const updatedUsers = [...user, newUser];
      setUser(updatedUsers);
    }
  };

  const getLastUser = (): UserProps => {
    if (user.length > 0) {
      return user[user.length - 1];
    } else {
      return {
        id: 1,
        name: "",
        avatar_url: "",
        login: "",
        bio: "",
        followers: 0,
        following: 0,
        location: "",
      };
    }
  };
  return (
    <UserContext.Provider value={{ user, getLastUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
