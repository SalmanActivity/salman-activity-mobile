import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import NewDivision from '../Components/NewDivision'

import DivisionActions from '../Redux/DivisionRedux'

// Styles
import styles from './Styles/NewDivisionScreenStyles'

class NewDivisionScreen extends Component {
  static PropTypes = {
    newDivision: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  newDivisionHandler (name) {
    const {newDivision, token} = this.props
    newDivision(token, name)
  }

  render () {
    const {error, postingDivision, back, getDivisions, token} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container}
          keyboardShouldPersistTaps='handled'>

          <ScrollView style={styles.section}
            keyboardShouldPersistTaps='handled'>

            <NewDivision
              newDivisionHandler={this.newDivisionHandler.bind(this)}
              backHandler={() => { back(); getDivisions(token) }}
              error={error}
              disabled={!!postingDivision}
            />

          </ScrollView>

        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  newDivision: DivisionActions.newDivision,
  getDivisions: DivisionActions.getDivisions,
  back: () => ({ type: 'Navigation/BACK' })
}

const mapStateToProps = (state) => ({
  error: state.division.postingDivisionError,
  postingDivision: state.division.postingDivision,
  token: state.auth.token
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDivisionScreen)
