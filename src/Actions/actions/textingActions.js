import {
  TEXTING_SET_USER
} from '../constants'

export const setUser = (user) => ({
  type: TEXTING_SET_USER,
  payload: user
})
