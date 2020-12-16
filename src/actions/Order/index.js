// types
import {
    TYPES
} from "../../constants/actions/order";
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
        LOADING_ACTION: TYPES.GET_DETAIL_ORDER_LOADING,
        SUCCESS_ACTION: TYPES.GET_DETAIL_ORDER_SUCCESS,
        ERROR_ACTION: TYPES.GET_DETAIL_ORDER_ERROR,
    });
};