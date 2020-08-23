export interface SignupDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInDetails {
  email: string;
  password: string;
}

export type AuthAction = "RESTORE_TOKEN" | "SIGN_IN" | "SIGN_OUT";

export interface AuthDispatch {
  signIn: (x: any) => Promise<void>;
  signOut: () => void;
  signUp: (x: SignupDetails) => Promise<void>;
}

export interface AuthState {
  isLoading: boolean;
  isSignout: false;
  userToken: string | null;
}

export interface AuthContextState {
  authState: AuthState;
  authDispatch: AuthDispatch;
}
