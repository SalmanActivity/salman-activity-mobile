import React, {Component} from 'react'
import {FlatList, View} from 'react-native'
import {List, ListItem, Text} from 'react-native-elements'
import PropTypes from 'prop-types'

import styles from './Styles/DataListStyles'

export default class DataList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderRow (item) {
    return (
      <ListItem
        title={item.title}
        subtitle={item.subtitle} />
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
      <List>
        <FlatList
          data={data}
          renderItem={({item}) => this.renderRow(item)}
          keyExtractor={item => item.id}
        />
      </List>
    )
  }
}
