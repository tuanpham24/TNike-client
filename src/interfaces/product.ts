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
  sale_off: Boolean;
}

export interface SaleOffProduct {
  product: string;
  percent: number;
  startSale: Date;
  endSale: Date;
}

export interface ProductDetail {
  product: Product;
  saleOffInfo: SaleOffProduct;
}
