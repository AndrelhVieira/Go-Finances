export interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

export interface TypeProps {
  type: "up" | "down" | "total";
}
