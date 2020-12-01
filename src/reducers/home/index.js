import { combineReducers } from "redux";

import fetchDataCategories from "./fetchDataCategories";
import fetchDataProducts from "./fetchDataProducts";

export const home = combineReducers({
  fetchDataCategories,
  fetchDataProducts,
});
