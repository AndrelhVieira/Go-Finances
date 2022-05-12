import { TouchableOpacityProps } from "react-native";

export interface IconProps {
  type: "up" | "down";
}

export interface ContainerProps extends IconProps {
  isActive: boolean;
}

export interface Props
  extends TouchableOpacityProps,
    IconProps,
    ContainerProps {
  title: string;
}
