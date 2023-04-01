export interface IProduct {
  _id: string;
  price: string;
  picture: string;
  color: string;
  name: string;
  about: string;
}


export interface IBasketProduct {
  product: IProduct;
  count: number;
}