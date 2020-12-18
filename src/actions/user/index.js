// types
import {
  TYPES
} from "../../constants/actions/user";
// others
import CONSTANTS from "../../constants";
import request from "../../utils/request";

export const login = ({
  params = {},
  data = {},
  cbSuccess,
  cbError
} = {}) => {
  return request({
    url: CONSTANTS.ENDPOINTS.LOGIN,
    method: "POST",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.LOGIN_LOADING,
    SUCCESS_ACTION: TYPES.LOGIN_SUCCESS,
    ERROR_ACTION: TYPES.LOGIN_ERROR,
  });
};

export const loginWithThirdParty = ({
  params = {},
  data = {},
  cbSuccess,
  cbError
} = {}) => {
  return request({
    url: CONSTANTS.ENDPOINTS.LOGIN_WITH_THIRD_PARTY,
    method: "POST",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.LOGIN_WITH_THIRD_PARTY_LOADING,
    SUCCESS_ACTION: TYPES.LOGIN_WITH_THIRD_PARTY_SUCCESS,
    ERROR_ACTION: TYPES.LOGIN_WITH_THIRD_PARTY_ERROR,
  });
};

export const register = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: CONSTANTS.ENDPOINTS.REGISTER,
    method: "POST",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.REGISTER_LOADING,
    SUCCESS_ACTION: TYPES.REGISTER_SUCCESS,
    ERROR_ACTION: TYPES.REGISTER_ERROR,
  });
};

export const forgotPassword = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: CONSTANTS.ENDPOINTS.FORGOT_PASSWORD,
    method: "POST",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.FORGOT_PASSWORD_LOADING,
    SUCCESS_ACTION: TYPES.FORGOT_PASSWORD_SUCCESS,
    ERROR_ACTION: TYPES.FORGOT_PASSWORD_ERROR,
  });
};

export const updatePassword = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: CONSTANTS.ENDPOINTS.UPDATE_PASSWORD,
    method: "PUT",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.UPDATE_PASSWORD_LOADING,
    SUCCESS_ACTION: TYPES.UPDATE_PASSWORD_SUCCESS,
    ERROR_ACTION: TYPES.UPDATE_PASSWORD_ERROR,
  });
};

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

export const checkOut = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.CHECKOUT}`,
    method: "POST",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.CHECKOUT_LOADING,
    SUCCESS_ACTION: TYPES.CHECKOUT_SUCCESS,
    ERROR_ACTION: TYPES.CHECKOUT_ERROR,
  });
};

export const rating = ({
  params = {},
  data = {},
  cbSuccess,
  cbError
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.RATING}`,
    method: "POST",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.RATING_LOADING,
    SUCCESS_ACTION: TYPES.RATING_SUCCESS,
    ERROR_ACTION: TYPES.RATING_ERROR,
  });
};

export const cartCheckoutComplete = (data) => (dispatch) => {
  dispatch({
    type: TYPES.CART_CHECKOUT_COMPLETE,
    payload: data,
  });
};

export const clearOldDate = () => (dispatch) =>
  dispatch({
    type: TYPES.CLEAR_OLD_DATA,
  });

export const clearOldDataCheckoutComplete = () => (dispatch) =>
  dispatch({
    type: TYPES.CLEAR_OLD_DATA_CHECKOUT_COMPLETE,
  });