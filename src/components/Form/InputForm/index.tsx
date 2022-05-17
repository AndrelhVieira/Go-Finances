import React from "react";

import Input from "../Input";

import { Props } from "./interface";

import { Container, Error } from "./styles";

import { Controller } from "react-hook-form";

const InputForm = ({ control, name, error, ...rest }: Props) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error ? <Error>{error}</Error> : null}
    </Container>
  );
};

export default InputForm;
