interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

export interface Props {
  data: TransactionCardProps;
}

export interface TransactionProps {
  type: "positive" | "negative";
}
