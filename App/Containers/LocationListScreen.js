import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'
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
    const {locations, fetchingLocations} = location

    const transformedLocations = locations.map(location => ({
      id: location.id,
      title: location.name
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingLocations
            ? <ActivityIndicator />
            : (
              <DataList
                data={transformedLocations} />
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
