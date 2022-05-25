import React from "react";
import { Props } from "./interface";

import { Container, Title } from "./styles";

const Button = ({ title, onPress, ...rest }: Props) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
