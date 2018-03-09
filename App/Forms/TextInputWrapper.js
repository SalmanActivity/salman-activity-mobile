import React from 'react'
import {TextInput} from 'react-native'

import {Colors} from '../Themes'
import styles from './Styles/TextInputWrapperStyles'

const TextInputWrapper = (props) => {
  const {input, ...inputProps} = props

  return (
    <TextInput
      style={styles.default}
      underlineColorAndroid={Colors.bloodOrange}
      placeholderTextColor={Colors.cloud}
      selectionColor={Colors.bloodOrange}

      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
    />
  )
}

export default TextInputWrapper
