import { TYPES } from "../../../constants/actions/user";

const initialState = {
  isSuccess: false,
  isLoading: true,
  isError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.RATING_LOADING:
      return {
        ...state,
        isSuccess: false,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.RATING_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.RATING_ERROR:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    default:
      return { ...state };
  }
}
