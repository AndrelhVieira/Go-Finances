import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Props } from "./interface";

import { Container, Category, Icon } from "./styles";

const CategorySelectButton = ({ title, onPress }: Props) => {
  return (
    <GestureHandlerRootView>
      <Container onPress={onPress}>
        <Category>{title}</Category>
        <Icon name="chevron-down" />
      </Container>
    </GestureHandlerRootView>
  );
};

export default CategorySelectButton;
