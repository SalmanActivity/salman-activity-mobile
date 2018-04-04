import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import moment from 'moment'
import {Button} from 'react-native-elements'
import RequestActions from '../Redux/RequestRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'
import MonthPicker from '../Components/MonthPicker'

// Styles
import styles from './Styles/RequestListScreenAdminStyles'

class RequestListScreenAdmin extends Component {
  componentDidMount () {
    const {token, getRequests, changeRequestMonth,
      changeRequestYear} = this.props

    changeRequestMonth(moment().month())
    changeRequestYear(moment().year())
    getRequests(token, moment().month(), moment().year())
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
    const {token, getRequests, request} = this.props
    const {month, year} = request

    getRequests(token, month, year)
  }

  render () {
    const {request} = this.props
    const {requests, fetchingRequests, fetchingRequestsError} = request

    const transformedRequests = requests.map(request => ({
      id: request.id,
      title: `${request.name} (${request.status}) - ${request.division.name}`,
      subtitle: `${request.startTime} - ${request.endTime}`
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

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

          {fetchingRequests
            ? <ActivityIndicator />
            : (
              fetchingRequestsError
              ? <Text style={styles.error}>{fetchingRequestsError}</Text>
              : <DataList data={transformedRequests} />
            )
          }
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

export default connect(mapStateToProps,
  mapDispatchToProps)(RequestListScreenAdmin)
