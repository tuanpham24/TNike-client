export interface Product {
  _id: string;
  name: string;
  type: {
    _id: string;
    name: string;
  };
  description: string;
  image_path: string;
  size: Array<string>;
  purchase_price: number;
  price: number;
  sold_quantity: number;
  stars: Array<number>;
}
