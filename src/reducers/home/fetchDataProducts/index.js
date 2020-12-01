import { TYPES } from "../../../constants/actions/home";

const initialState = {
  listProducts: [],
  isLoading: true,
  isError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.FETCH_DATA_PRODUCTS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_PRODUCTS_SUCCESS:
      return {
        ...state,
        listProducts: payload.data.data.payload,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DATA_PRODUCTS_ERROR:
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
