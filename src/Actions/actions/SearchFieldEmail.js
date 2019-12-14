import { CHANGE_SEARCH_FIELD_EMAIL } from '../constants'

export const setEmail = (searchField) => ({
    type: CHANGE_SEARCH_FIELD_EMAIL,
    payload: searchField
});