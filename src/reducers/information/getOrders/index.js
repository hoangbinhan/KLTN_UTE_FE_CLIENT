import { TYPES } from "../../../constants/actions/information";

const initialState = {
  listOrders: [],
  isLoading: true,
  isError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.GET_ORDERS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.GET_ORDERS_SUCCESS:
      return {
        ...state,
        listOrders: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.GET_ORDERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    default:
      return { ...state };
  }
}
