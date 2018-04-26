import React, {Component} from 'react'
import {View} from 'react-native'
import {ListItem, Text} from 'react-native-elements'
import PropTypes from 'prop-types'
import Accordion from 'react-native-collapsible/Accordion'
import ContentList from '../Components/ContentList'

import styles from './Styles/ScheduleListStyles'

export default class ScheduleList extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  }

  renderRow (item) {
    return (
      <ListItem
        title={item.name}
        subtitle={item.location} />
    )
  }

  getDates () {
    const {data} = this.props
    const datesDuplicate = []

    for (let i = 0; i < data.length; i++) {
      if (data[i].status === 'accepted') {
        datesDuplicate.push(data[i].startDate)
      }
    }

    const dates = Array.from(new Set(datesDuplicate))

    return dates
  }

  getSect () {
    const dates = this.getDates().sort()
    const {data} = this.props
    const sect = []

    for (let i = 0; i < dates.length; i++) {
      const sectData = []

      for (let j = 0; j < data.length; j++) {
        if (data[j].status === 'accepted' && data[j].startDate === dates[i]) {
          sectData.push(data[j].title)
        }
      }

      sect.push({title: dates[i], data: sect_data, id: i});
    }

    return sect
  }

  _renderSectionTitle (section) {
    return (
      <View></View>
    );
  }

  _renderHeader (section) {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    )
  }

  _renderContent (section) {
    return (
      <View style={styles.contentView}>
      <Text>Daftar kegiatan :</Text>
        <ContentList data={section.data}/>
      </View>
    )
  }

  render () {
    const {data} = this.props
    const sect_ = this.getSect()

    if (data.length === 0 || sect_.length === 0) {
      return (
        <View style={styles.noDataView}>
          <Text>Tidak ada data</Text>
        </View>
      )
    }

    return (
      <Accordion
        sections={this.getSect()}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    )
  }
}
