import { combineReducers } from "redux";

import getCart from "./getCart";
import updateCart from "./updateCart";
import deleteCart from "./deleteCart";
import addToCart from "./addToCart";
import cartCheckoutComplete from "./cartCheckoutComplete";
import rating from "./rating";

export const user = combineReducers({
  getCart,
  updateCart,
  deleteCart,
  addToCart,
  cartCheckoutComplete,
  rating,
});
