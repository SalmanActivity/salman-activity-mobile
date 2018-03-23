import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import {connect} from 'react-redux'
import LocationActions from '../Redux/LocationRedux'
import {AuthSelectors} from '../Redux/AuthRedux'
import DataList from '../Components/DataList'

// Styles
import styles from './Styles/LocationListScreenStyles'

class LocationListScreen extends Component {
  componentDidMount () {
    const {token, getLocations} = this.props
    getLocations(token)
  }

  render () {
    const {location} = this.props
    const {locations, fetchingLocations, fetchingLocationsError} = location

    const transformedLocations = locations.map(location => ({
      id: location.id,
      title: `${location.name} (${location.enabled ? '' : 'Tidak '}Aktif)`
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingLocations
            ? <ActivityIndicator />
            : (
              fetchingLocationsError
              ? <Text style={styles.error}>{fetchingLocationsError}</Text>
              : <DataList data={transformedLocations} />
            )
          }
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: AuthSelectors.getToken(state),
  location: state.location
})

const mapDispatchToProps = {
  getLocations: LocationActions.getLocations
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationListScreen)
