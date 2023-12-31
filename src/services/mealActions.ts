import { Dispatch } from "react";
import axios from "../api/axios";
import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_MEALS_BEGIN,
  FETCH_CATEGORY_MEALS_ERROR,
  FETCH_CATEGORY_MEALS_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  FETCH_MEALS_BEGIN,
  FETCH_MEALS_ERROR,
  FETCH_MEALS_SUCCESS,
  FETCH_SINGLE_MEAL_BEGIN,
  FETCH_SINGLE_MEAL_ERROR,
  FETCH_SINGLE_MEAL_SUCCESS,
} from "../api/routes";

import {
  CATEGORIES_URL,
  MEAL_CATEGORIES_URL,
  MEAL_SINGLE_URL,
  SEARCH_URL,
} from "../utils/constant";

interface Action {
  type: string;
  payload?: any;
}

export const startFetchCategories = async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({ type: FETCH_CATEGORY_BEGIN });
    const response = await axios.get(`${CATEGORIES_URL}`);
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: response.data.categories,
    });
  } catch (error: any) {
    dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message });
  }
};

export const startFetchSingleMeal = async (
  dispatch: Dispatch<Action>,
  id: string
) => {
  try {
    dispatch({ type: FETCH_SINGLE_MEAL_BEGIN });
    const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
    dispatch({
      type: FETCH_SINGLE_MEAL_SUCCESS,
      payload: response.data.meals,
    });
  } catch (error: any) {
    dispatch({ type: FETCH_SINGLE_MEAL_ERROR, payload: error.message });
  }
};

export const startFetchMealByCategory = async (
  dispatch: Dispatch<Action>,
  category: string
) => {
  try {
    dispatch({ type: FETCH_CATEGORY_MEALS_BEGIN });
    const response = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
    dispatch({
      type: FETCH_CATEGORY_MEALS_SUCCESS,
      payload: response.data.meals,
    });
  } catch (error: any) {
    dispatch({ type: FETCH_CATEGORY_MEALS_ERROR, payload: error.message });
  }
};

export const startFetchMealsBySearch = async (
  dispatch: Dispatch<Action>,
  searchTerm: string
) => {
  try {
    dispatch({ type: FETCH_MEALS_BEGIN });
    const response = await axios.get(`${SEARCH_URL}${searchTerm}`);
    dispatch({ type: FETCH_MEALS_SUCCESS, payload: response.data.meals });
  } catch (error: any) {
    dispatch({ type: FETCH_MEALS_ERROR, payload: error.message });
  }
};
