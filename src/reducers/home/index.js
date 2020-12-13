import { combineReducers } from "redux";

import fetchDataCategories from "./fetchDataCategories";
import fetchDataProducts from "./fetchDataProducts";
import searchDataProducts from "./searchDataProducts";

export const home = combineReducers({
  fetchDataCategories,
  fetchDataProducts,
  searchDataProducts,
});
