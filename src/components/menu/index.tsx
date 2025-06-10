"use client";

import { useContext } from "react";
import { CardUserComponent } from "./styles";
import { UserContext } from "@/app/context/user";
import { getUserData } from "@/service/api";

import { motion, AnimatePresence } from "framer-motion";

type MenuProps = {
  open: boolean;
};

export default function Menu({ open }: MenuProps) {
  const { user, login } = useContext(UserContext);

  async function updateList(loginGit: string) {
    const response = await getUserData(loginGit);
    login(response);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0, y: -20 }}
          animate={{ height: "auto", opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 60,
            right: 0,
            width: 200,
            zIndex: 3,
            overflow: "hidden",
            boxShadow: "1px 0px 8px rgba(0,0,0,0.71)",
            backgroundColor: "white",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {user
            .map((userGit) => (
              <CardUserComponent
                key={userGit.id}
                onClick={() => updateList(userGit.login)}
              >
                <img src={userGit.avatar_url} className="avatar_url" />
                <p className="login">{userGit.login}</p>
              </CardUserComponent>
            ))
            .reverse()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
