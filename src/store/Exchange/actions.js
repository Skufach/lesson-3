import * as types from './types'

export const changeNumber = value => ({
  type: types.CHANGE_NUMBER,
  payload: {
    value,
  },
})

export const resetState = () => ({
  type: types.RESET,
})

export const start = () => ({
  type: types.START,
})
export const done = () => ({
  type: types.DONE,
})
export const failure = () => ({
  type: types.FAILURE,
})
