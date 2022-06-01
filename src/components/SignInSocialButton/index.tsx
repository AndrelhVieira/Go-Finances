import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Props } from "./interface";

import { Button, ImageContainer, Text } from "./styles";

export default function SignInSocialButton({
  title,
  svg: Svg,
  ...rest
}: Props) {
  return (
    <GestureHandlerRootView>
      <Button {...rest}>
        <ImageContainer>
          <Svg />
        </ImageContainer>

        <Text>{title}</Text>
      </Button>
    </GestureHandlerRootView>
  );
}
