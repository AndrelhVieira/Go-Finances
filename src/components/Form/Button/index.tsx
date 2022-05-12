import React from "react";
import { Props } from "./interface";

import { Container, Title } from "./styles";

const Button = ({ title, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
