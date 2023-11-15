export interface Product {
  _id: string;
  name: string;
  type: {
    id: string;
    name: string;
  };
  description: string;
  thumbnail: string;
  quantity: number;
  price: number;
  size: Array<number>;
  stars: Array<number>;
}