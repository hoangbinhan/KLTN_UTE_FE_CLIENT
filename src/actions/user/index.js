// types
import { TYPES } from "../../constants/actions/user";
// others
import CONSTANTS from "../../constants";
import request from "../../utils/request";

export const addToCart = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: CONSTANTS.ENDPOINTS.ADD_TO_CART,
    method: "POST",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.ADD_TO_CART_LOADING,
    SUCCESS_ACTION: TYPES.ADD_TO_CART_SUCCESS,
    ERROR_ACTION: TYPES.ADD_TO_CART_ERROR,
  });
};
