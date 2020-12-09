import { TYPES } from "../../../constants/actions/user";

const initialState = {
  cart: {},
  isLoading: true,
  isError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.GET_CART_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.GET_CART_SUCCESS:
      return {
        ...state,
        cart: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.GET_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case TYPES.CLEAR_OLD_DATA:
      return {
        ...state,
        cart: {},
        isLoading: false,
        isError: false,
        error: {},
      };
    default:
      return { ...state };
  }
}
