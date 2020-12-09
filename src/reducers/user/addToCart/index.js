import { TYPES } from "../../../constants/actions/user";

const initialState = {
  isAddSuccess: false,
  isAddLoading: true,
  isAddError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.ADD_TO_CART_LOADING:
      return {
        ...state,
        isAddSuccess: false,
        isAddLoading: true,
        isAddError: false,
        error: {},
      };
    case TYPES.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        isAddSuccess: true,
        isAddLoading: false,
        isAddError: false,
        error: {},
      };
    case TYPES.ADD_TO_CART_ERROR:
      return {
        ...state,
        isAddSuccess: false,
        isAddLoading: false,
        isAddError: true,
        error: payload.error,
      };
    default:
      return { ...state };
  }
}
