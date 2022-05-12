interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export interface Props {
  data: TransactionCardProps;
}

export interface TransactionProps {
  type: "positive" | "negative";
}
