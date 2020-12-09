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
    url: CONSTANTS.ENDPOINTS.CART,
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

export const getCart = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.CART}`,
    method: "GET",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.GET_CART_LOADING,
    SUCCESS_ACTION: TYPES.GET_CART_SUCCESS,
    ERROR_ACTION: TYPES.GET_CART_ERROR,
  });
};

export const updateCart = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.CART}`,
    method: "PUT",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.UPDATE_CART_LOADING,
    SUCCESS_ACTION: TYPES.UPDATE_CART_SUCCESS,
    ERROR_ACTION: TYPES.UPDATE_CART_ERROR,
  });
};

export const deleteCart = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.CART}`,
    method: "DELETE",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.DELETE_CART_LOADING,
    SUCCESS_ACTION: TYPES.DELETE_CART_SUCCESS,
    ERROR_ACTION: TYPES.DELETE_CART_ERROR,
  });
};

export const clearOldDate = () => (dispatch) => ({
  TYPE: TYPES.CLEAR_OLD_DATA,
});
