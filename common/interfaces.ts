export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: {
    [key: string]: string;
  };
  steps: string[];
}
