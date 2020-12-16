import { TYPES } from "../../../constants/actions/information";

const initialState = {
  detail: {},
  isLoading: true,
  isError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.GET_DETAIL_ORDER_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.GET_DETAIL_ORDER_SUCCESS:
      return {
        ...state,
        detail: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.GET_DETAIL_ORDER_ERROR:
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
