import React from "react";
import { Props } from "./interface";

import { Container, Category, Icon } from "./styles";

const CategorySelectButton = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
