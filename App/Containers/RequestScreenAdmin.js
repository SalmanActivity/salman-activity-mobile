import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import RequestActions from '../Redux/RequestRedux'
import ReportActions from '../Redux/ReportRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import RequestDetail from '../Components/RequestDetail'
import {Button, Card} from 'react-native-elements'
import moment from 'moment'

// Styles
import styles from './Styles/RequestScreenAdminStyles'

class RequestListScreenAdmin extends Component {
  componentDidMount () {
    const {token, getRequest, navigation, getReport} = this.props
    const {state: {params: {id}}} = navigation

    getRequest(token, id)
    getReport(token, id)
  }

  updateRequest (requestData) {
    const {token, updateRequest,
      navigation: {state: {params: {id}}}} = this.props

    updateRequest(token, id, requestData)
  }

  render () {
    const {navigation: {navigate, state: {params: {admin}}},
      request: {request, fetchingRequest, fetchingRequestError,
        updatingRequest, updatingRequestError},
      report: {report, fetchingReport}} = this.props

    const {status, startTime} = request || {}

    return (
      <ScrollView style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingRequest || !request || fetchingReport
            ? <ActivityIndicator />
            : (
              fetchingRequestError
                ? <Text style={styles.error}>{fetchingRequestError}</Text>
                : (
                  <Card>
                    <RequestDetail
                      {...request}
                      reportContent={report ? report.content : null}
                      reportPhoto={report ? report.photo : null}
                    />

                    <View style={styles.separator} />

                    {!admin && !report && status !== 'accepted' &&
                      moment(startTime).isBefore(moment()) && (

                      <Button
                        title='Buat Laporan'
                        buttonStyle={[styles.button, styles.buttonAccept]}
                        onPress={() =>
                          navigate('ActivityReportScreen',
                            {requestId: request.id})}
                      />
                    )}

                    {!!admin && status !== 'accepted' &&
                      moment().isBefore(moment(startTime)) && (

                      <Button
                        title='Setujui'
                        buttonStyle={[styles.button, styles.buttonAccept]}
                        onPress={() => this.updateRequest({status: 'accepted'})}
                        loading={!!updatingRequest}
                        disabled={!!updatingRequest}
                      />
                    )}

                    {!!admin && status !== 'rejected' &&
                      moment().isBefore(moment(startTime)) && (

                      <Button
                        title='Tolak'
                        buttonStyle={[styles.button, styles.buttonReject]}
                        onPress={() => this.updateRequest({status: 'rejected'})}
                        loading={!!updatingRequest}
                        disabled={!!updatingRequest}
                      />
                    )}

                    {!!updatingRequestError &&
                      (<Text style={styles.error}>{updatingRequestError}</Text>)}
                  </Card>
                )
            )
          }
        </ScrollView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  token: AuthSelectors.getToken(state),
  request: state.request,
  report: state.report
})

const mapDispatchToProps = {
  getRequest: RequestActions.getRequest,
  updateRequest: RequestActions.updateRequest,
  getReport: ReportActions.getReport
}

export default connect(mapStateToProps,
  mapDispatchToProps)(RequestListScreenAdmin)
