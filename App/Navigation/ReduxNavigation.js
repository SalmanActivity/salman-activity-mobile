import React from 'react'
import { BackHandler, Platform } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { createReactNavigationReduxMiddleware,
  createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

class ReduxNavigation extends React.Component {
  componentWillMount () {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props

      if (nav.routes[0].routes[0].index === 0) {
        return false
      }

      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount () {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render () {
    return (
      <AppNavigation
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: createReduxBoundAddListener('root')
        })}
      />
    )
  }
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
