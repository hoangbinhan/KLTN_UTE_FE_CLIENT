import {
    combineReducers
} from 'redux'

import fetchDataCategories from './fetchDataCategories'

export const home = combineReducers({
    fetchDataCategories
});