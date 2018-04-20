import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import RequestActions from '../Redux/RequestRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import RequestDetail from '../Components/RequestDetail'
import {Button, Card} from 'react-native-elements'
import ActionButton from 'react-native-action-button'

// Styles
import styles from './Styles/RequestScreenAdminStyles'

class RequestListScreenAdmin extends Component {
  componentDidMount () {
    const {token, getRequest, navigation} = this.props
    const {state: {params: {id}}} = navigation

    getRequest(token, id)
  }

  updateRequest (requestData) {
    const {token, updateRequest,
      navigation: {state: {params: {id}}}} = this.props

    updateRequest(token, id, requestData)
  }

  render () {
    const {navigation: {navigate}, request: {request, fetchingRequest,
      fetchingRequestError, updatingRequest, updatingRequestError}} = this.props

    const {status} = request || {}

    return (
      <ScrollView style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingRequest || !request
            ? <ActivityIndicator />
            : (
              fetchingRequestError
                ? <Text style={styles.error}>{fetchingRequestError}</Text>
                : (
                  <Card>
                    <RequestDetail {...request} />

                    <View style={styles.separator} />

                    {status !== 'accepted' && (
                      <Button
                        title='Setujui'
                        buttonStyle={[styles.button, styles.buttonAccept]}
                        onPress={() => this.updateRequest({status: 'accepted'})}
                        loading={!!updatingRequest}
                        disabled={!!updatingRequest}
                      />
                    )}

                    {status !== 'rejected' && (
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

        <ActionButton
          buttonColor='rgba(00,96,88,1)'
          onPress={() => navigate('NewRequestScreen')}
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  token: AuthSelectors.getToken(state),
  request: state.request
})

const mapDispatchToProps = {
  getRequest: RequestActions.getRequest,
  updateRequest: RequestActions.updateRequest
}

export default connect(mapStateToProps,
  mapDispatchToProps)(RequestListScreenAdmin)
