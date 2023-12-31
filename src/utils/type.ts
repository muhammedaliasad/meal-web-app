type MealContextState = {
  categories: any[]; // You might want to replace 'any' with the actual type of categories
  categoryLoading: boolean;
  categoryError: boolean;
  categoryMeals: any[]; // Replace 'any' with the actual type
  categoryMealsLoading: boolean;
  categoryMealsError: boolean;
  meals: any[]; // Replace 'any' with the actual type
  mealsLoading: boolean;
  mealsError: boolean;
  meal: any; // Replace 'any' with the actual type
  mealLoading: boolean;
  mealError: boolean;
};

type MealContextActions = {
  dispatch: React.Dispatch<any>; // Replace 'any' with the actual action type
  startFetchCategories: (dispatch: React.Dispatch<any>) => void;
  // Add other action functions as needed
};
