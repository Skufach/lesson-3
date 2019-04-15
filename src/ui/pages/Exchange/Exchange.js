import React from 'react'

import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import {
  Header,
  ButtonAccent,
  SelectField,
  CheckboxWithText,
  TextField,
} from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export class Exchange extends React.Component {
  constructor(props) {
    super(props)
    this.handleRubChange = this.handleRubChange.bind(this)
    this.handleGbpChange = this.handleGbpChange.bind(this)

    this.state = {
      rate: 'r',
      convertValue: '',
    }
  }

  handleRubChange(convertValue) {
    this.setState({ convertValue, rate: 'r' })
  }

  handleGbpChange(convertValue) {
    this.setState({ convertValue, rate: 'g' })
  }

  render() {
    const rate = this.state.rate
    const convertValue = this.state.convertValue

    const rubValue =
      rate === 'g'
        ? String(convertValue === '' ? 0 : parseInt(convertValue) + 84)
        : String(convertValue)
    const gbpValue =
      rate === 'r'
        ? String(convertValue === '' ? 0 : parseInt(convertValue) - 84)
        : String(convertValue)

    return (
      <PageTemplate>
        <Header icon="back" />
        <Flex1>
          <Wrapper>
            <SelectField
              label="Страна 1"
              value="Россия"
              onPress={() => undefined}
            />
            <SelectField
              label="Страна 2"
              value="Англия"
              onPress={() => undefined}
            />
            <Divider />
            <HBox />
            <TextField
              rate="r"
              label="Российский рубль (RUB)"
              onChange={this.handleRubChange}
              tip="Текст подсказки к полю"
              value={rubValue}
              endAdornment="₽"
            />
            <HBox />
            <TextField
              rate="g"
              label="Фунт стерлингов (GBP)"
              onChange={this.handleGbpChange}
              value={gbpValue}
              tip="Текст подсказки к полю"
              endAdornment="£"
            />
            <HBox />
            <DeliveryTime
              fromValue="10:00"
              toValue="20:00"
              fromAction={() => undefined}
              toAction={() => undefined}
              tip="Выберите время доставки"
            />
            <HBox />
            <CheckboxWithText onPress={() => undefined}>
              Со всеми условиями согласен, возможно вторая строка
            </CheckboxWithText>
          </Wrapper>
        </Flex1>
        <Wrapper>
          <ButtonAccent onPress={() => undefined}>Отправить</ButtonAccent>
        </Wrapper>
      </PageTemplate>
    )
  }
}
