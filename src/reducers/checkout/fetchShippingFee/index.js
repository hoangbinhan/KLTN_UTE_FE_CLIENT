import { TYPES } from "../../../constants/actions/checkout";

const initialState = {
  cost: ''
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.GET_SHIIPING_FEE:
      return {
        ...state,
        cost: payload
      };
    default:
      return { ...state };
  }
}
