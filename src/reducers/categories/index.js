import {
    combineReducers
} from 'redux'

import fetchDataCategories from './fetchDataCategories'

export const categories = combineReducers({
    fetchDataCategories
});