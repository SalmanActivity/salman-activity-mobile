import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, Text } from 'react-native'
import { connect } from 'react-redux'
import DivisionActions from '../Redux/DivisionRedux'
import { AuthSelectors } from '../Redux/AuthRedux'
import DataList from '../Components/DataList'
import ActionButton from 'react-native-action-button'

// Styles
import styles from './Styles/DivisionListScreenStyles'

class DivisionListScreen extends Component {
  componentDidMount () {
    const { token, getDivisions } = this.props
    getDivisions(token)
  }

  render () {
    const { division, navigation } = this.props
    const { divisions, fetchingDivisions, fetchingDivisionsError } = division
    const {navigate} = navigation

    const transformedDivisions = divisions.map(division => ({
      id: division.id,
      title: division.name
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingDivisions
            ? <ActivityIndicator />
            : (
              fetchingDivisionsError
              ? <Text style={styles.error}>{fetchingDivisionsError}</Text>
              : <DataList data={transformedDivisions} />
            )
          }
        </ScrollView>

        <ActionButton
          buttonColor='rgba(231,76,60,1)'
          onPress={() => navigate('NewDivisionScreen')}
        />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  token: AuthSelectors.getToken(state),
  division: state.division
})

const mapDispatchToProps = {
  getDivisions: DivisionActions.getDivisions
}

export default connect(mapStateToProps, mapDispatchToProps)(DivisionListScreen)
