// types
import { TYPES } from "../../constants/actions/information";
// others
import CONSTANTS from "../../constants";
import request from "../../utils/request";

export const getOrders = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.GET_ORDERS}`,
    method: "GET",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.GET_ORDERS_LOADING,
    SUCCESS_ACTION: TYPES.GET_ORDERS_SUCCESS,
    ERROR_ACTION: TYPES.GET_ORDERS_ERROR,
  });
};

export const getInformation = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.INFORMATION}`,
    method: "GET",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.GET_INFORMATION_LOADING,
    SUCCESS_ACTION: TYPES.GET_INFORMATION_SUCCESS,
    ERROR_ACTION: TYPES.GET_INFORMATION_ERROR,
  });
};

export const updateInformation = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.INFORMATION}`,
    method: "PUT",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.UPDATE_INFORMATION_LOADING,
    SUCCESS_ACTION: TYPES.UPDATE_INFORMATION_SUCCESS,
    ERROR_ACTION: TYPES.UPDATE_INFORMATION_ERROR,
  });
};

export const changePassword = ({
  params = {},
  data = {},
  cbSuccess,
  cbError,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.CHANGE_PASSWORD}`,
    method: "PUT",
    cbSuccess,
    cbError,
    params,
    payload: data,
    LOADING_ACTION: TYPES.CHANGE_PASSWORD_LOADING,
    SUCCESS_ACTION: TYPES.CHANGE_PASSWORD_SUCCESS,
    ERROR_ACTION: TYPES.CHANGE_PASSWORD_ERROR,
  });
};
