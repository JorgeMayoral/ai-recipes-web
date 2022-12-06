export interface ListRecipe {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

export interface PageRecipe {
  id: number;
  title: string;
  description: string;
  ingredients: PageIngredient[];
  steps: string[];
  image: string | null;
}

export interface PageIngredient {
  name: string;
  quantity: string;
}
