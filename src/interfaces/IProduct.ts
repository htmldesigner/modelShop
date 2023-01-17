// export interface IProduct {
//   id: number;
//   product: string;
//   scale: string;
//   price: number;
//   manufacturer: string;
//   in_stock: boolean;
//   rating: number;
//   reviews: number;
//   discount: string;
//   update: string;
// }

export interface ICategory {
  id: number;
  name: string;
  description: string;
}

export interface IProduct {
  id: number;
  product: string;
  scale: string;
  price: number;
  manufacturer: string;
  in_stock: boolean;
  rating: number;
  reviews: number;
  discount: string;
  update: string;
  category_id: number;
}

export interface IRootObject {
  category: ICategory;
  products: IProduct[];
}
