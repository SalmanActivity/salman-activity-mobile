import React, { Component } from 'react'
import { ScrollView, Text, View, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'
import moment from 'moment'
import {Button} from 'react-native-elements'
import {AuthSelectors} from '../Redux/AuthRedux'
import RequestActions from '../Redux/RequestRedux'
import MonthPicker from '../Components/MonthPicker'
import ScheduleList from '../Components/ScheduleList'

// Styles
import styles from './Styles/HomeScreenStyles'

class HomeScreen extends Component {
  componentDidMount () {
    const {getRequests, changeRequestMonth,
      changeRequestYear} = this.props

    changeRequestMonth(moment().month() + 1)
    changeRequestYear(moment().year())
    getRequests(null, moment().month() + 1, moment().year())
  }

  onChangeMonth (month) {
    const {changeRequestMonth} = this.props
    changeRequestMonth(month)
  }

  onChangeYear (year) {
    const {changeRequestYear} = this.props
    changeRequestYear(year)
  }

  onRefresh () {
    const {getRequests, request} = this.props
    const {month, year} = request

    getRequests(null, month, year)
  }

  render () {
    const {request} = this.props
    const { requests, fetchingRequests, fetchingRequestsError } = request

    const transformedRequests = requests.map(request => ({
      id: request.id,
      title: `${request.name} | ${request.location.name}, ` +
        `${moment(request.startTime).format('HH.mm')}` +
        `-${moment(request.endTime).format('HH.mm')},`,
      status: request.status,
      startDate: moment(request.startTime).format('D')
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.scheduleContainer}>
            <View style={styles.monthPickerContainer}>
              <MonthPicker
                onChangeMonth={::this.onChangeMonth}
                onChangeYear={::this.onChangeYear}
                style={styles.monthPicker}
              />

              <Button
                title='Refresh'
                buttonStyle={styles.refreshButton}
                onPress={::this.onRefresh}
                loading={fetchingRequests}
                disabled={fetchingRequests}
              />
            </View>

            <View style={styles.sectionList}>
              {fetchingRequests
                ? <ActivityIndicator />
                : (
                  fetchingRequestsError
                  ? <Text style={styles.error}>{fetchingRequestsError}</Text>
                  : <ScheduleList data={transformedRequests} />
                )
              }
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: AuthSelectors.getToken(state),
  request: state.request
})

const mapDispatchToProps = {
  getRequests: RequestActions.getRequests,
  changeRequestMonth: RequestActions.changeRequestMonth,
  changeRequestYear: RequestActions.changeRequestYear
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
