export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: {
    [key: string]: string;
  };
  steps: string[];
  keywords: {
    course: string;
    cuisine: string;
    diet: string;
    allergies: string;
    cookingTime: string;
    occasion: string;
    skillLevel: string;
    calories: string;
    rating: string;
  };
}
