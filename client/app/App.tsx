import "react-native-gesture-handler";
import React, { useEffect, useMemo, useState } from "react";
import { customTheme, CustomThemeProvider } from "./theme/CustomThemeContext";
import AppRoutes from "./routes/AppRoutes";
import { AuthContext, AuthProvider } from "./auth/AuthContext";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { AsyncStorage } from "react-native";

const PUBLIC_CLIENT_KEY = "fnADwXyqaPACDGn_JLdi98WBsfmFXmXGpe9e1kPu";

const InnerApp = () => {
  const [token, setToken] = useState<string>();
  const getToken = async () => {
    return await AsyncStorage.getItem("userToken", (error, result) => {
      if (result) {
        setToken(result);
      }
    });
  };

  useEffect(() => {
    getToken();
  }, []);

  const client = useMemo(
    () =>
      new ApolloClient({
        uri: "https://graphql.fauna.com/graphql",
        request: (operation) => {
          operation.setContext({
            headers: {
              Authorization: `Bearer ${token ?? PUBLIC_CLIENT_KEY}`,
            },
          });
        },
      }),
    [token]
  );

  return (
    <ApolloProvider client={client}>
      <CustomThemeProvider value={customTheme}>
        <AppRoutes />
      </CustomThemeProvider>
    </ApolloProvider>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}
