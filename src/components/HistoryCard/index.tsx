import React from "react";
import { Props } from "./interface";

import { Container, Title, Amount } from "./styles";

export default function HistoryCard({ color, title, amount }: Props) {
  return (
    <>
      <Container color={color}>
        <Title>{title}</Title>
        <Amount>{amount}</Amount>
      </Container>
    </>
  );
}
