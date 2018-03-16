import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {List, ListItem} from 'react-native-elements'
import PropTypes from 'prop-types'

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
