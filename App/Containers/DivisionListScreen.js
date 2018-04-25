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
  updateDivision (id, divisionData) {
    const {token, updateDivision} = this.props

    updateDivision(token, id, divisionData)
  }

  componentDidMount () {
    const { token, getDivisions } = this.props
    getDivisions(token)
  }

  render () {
    const { division, navigation } = this.props
    const { divisions, updatingDivision, updatingDivisionError,
      fetchingDivisions, fetchingDivisionsError } = division
    const {navigate} = navigation

    const transformedDivisions = divisions.map(division => ({
      id: division.id,
      title: `${division.name} (${division.enabled ? 'Aktif' : 'Tidak Aktif'})`,
      division
    }))

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          {fetchingDivisions
            ? <ActivityIndicator />
            : (
              fetchingDivisionsError
              ? <Text style={styles.error}>{fetchingDivisionsError}</Text>
              : <DataList
                data={transformedDivisions}
                onPress={(id, item) => navigate('ActivationScreen', {
                  id,
                  category: 'Bidang',
                  name: item.division.name,
                  active: item.division.enabled,
                  loading: updatingDivision,
                  update: ::this.updateDivision,
                  error: updatingDivisionError})} />
            )
          }
        </ScrollView>

        <ActionButton
          buttonColor='rgba(00,96,88,1)'
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
  getDivisions: DivisionActions.getDivisions,
  updateDivision: DivisionActions.updateDivision
}

export default connect(mapStateToProps, mapDispatchToProps)(DivisionListScreen)
