import React, {Component} from 'react'
import {FlatList, View} from 'react-native'
import {List, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import styles from './Styles/ContentListStyles'

export default class DataList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderRow (item) {
    return (
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{item}</Text>
      </View>

    )
  }

  render () {
    const {data} = this.props

    if (data.length === 0) {
      return (
        <View style={styles.noDataView}>
          <Text>Tidak ada data</Text>
        </View>
      )
    }

    return (
      <View style={styles.listView}>
        <List>
          <FlatList
            data={data}
            renderItem={({item}) => this.renderRow(item)}
          />
        </List>
      </View>
    )
  }
}
