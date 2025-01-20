export interface Kit {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  mainImage: string;
  detailImage: string;
}

export interface StarRatingProps {
  value: number;
}
