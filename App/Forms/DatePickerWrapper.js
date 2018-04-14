import React from 'react'
import DatePicker from 'react-native-datepicker'

const DatePickerWrapper = (props) => {
  const {input, ...inputProps} = props

  return (
    <DatePicker
      {...inputProps}
      date={input.value}
      format='DD-MM-YYYY'
      onDateChange={date => input.onChange(date)}
    />
  )
}

export default DatePickerWrapper
