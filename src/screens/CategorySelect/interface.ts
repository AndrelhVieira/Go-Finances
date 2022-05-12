export interface CategoryProps {
  isActive: boolean;
}

export interface Category {
  key: string;
  name: string;
}

export interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}
