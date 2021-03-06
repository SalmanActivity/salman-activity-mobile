import React from 'react'
import {TextInput} from 'react-native'

const TextInputWrapper = (props) => {
  const {input, ...inputProps} = props

  return (
    <TextInput
      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
    />
  )
}

export default TextInputWrapper
