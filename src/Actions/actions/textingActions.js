import {
  TEXTING_SET_USER,
  TEXTING_CONNECTED_USER,
  TEXTING_LOAD_MESSAGES,
  TEXTING_CLEAR_MESSAGES
} from '../constants'

export const setUser = (user) => ({
  type: TEXTING_SET_USER,
  payload: user
})

export const setConnectedUser = (user) => ({
  type: TEXTING_CONNECTED_USER,
  payload: user
})

export const loadMessages = (messages) => ({
  type: TEXTING_LOAD_MESSAGES,
  payload: messages
})

export const clearMessages = () => ({
  type: TEXTING_CLEAR_MESSAGES,
  payload: ''
})