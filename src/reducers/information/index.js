import { combineReducers } from "redux";
import getInformation from "./getInformation";
import getOrders from "./getOrders";

export const information = combineReducers({
  getInformation,
  getOrders,
});
