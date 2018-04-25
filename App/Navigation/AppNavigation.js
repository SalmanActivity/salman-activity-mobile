import { StackNavigator } from 'react-navigation'

import LoadingScreen from '../Containers/LoadingScreen'
import AdminNavigation from './AdminNavigation'
import RegularNavigation from './RegularNavigation'
import LoggedOutNavigation from './LoggedOutNavigation'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LoadingScreen: { screen: LoadingScreen },
  AdminNavigation: { screen: AdminNavigation },
  RegularNavigation: { screen: RegularNavigation },
  LoggedOutNavigation: { screen: LoggedOutNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoadingScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
