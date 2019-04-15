import { push } from 'connected-react-router'

import { routes } from '../../routes'
import * as actions from './actions'
import { getNumberValue } from './selectors'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const signIn = () => async (dispatch, getState) => {
  dispatch(actions.start())

  try {
    const number = getNumberValue(getState())
    const res = await fetch(
      `https://my-json-server.typicode.com/IgorAntonov/confirmation/number?${number}`,
    )
    const { status } = await res.json()
    if (status === 'OK') {
      dispatch(actions.done())
    } else {
      throw new Error('error')
    }

    await delay(1000)

    dispatch(actions.resetState())
    dispatch(push(routes.CONFIRM))
  } catch (e) {
    dispatch(actions.failure())
  }
}
