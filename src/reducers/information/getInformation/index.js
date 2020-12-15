import { TYPES } from "../../../constants/actions/information";

const initialState = {
  information: {},
  isLoading: true,
  isError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.GET_INFORMATION_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
        error: {},
      };
    case TYPES.GET_INFORMATION_SUCCESS:
      return {
        ...state,
        information: payload.data,
        isLoading: false,
        isError: false,
        error: {},
      };
    case TYPES.GET_INFORMATION_ERROR:
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
