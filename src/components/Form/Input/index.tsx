import React from "react";

import { Props } from "./interface";

import { Container } from "./styles";

const Input = ({ ...rest }: Props) => {
  return <Container {...rest}></Container>;
};

export default Input;
