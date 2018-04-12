import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import moment from 'moment'
import {Button} from 'react-native-elements'
import RequestActions from '../Redux/RequestRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'
import MonthPicker from '../Components/MonthPicker'
import requestStatus from '../Transforms/RequestStatus'
import transformDate from '../Transforms/TransformDate'
import duration from '../Transforms/Duration'

// Styles
import styles from './Styles/RequestListScreenAdminStyles'

class RequestListScreenAdmin extends Component {
  componentDidMount () {
    const {token, getRequests, changeRequestMonth,
      changeRequestYear} = this.props

    changeRequestMonth(moment().month() + 1)
    changeRequestYear(moment().year())
    getRequests(token, moment().month() + 1, moment().year())
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
      title: `${request.name} (${requestStatus(request.status)}) ` +
        `- ${request.division.name}`,
      subtitle: `${transformDate(request.startTime)} ` +
      `(${duration(request.startTime, request.endTime)} jam), ` +
        `di ${request.location.name}`
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
              : <DataList
                data={transformedRequests}
                onPress={(id) =>
                  this.props.navigation.navigate('RequestScreenAdmin', {id})} />
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
