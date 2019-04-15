import React from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconLoader, IconSuccess, FieldContainer } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment } from '@ui/molecules'
import { styled, theme } from '@ui/theme'

const TextFieldContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  height: 40px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 44px;
  }
`

export class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
    }
  }

  setFocused(value) {
    this.setState({ focused: value })
  }

  handleFocus = e => {
    const onFocus = this.props.onFocus
    if (onFocus) {
      onFocus(e)
    }
    this.setFocused(true)
  }
  handleBlur = e => {
    const onBlur = this.props.onBlur
    if (onBlur) {
      onBlur(e)
    }
    this.setFocused(false)
  }

  render() {
    const startAdornment = this.props.startAdornment
    const endAdornment = this.props.endAdornment
    const status = this.props.status
    const disabled = this.props.disabled
    const placeholder = this.props.placeholder
    const label = this.props.label
    const error = this.props.error
    const value = this.props.value
    const tip = this.props.tip
    const valid = this.props.valid
    const onChange = this.props.onChange
    const name = this.props.name
    const focused = this.state.focused

    return (
      <FieldContainer>
        <FormLabel valid={valid}>{label}</FormLabel>
        <HBox height={theme.paddings.half} />
        <TextFieldContainer focused={focused} error={error}>
          {startAdornment ? (
            <FormAdornment>{startAdornment}</FormAdornment>
          ) : (
            <VBox />
          )}
          <StyledInput
            name={name}
            placeholder={placeholder ? placeholder : ''}
            disabled={disabled}
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <FormAdornment>
            {status === 'loading' ? (
              <IconLoader />
            ) : status === 'success' ? (
              <IconSuccess />
            ) : endAdornment ? (
              endAdornment
            ) : null}
          </FormAdornment>
        </TextFieldContainer>
        <HBox height={theme.paddings.half} />
        {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
      </FieldContainer>
    )
  }
}

TextField.propTypes = {
  name: PropTypes.string,
  status: PropTypes.oneOf(['loading', 'success']),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
