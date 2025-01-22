export type EntireKitProps = IKit[];

export interface IKit {
  id: number;
  category: ICategory;
  productName: string;
  status: string;
  stock: number;
  price: number;
  intro: string;
  content: string;
  createDate: string;
  updateDate: string;
  likes: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface StarRatingProps {
  value: number;
}
