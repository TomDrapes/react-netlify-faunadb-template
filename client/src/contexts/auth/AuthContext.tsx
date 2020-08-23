import React, { ReactNode, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import {
  AuthContextState,
  AuthAction,
  SignInDetails,
  SignupDetails,
} from "./auth-context-model";
import localForage from "localforage";
import { SnackbarContext } from "../snackbar/SnackbarContext";

const AuthContext = React.createContext<AuthContextState | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}
const AuthProvider = (props: Props) => {
  const snackbarContext = useContext(SnackbarContext);

  const getToken = async () => {
    return await localForage.getItem(
      "userToken",
      (error: any, result: string | null) => {
        if (result) {
          authDispatch.validateToken(result);
        }
      }
    );
  };

  useEffect(() => {
    getToken();
  }, []);

  const [state, dispatch] = React.useReducer(
    (prevState: any, action: { type: AuthAction; token?: string }) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  const authDispatch = useMemo(
    () => ({
      signIn: async (data: SignInDetails) => {
        console.log(data);
        axios
          .post(
            "http://localhost:8888/.netlify/functions/login",
            JSON.stringify(data)
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              snackbarContext?.setSnackbar({
                open: true,
                status: "success",
                message: "Login successful",
              });
              localForage.setItem("userToken", res.data.response.secret);
              dispatch({ type: "SIGN_IN", token: res.data.response.secret });
              return;
            }
            snackbarContext?.setSnackbar({
              open: true,
              status: "error",
              message: "Login failed",
            });
          })
          .catch((e) => {
            console.log(e);
            snackbarContext?.setSnackbar({
              open: true,
              status: "error",
              message: "Login failed",
            });
          });
      },
      signUp: async (data: SignupDetails) => {
        console.log("signup");
        axios
          .post(
            "http://localhost:8888/.netlify/functions/register",
            JSON.stringify(data)
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              snackbarContext?.setSnackbar({
                open: true,
                status: "success",
                message: "Sign up successful",
              });
              return;
            }
            snackbarContext?.setSnackbar({
              open: true,
              status: "error",
              message: "Sign up failed",
            });
          })
          .catch((err) => {
            snackbarContext?.setSnackbar({
              open: true,
              status: "error",
              message: "Sign up failed",
            });
          });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      validateToken: async (token: string) => {
        console.log("validate", token);
        // axios.get("http://localhost:8080/api/validate-token").then((res) => {
        //   console.log(res);
        //   if (res.status === 200) {
        //     console.log(res);
        //     dispatch({ type: "SIGN_IN", token: token });
        //   }
        //   if (res.status === 401) {
        //     console.log("Unauthorised", res);
        //     // dispatch({type: 'SIGN_OUT'})
        //   }
        // });
      },
    }),
    []
  );

  const value = {
    authState: state,
    authDispatch: authDispatch,
  };
  return <AuthContext.Provider value={value} children={props.children} />;
};

export { AuthProvider, AuthContext };
