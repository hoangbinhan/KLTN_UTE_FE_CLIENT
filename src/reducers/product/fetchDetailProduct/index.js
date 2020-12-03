import { TYPES } from "../../../constants/actions/product";

const initialState = {
  detailProduct: {},
  isLoading: true,
  isError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.FETCH_DETAIL_PRODUCT_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        detailProduct: payload.data.data.payload,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.FETCH_DETAIL_PRODUCT_ERROR:
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
