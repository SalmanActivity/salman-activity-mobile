import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import { connect } from 'react-redux'
import LocationActions from '../Redux/LocationRedux'
import { AuthSelectors } from '../Redux/AuthRedux'
import DataList from '../Components/DataList'
import ActionButton from 'react-native-action-button'

// Styles
import styles from './Styles/LocationListScreenStyles'

class LocationListScreen extends Component {
  updateLocation (id, locationData) {
    const {token, updateLocation} = this.props

    updateLocation(token, id, locationData)
  }

  componentDidMount () {
    const { token, getLocations } = this.props
    getLocations(token)
  }

  render () {
    const { location, navigation } = this.props
    const { locations,
      fetchingLocations, fetchingLocationsError } = location
    const {navigate} = navigation

    const transformedLocations = locations.map(location => ({
      id: location.id,
      title: `${location.name} (${location.enabled ? 'Aktif' : 'Tidak Aktif'})`,
      location
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingLocations
            ? <ActivityIndicator />
            : (
              fetchingLocationsError
              ? <Text style={styles.error}>{fetchingLocationsError}</Text>
              : <DataList
                data={transformedLocations}
                onPress={(id, item) => navigate('ActivationScreen', {
                  id,
                  category: 'Ruangan / Tempat',
                  name: item.location.name,
                  active: item.location.enabled,
                  loadingSelector: state => state.location.updatingLocation,
                  update: ::this.updateLocation,
                  errorSelector:
                    state => state.location.updatingLocationError})}
                />
            )
          }
        </ScrollView>

        <ActionButton
          buttonColor='rgba(00,96,88,1)'
          onPress={() => navigate('NewLocationScreen')}
        />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  token: AuthSelectors.getToken(state),
  location: state.location
})

const mapDispatchToProps = {
  getLocations: LocationActions.getLocations,
  updateLocation: LocationActions.updateLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationListScreen)
