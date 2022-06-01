import React from "react";

import "intl";

import "intl/locale-data/jsonp/pt-BR";

import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme";

import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./src/routes/app.routes";

import SignIn from "./src/screens/SignIn";

import { StatusBar } from "react-native";

import { AuthProvider } from "./src/hooks/auth";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          {/* <AppRoutes /> */}
          <SignIn />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
