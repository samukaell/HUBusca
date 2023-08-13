import { createContext, useContext, useState } from "react";

export type UserProps = {
  name: string;
  avatar_url: string;
  login: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
};

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserProps) => void;
};

const UserContext = createContext<AuthContextProps>({} as AuthContextProps);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>({
    name: "",
    avatar_url: "",
    login: "",
    bio: "",
    followers: 0,
    following: 0,
    location: "",
  });

  const login = (user: UserProps) => {
    setUser(user);
    console.log("User->", user);
  };
  return (
    <UserContext.Provider value={{ user, login }}>
      <>{children}</>
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
