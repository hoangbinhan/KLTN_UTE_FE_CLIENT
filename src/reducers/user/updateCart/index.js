import { TYPES } from "../../../constants/actions/user";

const initialState = {
  isUpdateSuccess: false,
  isUpdateLoading: true,
  isUpdateError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.UPDATE_CART_LOADING:
      return {
        ...state,
        isUpdateSuccess: false,
        isUpdateLoading: true,
        isUpdateError: false,
        error: {},
      };
    case TYPES.UPDATE_CART_SUCCESS:
      return {
        ...state,
        isUpdateSuccess: true,
        isUpdateLoading: false,
        isUpdateError: false,
        error: {},
      };
    case TYPES.UPDATE_CART_ERROR:
      return {
        ...state,
        isUpdateSuccess: false,
        isUpdateLoading: false,
        isUpdateError: true,
        error: payload.error,
      };
    default:
      return { ...state };
  }
}
