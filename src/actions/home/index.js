// types
import { TYPES } from "../../constants/actions/home";
// others
import CONSTANTS from "../../constants";
import request from "../../utils/request";

export const fetchDataCategories = ({
  params = {},
  data = {},
  cbSuccess,
} = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.CATEGORIES,
    method: "GET",
    cbSuccess,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DATA_CATEGORIES_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_CATEGORIES_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_CATEGORIES_ERROR,
  });

export const fetchDataProducts = ({ params = {}, data = {}, cbSuccess } = {}) =>
  request({
    url: CONSTANTS.ENDPOINTS.PRODUCTS,
    method: "GET",
    cbSuccess,
    params,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DATA_PRODUCTS_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DATA_PRODUCTS_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DATA_PRODUCTS_ERROR,
  });
