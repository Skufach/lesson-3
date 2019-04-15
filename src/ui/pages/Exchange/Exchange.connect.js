import { connect } from 'react-redux'

import { getNumberValue, getStatus } from '@store/signIn/selectors'
import { changeNumber } from '@store/signIn/actions'
import { signIn } from '@store/signIn/thunks'
import { SignIn } from './SignIn'

const mapStateToProps = state => ({
  value: getNumberValue(state),
  status: getStatus(state),
})

export const SignInContainer = connect(
  mapStateToProps,
  { changeNumber, signIn },
)(SignIn)
