interface Dish {
  id: number;
  name: string;
  desc: string;
  price: number;
  category: string;
  img: string;
}

declare module "~/utils/data" {
  export const DISHES: Dish[];
  export const Additions: Dish[];
  export const Drinks: Dish[];
}
