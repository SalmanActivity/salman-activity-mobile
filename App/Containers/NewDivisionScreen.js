import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import NewDivision from '../Components/NewDivision'

import DivisionActions from '../Redux/DivisionRedux'

// Styles
import styles from './Styles/LoginScreenStyles'

class NewDivisionScreen extends Component {
  static PropTypes = {
    newDivision: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  newDivisionHandler (name) {
    const {newDivision} = this.props
    newDivision(name)
  }

  render () {
    const {error, loggingIn} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <NewDivision
              newDivisionHandler={this.newDivisionHandler.bind(this)}
              error={error}
              disabled={!!loggingIn}
            />
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  newDivision: DivisionActions.newDivision
}

const mapStateToProps = (state) => ({
  //error: state.auth.error,
  //loggingIn: state.auth.loggingIn
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDivisionScreen)
