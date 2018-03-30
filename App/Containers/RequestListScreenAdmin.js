import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import RequestActions from '../Redux/RequestRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'

// Styles
import styles from './Styles/RequestListScreenAdminStyles'

class RequestListScreenAdmin extends Component {
  componentDidMount () {
    const {token, getRequests} = this.props
    getRequests(token, 6, 1970)
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
  getRequests: RequestActions.getRequests
}

export default connect(mapStateToProps,
  mapDispatchToProps)(RequestListScreenAdmin)
