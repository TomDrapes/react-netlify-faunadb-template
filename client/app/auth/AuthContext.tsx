import React, {
  Dispatch,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { AsyncStorage } from "react-native";

interface SignupDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignInDetails {
  email: string;
  password: string;
}

type AuthAction = "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";

interface AuthDispatch {
  signIn: (x: any) => Promise<void>;
  signOut: () => void;
  signUp: (x: SignupDetails) => Promise<void>;
}

interface AuthState {
  isLoading: boolean;
  isSignout: false;
  userToken: string | null;
}

interface AuthContextState {
  authState: AuthState;
  authDispatch: AuthDispatch;
}

const AuthContext = React.createContext<AuthContextState | undefined>(
  undefined
);

interface Props {
  children: ReactNode;
}
const AuthProvider = (props: Props) => {
  const getToken = async () => {
    return await AsyncStorage.getItem("userToken", (error, result) => {
      if (result) {
        authDispatch.validateToken(result);
      }
    });
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
              AsyncStorage.setItem("userToken", res.data.response.secret);
              // axios.defaults.headers.common["Authorization"] =
              //   "Bearer " + res.data.token;

              // dispatch({ type: "SIGN_IN", token: res.data.token });
            }
          })
          .catch((e) => console.log(e));
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
