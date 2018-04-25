import React, {Component} from 'react'
import {FlatList, View, SectionList} from 'react-native'
import {List, ListItem, Text} from 'react-native-elements'
import PropTypes from 'prop-types'
import Accordion from 'react-native-collapsible/Accordion';

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
    const {data} = this.props;
    const dates_duplicate = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].status == "accepted") 
        dates_duplicate.push(data[i].start_date);
    }

    const dates = Array.from(new Set(dates_duplicate));

    return dates;
  }

  getSect () {
    const dates = this.getDates().sort();
    const {data} = this.props;
    const sect = [];

    for (let i = 0; i < dates.length; i++) {
      const sect_data = [];

      for (let j = 0; j < data.length; j++) {
        if (data[j].status === "accepted" && data[j].start_date === dates[i]) {
          sect_data.push(data[j].title);
        }
      }
      

      sect.push({title: "Tanggal " + dates[i], data: sect_data, id: i});
    }

    return sect;
  }

  _renderSectionTitle(section) {
    return (
      <View>
        
      </View>
    );
  }

  _renderHeader(section) {
    return (
      <View>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View>
        <Text>{section.data}</Text>
      </View>
    );
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
