import { CHANGE_ROUTE } from '../constants';

export const setRoute = (route) => ({
  type: CHANGE_ROUTE,
  payload: route
});