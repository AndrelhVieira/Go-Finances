import React from "react";

import "intl";

import "intl/locale-data/jsonp/pt-BR";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { Routes } from "./src/routes";

import { StatusBar } from "react-native";

import { AuthProvider } from "./src/hooks/auth";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
