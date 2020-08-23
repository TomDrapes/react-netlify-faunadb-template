import React, { useContext } from "react";
import { LoginScreen } from "./public/login-screen/LoginScreen";
import { Dashboard } from "./private/Dashboard";
import { AuthContext } from "../contexts/auth/AuthContext";

export const HomeScreen = () => {
  const authContext = useContext(AuthContext);

  if (!authContext?.authState.userToken) return <LoginScreen />;
  return <Dashboard />;
};
