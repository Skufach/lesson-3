// import React from 'react'
// import PropTypes from 'prop-types'

// import { styled } from '@ui/theme'
// import { Body2 } from '@ui/atoms/Typography'
// import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
// import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
// import { Field, reduxForm } from 'redux-form'
// const Wrapper = styled.div`
//   padding: ${({ theme }) => theme.paddings.main}px;
// `

// export class SignIn extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const {  status, changeNumber, signIn, handleSubmit, pristine, submitting } = this.props

//     console.log( changeNumber)
//     return (
//       <form onSubmit={handleSubmit}>
//         <PageTemplate>
//           <Header title="Ввод номера телефона" />
//           <Divider />
//           <Flex1>
//             <Wrapper>
//               <HBox height={9} />
//               <Body2>На указанный телефон будет выслан код подтверждения</Body2>
//               <HBox height={20} />
//               <Field
//                 name={'phone'}
//                 type={'text'}
//                 changeNumber={changeNumber}
//                 component={props => {
//                   console.log(props)
//                   return (
//                     <TextField
//                       label="Номер телефона"
//                       startAdornment="+7"
//                       placeholder="9XXXXXXXXX"
//                       onChange={changeNumber}
//                       value={props.value}
//                     />
//                   )

//                 }}
//               />
//             </Wrapper>
//             <RequestStatus
//               status={status}
//               loadingMessage="Телефон отправлется"
//               successMessage="Номер успешно отправлен"
//               failureMessage="Произошла неизвестная ошибка"
//             />
//           </Flex1>
//           <Wrapper>
//             <ButtonAccent  onPress={signIn}>Отправить</ButtonAccent>
//           </Wrapper>
//         </PageTemplate>
//       </form>
//     )
//   }
// }

// SignIn =  reduxForm({
//   form: 'contact',
//   // asyncChangeFields: ['phone'],
//   onSubmit: values => {
//     console.log('values', values)
//   },
// })(SignIn)

// SignIn.propTypes = {
//   value: PropTypes.string.isRequired,
//   status: PropTypes.string.isRequired,
//   changeNumber: PropTypes.func.isRequired,
//   signIn: PropTypes.func.isRequired,
// }

import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const SignIn = ({ value, status, changeNumber, signIn }) => {
  console.log(changeNumber)
  return (
    <PageTemplate>
      <Header title="Ввод номера телефона" />
      <Divider />
      <Flex1>
        <Wrapper>
          <HBox height={9} />
          <Body2>На указанный телефон будет выслан код подтверждения</Body2>
          <HBox height={20} />
          <TextField
            label="Номер телефона"
            startAdornment="+7"
            placeholder="9XXXXXXXXX"
            onChange={changeNumber}
            value={value}
          />
        </Wrapper>
        <RequestStatus
          status={status}
          loadingMessage="Телефон отправлется"
          successMessage="Номер успешно отправлен"
          failureMessage="Произошла неизвестная ошибка"
        />
      </Flex1>
      <Wrapper>
        <ButtonAccent onPress={signIn}>Отправить</ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
}

SignIn.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  changeNumber: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
}
