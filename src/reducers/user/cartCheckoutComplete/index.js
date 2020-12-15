import {
    TYPES
} from "../../../constants/actions/user";

const initialState = {
    infoCheckoutComplete: {},
};

export default function (state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case TYPES.CART_CHECKOUT_COMPLETE:
            return {
                ...state,
                infoCheckoutComplete: {
                    ...payload
                }
            };
        case TYPES.CLEAR_OLD_DATA_CHECKOUT_COMPLETE:
            return {
                ...state,
                infoCheckoutComplete: {}
            };
        default:
            return {
                ...state
            };
    }
}