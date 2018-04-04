import React, {Component} from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import ModalSelector from 'react-native-modal-selector'

import styles from './Styles/MonthPickerStyles'

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const YEAR_START = 2011
const YEARS = Array.from({length: moment().year() - YEAR_START + 1},
  (x, i) => i + YEAR_START)

export default class MonthSelector extends Component {
  static propTypes = {
    style: PropTypes.object,
    onChangeMonth: PropTypes.func,
    onChangeYear: PropTypes.func
  }

  render () {
    const {style, onChangeMonth, onChangeYear} = this.props

    return (
      <View style={[styles.root, style]}>
        <ModalSelector
          data={MONTHS}
          keyExtractor={month => month}
          labelExtractor={month => moment.months(month)}
          initValue={moment.months(moment().month())}
          onChange={onChangeMonth}
          style={styles.month}
        />

        <View style={styles.separator} />

        <ModalSelector
          data={YEARS}
          keyExtractor={year => year}
          labelExtractor={year => year.toString()}
          initValue={moment().year().toString()}
          onChange={onChangeYear}
          style={styles.year}
        />
      </View>
    )
  }
}
