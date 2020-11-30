import { TYPES } from "../../../constants/actions/categories";

const initialState = {
    listCategories: [],
    isLoading: true,
    isError: false,
    error: {}
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case TYPES.FETCH_DATA_CATEGORIES_LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false,
                error: {}
            };
        case TYPES.FETCH_DATA_CATEGORIES_SUCCESS:
            return {
                ...state,
                listCategories: payload.data.data.payload,
                isLoading: false,
                isError: false,
                error: {}
            };
        case TYPES.FETCH_DATA_CATEGORIES_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: payload.error
            };
        default:
            return { ...state };
    }
}
