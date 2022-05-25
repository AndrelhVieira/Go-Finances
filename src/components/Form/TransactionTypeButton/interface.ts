import { RectButtonProps } from "react-native-gesture-handler";

export interface IconProps {
  type: "up" | "down";
}

export interface ContainerProps extends IconProps {
  isActive: boolean;
}

export interface Props extends RectButtonProps, IconProps, ContainerProps {
  title: string;
}
