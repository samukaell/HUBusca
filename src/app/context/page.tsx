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
  user: UserProps[];
  getLastUser: () => UserProps;
  login: (newUser: UserProps) => void;
};

const UserContext = createContext<AuthContextProps>({} as AuthContextProps);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps[]>([]);

  const login = (newUser: UserProps) => {
    const updatedUsers = [...user, newUser];
    setUser(updatedUsers);
  };

  const getLastUser = (): UserProps => {
    if (user.length > 0) {
      return user[user.length - 1];
    } else {
      return {
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
      <>{children}</>
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
