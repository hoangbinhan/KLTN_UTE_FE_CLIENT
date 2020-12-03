// types
import { TYPES } from "../../constants/actions/product";
// others
import CONSTANTS from "../../constants";
import request from "../../utils/request";

export const fetchDetailProduct = ({
  params = {},
  data = {},
  cbSuccess,
} = {}) => {
  return request({
    url: `${CONSTANTS.ENDPOINTS.DETAIL_PRODUCT}/${params.id}`,
    method: "GET",
    cbSuccess,
    params,
    payload: data,
    LOADING_ACTION: TYPES.FETCH_DETAIL_PRODUCT_LOADING,
    SUCCESS_ACTION: TYPES.FETCH_DETAIL_PRODUCT_SUCCESS,
    ERROR_ACTION: TYPES.FETCH_DETAIL_PRODUCT_ERROR,
  });
};
