import { CHANGE_SEARCH_FIELD_PASSWORD } from '../constants'

export const setPassword = (searchField) => ({
    type: CHANGE_SEARCH_FIELD_PASSWORD,
    payload: searchField
});