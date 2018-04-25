import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import ActivityReport from '../Components/ActivityReport'

import {AuthSelectors} from '../Redux/AuthRedux'
import ReportActions from '../Redux/ReportRedux'

// Styles
import styles from './Styles/ActivityReportScreenStyles'

class ActivityReportScreen extends Component {
  static PropTypes = {
    error: PropTypes.string
  }

  newReport (content, photo) {
    const {token, newReport, navigation: {state: {params: {id}}}} = this.props

    newReport(token, id, content, photo)
  }

  render () {
    const {error, postingReport} = this.props

    return (
      <View style={styles.mainContainer} keyboardShouldPersistTaps='handled'>
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
          <ScrollView style={styles.section} keyboardShouldPersistTaps='handled' >
            <ActivityReport
              newReport={::this.newReport}
              error={error}
              disabled={!!postingReport}
            />
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const mapDispatchToProps = {
  newReport: ReportActions.newReport
}

const mapStateToProps = (state) => ({
  error: state.report.postingReportError,
  postingReport: state.report.postingReport,
  token: AuthSelectors.getToken
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivityReportScreen)
