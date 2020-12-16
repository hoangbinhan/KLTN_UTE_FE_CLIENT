import { combineReducers } from "redux";
import getInformation from "./getInformation";
import getOrders from "./getOrders";
import getDetailOrder from "./getDetailOrder";

export const information = combineReducers({
  getInformation,
  getOrders,
  getDetailOrder,
});
