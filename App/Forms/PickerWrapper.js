import React from 'react'
import { Picker } from 'react-native'

const PickerWrapper = (props) => {
  const { input: { onChange, value, ...inputProps }, data,
  ...pickerProps } = props

  return (
    <Picker
      selectedValue={value}
      onValueChange={value => {
        requestAnimationFrame(() => {
          onChange(value)
        })
      }}
      {...inputProps}
      {...pickerProps}
    >
      {data.map(item => (
        <Picker.Item label={item.label} value={item.value} key={item.value} />
      ))}
    </Picker>
  )
}

export default PickerWrapper
