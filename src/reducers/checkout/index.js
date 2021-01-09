import { combineReducers } from "redux";

import fetchShippingFee from './fetchShippingFee'

export const checkout = combineReducers({
    fetchShippingFee
});
