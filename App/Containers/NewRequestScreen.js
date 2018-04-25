import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
import {connect} from 'react-redux'

import NewRequest from '../Components/NewRequest'

import RequestActions from '../Redux/RequestRedux'
import DivisionActions from '../Redux/DivisionRedux'
import LocationActions from '../Redux/LocationRedux'

// Styles
import styles from './Styles/NewRequestScreenStyles'

class NewRequestScreen extends Component {
  componentDidMount () {
    const {token, getDivisions, getLocations} = this.props
    getDivisions(token)
    getLocations(token)
  }

  newRequestHandler (name, description, division, location, startTime, endTime,
    participantNumber, participantDescription, speaker, personInCharge,
    phoneNumber) {
    const {newRequest, token} = this.props

    newRequest(token, name, description, division, location, startTime, endTime,
      participantNumber, participantDescription, speaker, personInCharge,
      phoneNumber)
  }

  onError (error) {
    const {newRequestFailure} = this.props
    newRequestFailure(error)
  }

  render () {
    const {error, postingRequest, divisions: initialDivisions,
      locations: initialLocations, fetchingDivisions,
      fetchingLocations, navigation: {state: {params: {admin}}}} = this.props

    const divisions = [{label: 'Bidang', value: null},
      ...initialDivisions.map(division =>
        ({label: division.name, value: division.id}))
    ]

    const locations = [{label: 'Tempat / Ruangan', value: null},
      ...initialLocations.map(location =>
        ({label: location.name, value: location.id}))
    ]

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled'>
            {fetchingDivisions || fetchingLocations
              ? <ActivityIndicator />
              : (
                <NewRequest
                  newRequestHandler={::this.newRequestHandler}
                  error={error}
                  disabled={!!postingRequest}
                  onError={::this.onError}
                  divisions={divisions}
                  locations={locations}
                  admin={admin}
                />
              )
            }
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  newRequest: RequestActions.newRequest,
  newRequestFailure: RequestActions.newRequestFailure,
  getDivisions: DivisionActions.getDivisions,
  getLocations: LocationActions.getLocations
}

const mapStateToProps = (state) => ({
  error: state.request.postingRequestError,
  postingRequest: state.request.postingRequest,
  token: state.auth.token,
  divisions: state.division.divisions,
  locations: state.location.locations,
  fetchingDivisions: state.division.fetchingDivisions,
  fetchingLocations: state.division.fetchingLocations
})

export default connect(mapStateToProps, mapDispatchToProps)(NewRequestScreen)
