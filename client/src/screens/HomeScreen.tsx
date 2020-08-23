import React from "react";
import { LoginScreen } from "./public/login-screen/LoginScreen";
import { Dashboard } from "./private/Dashboard";

export const HomeScreen = () => {
  const token = null;

  if (!token) return <LoginScreen />;
  return <Dashboard />;
};
