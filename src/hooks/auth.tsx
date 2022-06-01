import React, { createContext, useContext } from "react";

import * as AuthSession from "expo-auth-session";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}

interface AuthorizationResponse {
  params: {
    acess_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: "123",
    name: "André",
    email: "amdasksad",
  };

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "379327112324-dlpvoiqi7kja1kstt81g0akaetnhef7l.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@andreluizvieira/gofinances";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      console.log(type);
      console.log(params);

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.acess_token}`
        );

        const userInfo = await response.json();

        console.log(userInfo);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };