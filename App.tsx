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

import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // just for clear the storage
  // AsyncStorage.clear();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
