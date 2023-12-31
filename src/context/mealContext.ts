import React, { createContext, useContext, useEffect, useReducer } from "react";
import { mealReducer } from "./reducers/mealReducer";
import { startFetchCategories } from "../services/mealActions";
import { MealContextProvider } from "./mealContextProvider";
const initialState: any = {
  categories: [],
  categoryLoading: false,
  categoryError: false,
  categoryMeals: [],
  categoryMealsLoading: false,
  categoryMealsError: false,
  meals: [],
  mealsLoading: false,
  mealsError: false,
  meal: [],
  mealLoading: false,
  mealError: false,
};

export const MealProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(mealReducer, initialState);

  useEffect(() => {
    startFetchCategories(dispatch);
  }, []);

  return (
    <MealContextProvider.Provider
      value={{
        ...state,
        dispatch,
        startFetchCategories,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => {
  return useContext(MealContext);
};
