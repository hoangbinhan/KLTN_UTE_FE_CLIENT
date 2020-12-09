import { TYPES } from "../../../constants/actions/user";

const initialState = {
  isDeleteSuccess: false,
  isDeleteLoading: true,
  isDeleteError: false,
  error: {},
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.DELETE_CART_LOADING:
      return {
        ...state,
        isDeleteSuccess: false,
        isDeleteLoading: true,
        isDeleteError: false,
        error: {},
      };
    case TYPES.DELETE_CART_SUCCESS:
      return {
        ...state,
        isDeleteSuccess: true,
        isDeleteLoading: false,
        isDeleteError: false,
        error: {},
      };
    case TYPES.DELETE_CART_ERROR:
      return {
        ...state,
        isDeleteSuccess: false,
        isDeleteLoading: false,
        isDeleteError: true,
        error: payload.error,
      };
    default:
      return { ...state };
  }
}
